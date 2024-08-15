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
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useReCaptcha } from 'next-recaptcha-v3';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiHeartFill } from 'react-icons/pi';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(1, {
    message:
      'Por favor, introduce tu nombre para que pueda dirigirme a ti correctamente.',
  }),
  email: z
    .string()
    .min(1, {
      message: 'Necesito tu email para poder ponerme en contacto contigo.',
    })
    .email({ message: 'Debe ser un correo electrónico válido.' }),
  message: z.string().min(1, {
    message: 'Cuéntame cómo puedo ayudarte completando el campo de mensaje.',
  }),
});

export type FormSchema = z.infer<typeof formSchema>;

export default function PageNewForm() {
  const { toast } = useToast();
  const { executeRecaptcha } = useReCaptcha();

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function sendMessage(formData: FormSchema) {
    const token = await executeRecaptcha('form_submit');
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/form/send`,
      {
        method: 'POST',
        body: JSON.stringify({ form: formData, token }),
        headers: {
          'content-type': 'application/json',
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      // data is { errors: [{ error: mesagge }] }
      throw new Error(data.error);
    }
    return data;
  }

  function onSubmit(formData: FormSchema) {
    setIsLoading(true);
    sendMessage(formData)
      .then(() => {
        toast({
          title: '¡Éxito!',
          description:
            'Tu mensaje ha sido enviado correctamente. Te responderé a la mayor brevedad posible..',
        });
        form.reset();
        setIsLoading(false);
      })
      .catch((error: any) => {
        toast({
          variant: 'destructive',
          title: '¡Ups!',
          description: String(error?.message),
        });
        setIsLoading(false);
      });
  }

  return (
    <section id="contact" className="mb-10">
      <Button
        className="fixed right-5 bottom-5 flex justify-start items-center gap-3"
        onClick={() => router.push('/#contact')}
      >
        {' '}
        Charlemos <PiHeartFill className="text-xl" />
      </Button>
      <div className="container flex flex-col justify-start items-start gap-5">
        <Card>
          <CardHeader>
            <CardTitle className="font-semibold text-xl">Charlemos</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <p className="text-base dark:text-gray-300 leading-7">
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
                      <FormLabel className="text-current">Nombre*</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Ingresa tu nombre aquí"
                        />
                      </FormControl>
                      <FormMessage className="text-red-700" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-current">
                        Correo electrónico*
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Ingresa tu email aquí" />
                      </FormControl>
                      <FormMessage className="text-red-700" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-current">Mensaje*</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={5}
                          placeholder="¿En qué puedo ayudarte?"
                        />
                      </FormControl>
                      <FormMessage className="text-red-700" />
                    </FormItem>
                  )}
                />

                <div className="flex justify-center items-center">
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
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
