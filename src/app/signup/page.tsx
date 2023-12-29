"use client"
import { Button } from "@/components/ui/button";
import { Controller, Control } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import * as z from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
});

export default function Signup() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  // Define a submit handler
  function onSubmit(values: any) {
    // Do something with the form values
    // This will be type-safe and validated
    console.log(values);
  }

  


  return (
    <div className="space-y-8 w-screen h-screen flex justify-center items-center">
   <Form {...form}>
   
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
        
      
    
                      render={({ field }) => (
                          <div>
                              <FormLabel>Username</FormLabel>
                              <FormControl>
                                  <Input placeholder="username" />
                              </FormControl>
                              <FormDescription>
                                  This is your public display name.
                              </FormDescription>
                              <FormMessage />

                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                  <Input type="email" placeholder="email" />
                              </FormControl>
                              <FormDescription>
                                  This is your email display email.
                              </FormDescription>
                              <FormMessage />

                              <FormLabel>User password</FormLabel>
                              <FormControl>
                                  <Input type="password" placeholder="password" />
                              </FormControl>
                              <FormDescription>
                                  This is your private display password.
                              </FormDescription>
                              <FormMessage />
                          </div>
                      )} name={""}    />
    <Button type="submit" className="mt-4">
      Submit
    </Button>
  </form>
</Form>

  </div>
  );
}
