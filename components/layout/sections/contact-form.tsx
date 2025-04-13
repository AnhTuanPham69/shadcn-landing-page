"use client";
import { useTheme } from "next-themes";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TelegramIcon from "@/components/icons/telegram";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactForn = () => {
  const { theme } = useTheme();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Web Development",
      message: "",
    },
  });

  return (
    <Dialog>
      <DialogTrigger className="flex items-center bg-[#27685c] rounded-full text-white text-nowrap p-4 font-medium w-[50px] h-[50px]">
        <TelegramIcon />
      </DialogTrigger>
      <DialogContent className="w-[80%] md:w-full rounded-md">
        <DialogHeader>
          <DialogTitle>Đăng ký tư vấn</DialogTitle>
          <DialogDescription>
            <Form {...form}>
              <form onSubmit={() => {}} className="grid w-full gap-4 mt-[20px]">
                <FormField
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Họ Và Tên</FormLabel>
                      <FormControl>
                        <Input placeholder="Họ Và Tên" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Số điện thoại</FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập số điện thoại" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Ghi chú</FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập thông tin cần tư vấn" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogClose>
                  <Button className="mt-4 bg-[#27685c] w-full hover:bg-[#27685c] hover:opacity-90">
                    Đăng Ký
                  </Button>
                </DialogClose>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
