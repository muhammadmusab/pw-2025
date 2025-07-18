"use client";

import * as yup from "yup";
import { Form } from "@/components/ui/form/form";
import FormContainer from "@/components/ui/form/Form/form-container";
import { InputControlType } from "@/components/ui/form/Form/input-control";
import { Row } from "@/components/grid/Row";
import { Col } from "@/components/grid/Col";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as actions from "@/actions";
import { useToast } from "@/hooks/useToast";
import { Toaster } from "sonner";
import { redirect } from "next/navigation";

import { Plus, Sparkles, Edit, Package, DollarSign, Tag } from "lucide-react";
import {
  SheetTrigger,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useFileUpload } from "@/hooks/useFileUpload";

const formSchema = yup.object({
  productName: yup.string().required("Product name is required"),
  description: yup.string().required("Description is required"),
  category: yup.string().required("Category is required"),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be positive"),
  image: yup.mixed().required("Image is required").nullable(),
});
const AddProduct = ({ type }: { type: "first-product" | "second-product" }) => {
  const { errorToast, successToast } = useToast();

  const {
    handleUpload,
    rejectedFiles,
    handleDelete,
    handleRetry,
    previewFiles,
    status,
  } = useFileUpload({ remoteUrl: "/", type: "single" });
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      productName: "",
      description: "",
      category: "",
      price: 0,
      image: null,
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
      name: "productName",
      label: {
        className:
          "absolute top-[50%] flex items-center h-[100%] pl-4  left-0 pointer-events-none inset-y-0",
        icon: (
          // <Package className="h-5 w-5 text-[#6B7280]" />
          <Package
            className="text-[12px] text-[#6B7280]"
            width={24}
            height={24}
          />
        ),
        prepend: true,
      },
      InputcontainerClass: "",
      inputProps: {
        type: "text",
        placeholder: "Product Name",
        className: "w-full",
      },
      colClass: "max-w-[100%] basis-[100%] w-full",
    },
    {
      name: "Description",
      formControl: InputControlType.Textarea,

      inputProps: {
        type: "Description",
        placeholder: "Product Description",
        className: "w-full",
      },
      colClass: "max-w-[100%] basis-[100%] w-full",
    },

    {
      name: "category",
      formControl: InputControlType.Input,
      label: {
        className:
          "absolute top-[50%] flex items-center pl-4  left-0 pointer-events-none inset-y-0",
        icon: (
          <Tag className="text-[12px] text-[#6B7280]" width={24} height={24} />
        ),
        prepend: true,
      },

      inputProps: {
        type: "category",
        placeholder: "Electronics, Fashion, etc.",
        className: "w-full",
      },
      colClass: "max-w-[100%] basis-[100%] w-full",
    },
    {
      name: "price",
      formControl: InputControlType.Input,
      label: {
        className:
          "absolute top-[50%] flex items-center pl-4  left-0 pointer-events-none inset-y-0",
        icon: (
          <DollarSign
            className="text-[12px] text-[#6B7280]"
            width={24}
            height={24}
          />
        ),
        prepend: true,
      },

      inputProps: {
        type: "number",
        className: "w-full",
      },
      colClass: "max-w-[100%] basis-[100%] w-full",
    },
    {
      formControl: InputControlType.FileUpload,
    //   previewPrepend: (
    //     <div className="text-center">
    //       <p className="text-light">
    //         Maximum allowed Size for each file is 1 MB
    //       </p>
    //       <p className="text-light">Only Images and Videos are allowed</p>
    //     </div>
    //   ),
      accept: {
        // prop accepted by dropzone to allow specific files only
        "image/png": [".png"],
        "image/jpg": [".jpg"],
        "image/jpeg": [".jpeg"],
      },
      maxSize: 2048 * 1000,
      onDrop: handleUpload,
      rejectedFiles: rejectedFiles,
      onDelete: handleDelete,
      onRetry: handleRetry,
      files: previewFiles,
      name: "media",
      status,
      InputcontainerClass: "w-[100%]",
      label: {
        text: "Media",
        prepend: true,
      },

      inputProps: {
        // type: "text",
        // placeholder: "Enter Label",
        className: "pl-0 w-[100%]",
      },
      colClass: "max-w-[100%] basis-[100%] w-full",
    },
  ];
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button
          className={`group flex items-center gap-2 ${type == "first-product" ? "justify-center w-full" : "justify-start"}`}
        >
          <Plus className="h-5 w-5 transition-transform group-hover:scale-110" />
          Add Product
        </Button>
      </SheetTrigger>
      <SheetContent className="max-w-[1000px] !w-[600px] rounded-[10px] border border-gray-100 bg-[#FFFFFF] p-0 px-2">
        <SheetHeader className="p-8 pb-4">
          <SheetTitle className="text-text flex items-center gap-2 text-2xl font-bold">
            <span className="text-xl">✨</span>
            Add New Product
          </SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <Toaster position="top-right" />
          <form action={onSubmit} className="space-y-6 h-full px-2">
            <Row className="justify-between gap-2 overflow-y-auto h-[80vh]">
              {inputs.map(({ colClass, ...input }, i) => (
                <Col key={input.name} className={`${colClass} my-[10px]`}>
                  <FormContainer control={form.control} input={input} />
                </Col>
              ))}
            </Row>
            <Button
              type="submit"
              variant={"default"}
              className="w-full rounded-xl py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              Save Product
            </Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default AddProduct;
