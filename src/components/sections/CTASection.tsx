import React from "react";
import { WaitlistForm } from "../waitlist-form";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to land your dream job?
        </h2>
        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Join thousands of developers who are getting early access to DevAssist
          and 5 free credits at launch.
        </p>
        <WaitlistForm className="max-w-md mx-auto" />
      </div>
    </section>
  );
}
