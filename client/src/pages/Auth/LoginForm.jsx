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
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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
import { useState } from 'react';

const LoginForm = () => {
    const { setUser } = userStore((state) => state);
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
            </form>

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
