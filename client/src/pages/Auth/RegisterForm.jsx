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
    email: z
        .string()
        .min(4, {
            message: 'email es muy corto',
        })
        .email()
        .nonempty({ message: 'email no puede estar vacío' }),
    password: z.string().min(4, {
        message: 'password es muy corto',
    }),
    username: z.string().min(4, {
        message: 'username es muy corto',
    }),
});

const RegisterForm = () => {
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(formSchema),
    });
    const onSubmit = (values) => {
        console.log(values);
        userStore.setState({ user: values });
        navigate('/dashboard/pacientes');
    };
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
                            <FormLabel htmlFor={field.id}>Correo:</FormLabel>
                            <Input {...field} />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="username"
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
                <Button
                    type="submit"
                    className="bg-pink-400 font-bold uppercase"
                >
                    Enviar
                </Button>
            </form>
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
