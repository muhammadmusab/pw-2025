"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      quote:
        "PostWizard auto-generates ads and posts from my Shopify products. Our ROAS improved by 250%.",
      author: "Sarah M.",
      role: "E-commerce Founder",
      avatar: "SM",
      rating: 5,
      business: "Online Store",
    },
    {
      quote:
        "The WhatsApp notifications are a lifesaver. I never miss posting or ad launches.",
      author: "Ali K.",
      role: "DTC Brand Owner",
      avatar: "AK",
      rating: 5,
      business: "Fashion & Apparel",
    },
    {
      quote:
        "Our agency scaled fast with white-label and automated client campaigns. Zero manual work now.",
      author: "David K.",
      role: "Marketing Agency CEO",
      avatar: "DK",
      rating: 5,
      business: "Digital Marketing",
    },
    {
      quote:
        "I synced my WooCommerce store and instantly got 30 ready-to-post product ads. Unreal speed!",
      author: "Hina L.",
      role: "Store Owner",
      avatar: "HL",
      rating: 5,
      business: "Beauty & Wellness",
    },
    {
      quote:
        "Scheduling + AI ads in one tool means we cut tools cost by 70%. PostWizard is a no-brainer.",
      author: "Junaid R.",
      role: "Startup Founder",
      avatar: "JR",
      rating: 5,
      business: "Consumer Goods",
    },
  ];

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    
    slides: { perView: 1, spacing: 20 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2, spacing: 20 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 20 } },
    },
  });

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F9FAFB] via-white to-[#F3F4F6] py-20 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="bg-success/10 text-success mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <Star className="h-4 w-4 fill-current" />
            Customer Success Stories
          </div>
          <h2 className="text-text text-3xl sm:text-4xl font-bold md:text-5xl">
            What{" "}
            <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
              E-commerce & Agencies
            </span>{" "}
            Say
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="keen-slider__slide">
                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="text-primary h-6 w-6" />
                  </div>

                  {/* Rating */}
                  <div className="mb-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-accent h-4 w-4 fill-current"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-text mb-6 text-lg font-medium">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="from-primary to-accent flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r font-bold text-white">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-[#6B7280]">
                        {testimonial.role}
                      </div>
                      <div className="text-primary text-xs">
                        {testimonial.business}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="absolute -bottom-12 left-1/2 flex -translate-x-1/2 transform gap-4">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="rounded-full border border-gray-200 bg-white p-3 shadow transition hover:shadow-md"
            >
              <ArrowLeft className="text-primary h-5 w-5" />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="rounded-full border border-gray-200 bg-white p-3 shadow transition hover:shadow-md"
            >
              <ArrowRight className="text-primary h-5 w-5" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-text mb-4 text-2xl font-bold">
            Ready to Boost Your Sales with PostWizard ?
          </h3>
          <button className="bg-primary hover:bg-primary/90 rounded-xl px-8 py-4 font-semibold text-white shadow-lg transition-all">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}
