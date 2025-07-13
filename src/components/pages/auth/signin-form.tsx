"use client";

import * as yup from "yup";
import { Form } from "@/components/ui/form/form";
import FormContainer from "@/components/ui/form/Form/form-container";
import { InputControlType } from "@/components/ui/form/Form/input-control";
import { Row } from "@/components/grid/Row";
import { Col } from "@/components/grid/Col";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {

  Mail,

  Lock,
  ArrowRight,

} from "lucide-react";
import * as actions from "@/actions";
import { useToast } from "@/hooks/useToast";
import { Toaster } from "sonner";
import { redirect } from "next/navigation";
const formSchema = yup.object({
  email: yup.string().email().required("Required"),
  password: yup.string().required("Required"),
});

const SignInForm = () => {
  const { errorToast, successToast } = useToast();
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData: FormData) => {
    let res;
    let success = false;
    try {
      const isValid = await form.trigger();
      if (!isValid) return;
      res = await actions.login(formData);
      if (res.success && res.data) {
        success = true;
        successToast("Logged In Successfully");
      } else if (!res.success) {
        errorToast(res.data);
      }
    } catch (error: any) {
      errorToast(error.message);
    }
    if (success) {
      redirect("/");
    }
  };
  const inputs = [
    {
      formControl: InputControlType.Input,
      name: "email",
      label: {
        className:
          "absolute top-[50%] flex items-center h-[100%] pl-4  left-0 pointer-events-none inset-y-0",
        icon: (
          <Mail className="text-[12px] text-[#6B7280]" width={24} height={24} />
        ),
        prepend: true,
      },
      InputcontainerClass: "",
      inputProps: {
        type: "email",
        placeholder: "Email Address",
        className: "w-100",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },

    {
      name: "password",
      formControl: InputControlType.Input,
      label: {
        className:
          "absolute top-[50%] flex items-center pl-4  left-0 pointer-events-none inset-y-0",
        icon: (
          <Lock className="text-[12px] text-[#6B7280]" width={24} height={24} />
        ),
        prepend: true,
      },

      inputProps: {
        type: "password",
        placeholder: "Password",
        className: "w-100",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
  ];
  return (
    <Form {...form}>
      <Toaster position="top-right" />
      <form action={onSubmit} className="space-y-6">
        <Row className="justify-between gap-2">
          {inputs.map(({ colClass, ...input }, i) => (
            <Col key={input.name} className={`${colClass} my-[10px]`}>
              <FormContainer control={form.control} input={input} />
            </Col>
          ))}
        </Row>
        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 group flex w-full items-center justify-center gap-2 rounded-xl py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          Login
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
      </form>
    </Form>
  );
};

export default SignInForm;
