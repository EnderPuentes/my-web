'use client';

import { Button } from '@/components/ui/button';
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
import { ContactSchema } from '@/services/sanity/parser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useReCaptcha } from 'next-recaptcha-v3';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiRocketLaunch } from 'react-icons/pi';
import { z } from 'zod';
import { sendContactForm } from './actions';

type Props = {
  data: ContactSchema;
};

export default function Contact({ data }: Props) {
  const router = useRouter();
  const { toast } = useToast();
  const { executeRecaptcha } = useReCaptcha();
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    name: z.string().min(1, {
      message: data.inputs.name.errors.required,
    }),
    email: z
      .string()
      .min(1, {
        message: data.inputs.email.errors.required,
      })
      .email({
        message: data.inputs.email.errors.invalid,
      }),
    message: z.string().min(1, {
      message: data.inputs.message.errors.required,
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
        title: data.status.success.title,
        description: data.status.success.description,
      });

      form.reset();
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: data.status.error.title,
        description: data.status.error.description || error.message,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contact" className="mt-16 sm:mt-28">
      <Button
        className="group fixed right-5 bottom-5 flex items-center justify-center h-14 w-14 rounded-full transform transition-all duration-500 hover:w-[170px] dark:bg-slate-800  dark:text-white"
        onClick={() => router.push('#contact')}
      >
        <span>
          <PiRocketLaunch className="text-2xl" />
        </span>
        <span className="whitespace-nowrap transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-full group-hover:ml-3">
          {data.title}
        </span>
      </Button>
      <div className="container flex flex-col justify-start items-start gap-5">
        <h2 className="font-semibold text-lg sm:text-2xl sm:mb-5">
          {data.title}
        </h2>
        <div>
          <p className="text-xs sm:text-base leading-5 sm:leading-7 dark:text-gray-300 mb-5 sm:mb-10">
            {data.description}
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-current text-xs sm:text-base">
                      {data.inputs.name.label}*
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={data.inputs.name.placeholder}
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
                      {data.inputs.email.label}*
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={data.inputs.email.placeholder}
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
                      {data.inputs.message.label}*
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={5}
                        placeholder={data.inputs.message.placeholder}
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
                  className="text-xs sm:text-base flex justify-center items-center gap-2 rounded-full font-light py-6 dark:bg-slate-800 dark:text-white"
                >
                  <PiRocketLaunch className="text-xl" />
                  {isLoading ? data.loading.on : data.loading.off}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
