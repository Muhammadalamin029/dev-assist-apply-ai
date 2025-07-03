import React from "react";
import { Card, CardContent } from "../ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Real testimonials coming soon",
      role: "",
      company: "",
      quote:
        "We’re launching DevAssist publicly very soon. Once real developers use it, their honest feedback will appear here. Stay tuned!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=launch",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Real developer feedback — coming soon
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            DevAssist is almost live! Once real developers try it, we’ll add
            their honest feedback here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg dark:bg-gray-700">
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold dark:text-white">
                      {testimonial.name}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-12">
          Want to be featured? Join the{" "}
          <a href="#waitlist" className="underline">
            waitlist
          </a>{" "}
          and be among the first to try it.
        </p>
      </div>
    </section>
  );
}
