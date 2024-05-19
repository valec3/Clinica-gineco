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

const formSchema = z.object({
    email: z.string().min(4, {
        message: 'email is too short',
    }),
    password: z.string().min(4, {
        message: 'password is too short',
    }),
});
const LoginForm = () => {
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(formSchema),
    });
    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
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
                    Enviar
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
