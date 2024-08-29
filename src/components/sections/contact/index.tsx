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
import { Locale } from '@/types/locales';
import { zodResolver } from '@hookform/resolvers/zod';
import { useReCaptcha } from 'next-recaptcha-v3';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiRocketLaunchBold } from 'react-icons/pi';
import { z } from 'zod';
import { sendContactForm } from './actions';

type Props = {
  t: Locale['pages']['home']['contact'];
};

export default function Contact({ t }: Props) {
  const router = useRouter();
  const { toast } = useToast();
  const { executeRecaptcha } = useReCaptcha();
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    name: z.string().min(1, {
      message: t.inputs.name.errors.required,
    }),
    email: z
      .string()
      .min(1, {
        message: t.inputs.email.errors.required,
      })
      .email({
        message: t.inputs.email.errors.invalid,
      }),
    message: z.string().min(1, {
      message: t.inputs.message.errors.required,
    }),
  });

  type FormSchema = z.infer<typeof formSchema>;

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(formData: FormSchema) {
    setIsLoading(true);
    try {
      const token = await executeRecaptcha('form_submit');
      await sendContactForm({ ...formData, token });

      toast({
        title: t.status.success.title,
        description: t.status.success.description,
      });

      form.reset();
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: t.status.error.title,
        description: error.message || t.status.error.description,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contact" className="mb-10">
      <Button
        className="group fixed right-5 bottom-5 flex items-center justify-center h-14 w-14 rounded-full transform transition-all duration-500 hover:w-[170px]"
        onClick={() => router.push('#contact')}
      >
        <span>
          <PiRocketLaunchBold className="text-2xl" />
        </span>
        <span className="whitespace-nowrap transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-full group-hover:ml-3">
          {t.title}
        </span>
      </Button>
      <div className="container flex flex-col justify-start items-start gap-5">
        <Card>
          <CardHeader>
            <CardTitle className="font-semibold text-lg sm:text-xl">
              {t.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <p className="text-xs sm:text-base leading-5 sm:leading-7 dark:text-gray-300">
              {t.description}
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
                      <FormLabel className="text-current text-xs sm:text-base">
                        {t.inputs.name.label}*
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={t.inputs.name.placeholder}
                          className="text-xs sm:text-base"
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
                      <FormLabel className="text-current text-xs sm:text-base">
                        {t.inputs.email.label}*
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={t.inputs.email.placeholder}
                          className="text-xs sm:text-base"
                        />
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
                      <FormLabel className="text-current text-xs sm:text-base">
                        {t.inputs.message.label}*
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={5}
                          placeholder={t.inputs.message.placeholder}
                          className="text-xs sm:text-base"
                        />
                      </FormControl>
                      <FormMessage className="text-red-700" />
                    </FormItem>
                  )}
                />

                <div className="flex justify-center items-center">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="text-xs sm:text-base flex justify-center items-center gap-2 rounded-full"
                  >
                    <PiRocketLaunchBold className="text-xl" />
                    {isLoading ? t.loading.on : t.loading.off}
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
