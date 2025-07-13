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
  Eye,
  EyeOff,
  User,
  Mail,
  Building,
  Lock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import * as actions from "@/actions";
import { useToast } from "@/hooks/useToast";
import { Toaster } from "sonner";
import { redirect } from "next/navigation";
const formSchema = yup.object({
  fullName: yup.string().required("Required"),
  email: yup.string().email().required("Required"),
  password: yup.string().min(8).required("Required"),
  confirmPassword: yup
    .string()
    .required("Repeat Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  businessName: yup.string().required("Required"),
});

const SignUpForm = () => {
  const { errorToast, successToast } = useToast();
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      businessName: "",
    },
  });

  const onSubmit = async (formData: FormData) => {
    let res;
    let success = false;
    try {
      const isValid = await form.trigger();
      if (!isValid) return;
      res = await actions.register(formData);
      if (
        res.success &&
        res.data &&
        res.data.auth &&
        res.data.auth.status === "activation_pending"
      ) {
        success = true;
        successToast("Please check your email inbox to complete registration");
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
      name: "fullName",
      InputcontainerClass: "",
      label: {
        className: "absolute top-[50%] flex items-center pl-4  left-0 pointer-events-none inset-y-0",
        icon: (
          <User width={24} height={24} className="text-[12px] text-[#6B7280]" />
        ),
        prepend: true,
      },
      inputProps: {
        type: "text",
        placeholder: "Full Name",
        className:"w-100"
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      formControl: InputControlType.Input,
      name: "email",
      label: {
        className: "absolute top-[50%] flex items-center pl-4  left-0 pointer-events-none inset-y-0",
        icon: (
          <Mail className="text-[12px] text-[#6B7280]" width={24} height={24} />
        ),
        prepend: true,
      },
      InputcontainerClass: "",
      inputProps: {
        type: "email",
        placeholder: "Email Address",
        className:"w-100"
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      formControl: InputControlType.Input,
      name: "businessName",
      InputcontainerClass: "",
      label: {
        className: "absolute top-[50%] flex items-center pl-4  left-0 pointer-events-none inset-y-0",
        icon: (
          <Building className="text-[12px] text-[#6B7280]" width={24} height={24}/>
        ),
        prepend: true,
      },
      inputProps: {
        type: "text",
        placeholder: "Business Name",
        className:"w-100"
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      name: "password",
      formControl: InputControlType.Input,
      label: {
        className: "absolute top-[50%] flex items-center pl-4  left-0 pointer-events-none inset-y-0",
        icon: (
          <Lock className="text-[12px] text-[#6B7280]" width={24} height={24}/>
        ),
        prepend: true,
      },

      inputProps: {
        type: "password",
        placeholder: "Password",
        className:"w-100"
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      name: "confirmPassword",
      formControl: InputControlType.Input,
      label: {
        className: "absolute top-[50%] flex items-center pl-4  left-0 pointer-events-none inset-y-0",
        icon: (
          <Lock className="text-[12px] text-[#6B7280]" width={24} height={24}/>
        ),
        prepend: true,
      },
      inputProps: {
        type: "password",

        placeholder: "Confirm Password",
        className:"w-100"
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
          Create Account
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
      </form>
    </Form>
  );
};

export default SignUpForm;
