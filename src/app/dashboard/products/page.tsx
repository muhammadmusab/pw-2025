import AddProduct from "@/components/pages/dashboard/products/add-product";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Plus, Sparkles, Edit, Package, DollarSign, Tag } from "lucide-react";
import Image from "next/image";

const mockProducts = [
  {
    id: 1,
    name: "Wireless Earbuds",
    image: "/images/earbuds.jpg",
    category: "Tech",
    price: "$39.99",
    description: "Premium wireless earbuds with noise cancellation",
  },
  {
    id: 2,
    name: "Mini Blender",
    image: "/images/mini-blender.jpg",
    category: "Kitchen",
    price: "$24.99",
    description: "Compact blender perfect for smoothies and shakes",
  },
  {
    id: 3,
    name: "Yoga Mat",
    image: "/images/yoga-mat.webp",
    category: "Fitness",
    price: "$19.99",
    description: "Non-slip yoga mat for all your workout needs",
  },
  {
    id: 4,
    name: "Yoga Mat",
    image: "/images/yoga-mat.webp",
    category: "Fitness",
    price: "$19.99",
    description: "Non-slip yoga mat for all your workout needs",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFB] via-[#FFFFFF] to-[#F3F4F6] p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-8 rounded-3xl border border-gray-100 bg-[#FFFFFF] p-8 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="text-2xl">📦</span>
                <h1 className="text-text text-3xl font-bold">Your Products</h1>
              </div>
              <p className="text-lg text-[#6B7280]">
                Manage your products and generate magical social media content
                for each one.
              </p>
            </div>
            <AddProduct type="second-product" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 bg-[#FFFFFF] p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-xl">
                <Package className="text-primary h-6 w-6" />
              </div>
              <div>
                <div className="text-text text-2xl font-bold">
                  {mockProducts.length}
                </div>
                <div className="text-sm text-[#6B7280]">Total Products</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-[#FFFFFF] p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-accent/10 flex h-12 w-12 items-center justify-center rounded-xl">
                <Sparkles className="text-accent h-6 w-6" />
              </div>
              <div>
                <div className="text-text text-2xl font-bold">24</div>
                <div className="text-sm text-[#6B7280]">Posts Generated</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-[#FFFFFF] p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-success/10 flex h-12 w-12 items-center justify-center rounded-xl">
                <Tag className="text-success h-6 w-6" />
              </div>
              <div>
                <div className="text-text text-2xl font-bold">3</div>
                <div className="text-sm text-[#6B7280]">Categories</div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {mockProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {mockProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-[#FFFFFF] shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader className="relative h-48 overflow-hidden p-0">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="text-primary rounded-full bg-[#FFFFFF]/90 px-3 py-1 text-sm font-semibold backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3 p-6">
                  <CardTitle className="text-text group-hover:text-primary text-xl font-bold transition-colors duration-200">
                    {product.name}
                  </CardTitle>
                  <p className="text-sm leading-relaxed text-[#6B7280]">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-text text-2xl font-bold">
                      {product.price}
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3 p-6 pt-0">
                  <Button
                    variant="outline"
                    className="border-primary/20 text-primary hover:border-primary/30 hover:bg-primary/5 flex-1 rounded-xl bg-transparent font-semibold transition-all duration-200"
                  >
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button className="group bg-primary hover:bg-primary/90 flex-1 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl">
                    <Sparkles className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    Generate Post
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="rounded-3xl border border-gray-100 bg-[#FFFFFF] p-12 text-center shadow-sm">
            <div className="mx-auto max-w-md">
              <div className="bg-primary/10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full">
                <Package className="text-primary h-10 w-10" />
              </div>
              <h3 className="text-text mb-4 text-2xl font-bold">
                No Products Yet
              </h3>
              <p className="mb-8 leading-relaxed text-[#6B7280]">
                Start by adding your first product to begin creating magical
                social media content. Upload product details and let our AI work
                its magic!
              </p>
               <AddProduct type='first-product' />
            </div>
          </div>
        )}

        {/* Quick Tips */}
        <div className="border-primary/10 from-primary/5 to-accent/5 mt-8 rounded-3xl border bg-gradient-to-r p-8">
          <div className="text-center">
            <h3 className="text-text mb-4 text-2xl font-bold">💡 Pro Tips</h3>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
              <div className="text-center">
                <span className="mb-2 block text-2xl">📸</span>
                <p className="text-sm text-[#6B7280]">
                  <span className="text-text font-semibold">
                    High-quality images
                  </span>{" "}
                  generate better social posts
                </p>
              </div>
              <div className="text-center">
                <span className="mb-2 block text-2xl">📝</span>
                <p className="text-sm text-[#6B7280]">
                  <span className="text-text font-semibold">
                    Detailed descriptions
                  </span>{" "}
                  help AI create better content
                </p>
              </div>
              <div className="text-center">
                <span className="mb-2 block text-2xl">🏷️</span>
                <p className="text-sm text-[#6B7280]">
                  <span className="text-text font-semibold">
                    Clear categories
                  </span>{" "}
                  improve content targeting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
