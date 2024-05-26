import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import userStore from '@/store/userStore';
const formSchema = z.object({
    email: z.string().min(4, {
        message: 'email is too short',
    }),
    password: z.string().min(4, {
        message: 'password is too short',
    }),
});
import { loginUser } from '@/services';
import { useEffect, useState } from 'react';
import BtnGoogle from './BtnGoogle';

const LoginForm = () => {
    const { setUser } = userStore((state) => state);
    const [userGoogle, setUserGoogle] = useState({}); //[1
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(formSchema),
    });
    async function onSubmit(values) {
        console.log(values);
        setIsLoading(true);
        const user = await loginUser(values);
        if (user.id === undefined) {
            setError('Invalid credentials');
            setIsLoading(false);
            return;
        }
        console.log(user);
        setUser(user);
        setIsLoading(false);
        navigate('/dashboard/pacientes');
    }
    useEffect(() => {
        if (!userGoogle?.access_token) return;

        const fetchUser = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(
                    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userGoogle.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${userGoogle.access_token}`,
                            Accept: 'application/json',
                        },
                    },
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch user information');
                }

                const data = await response.json();

                const user = await loginUser({
                    email: data.email,
                    password: data.id,
                });

                if (!user) {
                    setError('Invalid credentials');
                } else {
                    setUser(user); // assuming setUser sets the logged-in user
                    navigate('/dashboard/inicio');
                }
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, [userGoogle, setUser, navigate]);
    return (
        <Form {...form}>
            <h2 className="mb-10 text-2xl font-bold">
                Inicia sesión en nuestra plataforma
            </h2>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col justify-start gap-y-3"
            >
                <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem className="flex flex-col items-start">
                            <FormLabel htmlFor={field.id} required>
                                Correo:
                            </FormLabel>
                            <Input {...field} />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="password"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem className="flex flex-col items-start">
                            <FormLabel htmlFor={field.id}>Contraseña</FormLabel>
                            <Input type="password" {...field} />
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="bg-pink-400 font-bold uppercase"
                >
                    {isLoading ? 'Cargando...' : 'Iniciar sesión'}
                </Button>
                {error && <FormMessage type="error">{error}</FormMessage>}
            </form>
            <BtnGoogle
                setUserGoogle={setUserGoogle}
                text="Iniciar sesión con Google"
            />

            <FormDescription className="mt-4">
                ¿No tienes una cuenta?{' '}
                <Link to="/auth/register" className="text-pink-400">
                    Regístrate
                </Link>
            </FormDescription>
        </Form>
    );
};

export default LoginForm;
