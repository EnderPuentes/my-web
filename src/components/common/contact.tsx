'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'El campo es requerido.',
  }),
  email: z
    .string()
    .min(1, {
      message: 'El campo es requerido.',
    })
    .email({ message: 'Debe ser un correo electrónico válido.' }),
});

export default function PageNewForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  function onSubmit(form: z.infer<typeof formSchema>) {}

  return (
    <section className="mb-10">
      <div className="container flex flex-col justify-start items-start gap-5">
        <Card>
          <CardHeader>
            <CardTitle className="font-semibold text-xl">Charlemos</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <p className="text-base leading-7">
              Si estás interesado en colaborar conmigo o tienes alguna propuesta
              de proyecto, por favor no dudes en contactarme. Puedes enviarme un
              correo electrónico a{' '}
              <Link
                className="text-gray-500"
                href="mailto:hello@enderpuentes.com"
              >
                hello@enderpuentes.com{' '}
              </Link>
              o utilizar el formulario de contacto que encontrarás a
              continuación.
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo electrónico*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje*</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={5} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-center items-center">
                  <Button type="submit">Enviar Mensaje</Button>
                </div>
              </form>
            </Form>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </section>
  );
}
