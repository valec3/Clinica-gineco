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
import { registerUser } from '@/services/index.js';
import { useEffect, useState } from 'react';
import BtnGoogle from './BtnGoogle';
const formSchema = z.object({
    email: z
        .string()
        .min(4, {
            message: 'email es muy corto',
        })
        .email(),
    password: z.string().min(4, {
        message: 'password es muy corto',
    }),
    name: z.string().min(4, {
        message: 'name es muy corto',
    }),
});

const RegisterForm = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = userStore((state) => state);
    const [userGoogle, setUserGoogle] = useState({}); //[1
    const form = useForm({
        resolver: zodResolver(formSchema),
    });
    const onSubmit = async (values) => {
        console.log(values);
        setIsLoading(true);
        const newUser = await registerUser(values);
        console.log('newUser', newUser);
        setUser(newUser);
        setIsLoading(false);
        navigate('/dashboard');
    };
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
                const user = await registerUser({
                    email: data.email,
                    password: data.id,
                    name: data.name,
                });

                if (user) {
                    setUser(user);
                    navigate('/dashboard/inicio');
                }
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, [userGoogle, setUser, navigate]);
    return (
        <Form {...form}>
            <h2 className="mb-10 text-2xl font-bold">
                Regístrate para obtener una cuenta en nuestra plataforma{' '}
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
                    name="name"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem className="flex flex-col items-start">
                            <FormLabel htmlFor={field.id} required>
                                Nombre de usuario:
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
                            <FormLabel htmlFor={field.id} required>
                                Contraseña:
                            </FormLabel>
                            <Input type="password" {...field} />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex items-center gap-x-3">
                    <input type="checkbox" />
                    <a
                        onClick={() => navigate('/terms')}
                        className="cursor-pointer underline"
                    >
                        Acepto los términos y condiciones
                    </a>
                </div>
                <Button
                    type="submit"
                    className="bg-pink-400 font-bold uppercase"
                >
                    {isLoading ? 'Cargando...' : 'Registrarse'}
                </Button>
            </form>
            <BtnGoogle
                setUserGoogle={setUserGoogle}
                text="Registrarse con Google"
            />
            <FormDescription className="mt-4">
                ¿Ya tienes una cuenta?{' '}
                <Link to="/auth/login" className="text-pink-500">
                    Inicia sesión
                </Link>
            </FormDescription>
        </Form>
    );
};

export default RegisterForm;
