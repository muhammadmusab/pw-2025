import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const businesses = [
    "🏪 Retail Stores",
    "🍕 Restaurants",
    "💄 Beauty Salons",
    "🏋️ Fitness Studios",
    "📚 Educational Services",
    "🏠 Real Estate",
    "🎨 Creative Agencies",
    "⚕️ Healthcare",
  ];
  const testimonials = [
    {
      quote:
        "PostWizard cut my content creation time from 5 hours to 15 minutes a week. Game changer!",
      author: "Amna S.",
      role: "Salon Owner",
      avatar: "AS",
      rating: 5,
      business: "Beauty & Wellness",
    },
    {
      quote:
        "I just add my products and let it do the work. Our engagement tripled.",
      author: "Junaid R.",
      role: "Boutique Manager",
      avatar: "JR",
      rating: 5,
      business: "Fashion Retail",
    },
    {
      quote:
        "The AI actually understands my products! Posts look like I spent hours crafting them.",
      author: "Maria L.",
      role: "Restaurant Owner",
      avatar: "ML",
      rating: 5,
      business: "Food & Beverage",
    },
    {
      quote:
        "My clients love the white-label feature. PostWizard helps me scale my agency effortlessly.",
      author: "David K.",
      role: "Marketing Agency CEO",
      avatar: "DK",
      rating: 5,
      business: "Digital Marketing",
    },
    {
      quote:
        "Finally, a tool that gets e-commerce! Sales from social media increased 200%.",
      author: "Sarah M.",
      role: "Online Store Owner",
      avatar: "SM",
      rating: 5,
      business: "E-commerce",
    },
    {
      quote:
        "The scheduling feature is perfect. I set it once and my gym's social media runs itself.",
      author: "Alex T.",
      role: "Fitness Studio Owner",
      avatar: "AT",
      rating: 5,
      business: "Fitness & Health",
    },
  ];
  const benefits = [
    {
      className: "text-accent",
      largeHeading: "95%",
      heading: "Time Saved",
      text: "vs manual posting",
    },
    {
      className: "text-success",
      largeHeading: "3x",
      heading: "Engagement Boost",
      text: "average increase",
    },
    {
      className: "text-primary",
      largeHeading: "24/7",
      heading: "Auto-Posting",
      text: "never miss a post",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F9FAFB] via-white to-[#F3F4F6] py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-accent absolute top-10 left-[-150px] h-80 w-80 animate-pulse rounded-full opacity-5 mix-blend-multiply blur-xl filter delay-2000"></div>
        <div className="bg-primary absolute bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full opacity-5 mix-blend-multiply blur-xl filter"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="border-success/20 bg-success/10 text-success mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
            <Star className="h-4 w-4 fill-current" />
            Customer Success Stories
          </div>

          <h2 className="text-text mb-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            What{" "}
            <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
              Small Business Owners
            </span>
            <br />
            Say
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#6B7280] sm:text-xl">
            Join thousands of businesses already transforming their social media
            with PostWizard
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
                  <Quote className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="mt-2 mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-accent h-4 w-4 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-text mb-6 leading-relaxed font-medium">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="from-primary to-accent flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-text font-semibold">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-[#6B7280]">
                    {testimonial.role}
                  </div>
                  <div className="text-primary text-xs font-medium">
                    {testimonial.business}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="border-primary/10 from-primary/5 to-accent/5 mb-12 rounded-3xl border bg-gradient-to-r p-8 lg:p-12">
          <div className="mb-8 text-center">
            <h3 className="text-text mb-4 text-2xl font-bold lg:text-3xl">
              Trusted by 10,000+ Businesses Worldwide
            </h3>
            <p className="text-lg text-[#6B7280]">
              See why small businesses and agencies choose PostWizard for their
              social media success
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {/* <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-primary lg:text-4xl">
                4.9/5
              </div>
              <p className="text-[#6B7280]">Average Rating</p>
              <div className="mt-2 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current text-accent"
                  />
                ))}
              </div>
            </div> */}

            {benefits.map((benefit) => (
              <div key={benefit.largeHeading} className="text-center">
                <div
                  className={`text-accent mb-2 text-3xl font-bold lg:text-4xl ${benefit.className}`}
                >
                  {benefit.largeHeading}
                </div>
                <p className="text-[#6B7280]">{benefit.heading}</p>
                <p className="mt-1 text-xs text-[#6B7280]">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Types */}
        <div className="text-center">
          <p className="mb-6 text-[#6B7280]">
            Loved by businesses across all industries:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {businesses.map((business, index) => (
              <div
                key={"business" + index}
                className="hover:border-primary/30 rounded-full border border-gray-100 bg-white px-4 py-2 text-[#6B7280] transition-colors"
              >
                {business}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
