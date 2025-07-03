import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import React from "react";

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "Free Developer",
      creditsPerDay: 10,
      price: 0,
      popular: false,
      features: [
        "10 AI-assisted applications per day",
        "Basic templates only",
        "Export to PDF",
        "Email support",
      ],
    },
    {
      name: "Pro Developer",
      creditsPerDay: 25,
      price: 10,
      popular: true,
      features: [
        "25 AI-assisted applications per day",
        "Premium templates & tones",
        "Application tracking dashboard",
        "Priority email support",
      ],
    },
    {
      name: "Elite Developer",
      creditsPerDay: 50,
      price: 20,
      popular: false,
      features: [
        "50 AI-assisted applications per day",
        "Full template + tone library",
        "Direct email to HR",
        "Advanced credit analytics",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, credit-based pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            No subscriptions. No hidden fees. Pay only for what you use.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "border-indigo-500 shadow-xl scale-105"
                  : "border-gray-200 dark:border-gray-700"
              } dark:bg-gray-800`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl dark:text-white">
                  {plan.name}
                </CardTitle>
                <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 my-4">
                  ${plan.price}
                </div>
                <CardDescription className="dark:text-gray-300">
                  {plan.creditsPerDay} credits included
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-indigo-600 hover:bg-indigo-700"
                      : "bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                  }`}
                >
                  Join Waitlist
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
