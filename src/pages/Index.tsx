
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, ArrowRight, Zap, FileText, Brain, Download, BarChart3, CreditCard, RefreshCw, Upload, Send, Save, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Generated Applications",
      description: "Paste a job description and let AI generate your email and cover letter instantly"
    },
    {
      icon: <Save className="h-6 w-6" />,
      title: "Saved Profiles",
      description: "Choose from saved profiles or create a new one tailored to the role"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Tech Stack Matching",
      description: "Automatically detect and match relevant technologies from job posts"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "PDF Export",
      description: "Export cover letters and emails as polished, professional PDFs"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Application Dashboard",
      description: "Built-in dashboard to track all your applications in one place"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Credit-Based Pricing",
      description: "Pay as you go with credits — no monthly subscriptions required"
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Multiple Formats",
      description: "Re-generate content with different tones, styles, or formats"
    },
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Resume Management",
      description: "Upload and manage multiple resumes per profile for different roles"
    },
    {
      icon: <Send className="h-6 w-6" />,
      title: "Direct Email Sending",
      description: "Send application emails directly to HR from within the app"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Content Library",
      description: "Save all generated content for future use or re-applications"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      credits: 25,
      price: 9,
      popular: false,
      features: ["25 AI generations", "Basic templates", "PDF export", "Email support"]
    },
    {
      name: "Professional",
      credits: 100,
      price: 29,
      popular: true,
      features: ["100 AI generations", "Premium templates", "Advanced customization", "Priority support", "Application tracking"]
    },
    {
      name: "Expert",
      credits: 250,
      price: 59,
      popular: false,
      features: ["250 AI generations", "All templates", "Custom branding", "Direct email sending", "Analytics dashboard"]
    },
    {
      name: "Enterprise",
      credits: 500,
      price: 99,
      popular: false,
      features: ["500 AI generations", "Team collaboration", "API access", "Custom integrations", "Dedicated support"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Full Stack Developer",
      company: "@ Vercel",
      quote: "DevAssist cut my application time from 2 hours to 10 minutes. The AI actually understands developer roles!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "Backend Engineer",
      company: "@ Stripe",
      quote: "Finally, cover letters that don't sound like generic templates. The tech stack matching is incredibly accurate.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Alex Kim",
      role: "DevOps Engineer",
      company: "@ Linear",
      quote: "The application tracking dashboard is a game-changer. I can see all my progress at a glance.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const faqs = [
    {
      question: "How does the AI generate personalized applications?",
      answer: "Our AI analyzes the job description, matches it with your profile and skills, then generates tailored cover letters and emails that highlight your relevant experience and tech stack knowledge."
    },
    {
      question: "What happens when I run out of credits?",
      answer: "Simply purchase more credits when you need them. There are no monthly fees or subscriptions - you only pay for what you use."
    },
    {
      question: "Can I edit the generated content?",
      answer: "Absolutely! All generated content is fully editable. You can make tweaks, regenerate with different tones, or use our templates as starting points."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use enterprise-grade security. Your resumes, profiles, and generated content are encrypted and stored securely. We never share your data with third parties."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 100% satisfaction guarantee. If you're not happy with your first purchase, we'll refund your credits within 30 days."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center">
            <Badge className="mb-6 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
              🚀 Now with 5 Free Credits
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Apply Smarter.{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Code More.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              The AI-powered job assistant built specifically for developers. Generate tailored cover letters and emails, 
              track applications, and land your dream job faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4 rounded-full">
                Start With 5 Free Credits <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-full">
                View Demo
              </Button>
            </div>
          </div>
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent h-32 bottom-0 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop" 
              alt="Developer workspace"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to land your next role
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From AI generation to application tracking, DevAssist has all the tools developers need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From job post to application in under 5 minutes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Paste Job Description", description: "Copy and paste any job posting URL or description" },
              { step: "2", title: "Choose Profile", description: "Select or create a profile that matches the role" },
              { step: "3", title: "AI Generation", description: "Let AI craft your personalized cover letter and email" },
              { step: "4", title: "Apply & Track", description: "Export as PDF or send directly, then track your progress" }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, credit-based pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No subscriptions. No hidden fees. Pay only for what you use.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-indigo-500 shadow-xl scale-105' : 'border-gray-200'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-indigo-600 my-4">
                    ${plan.price}
                  </div>
                  <CardDescription>
                    {plan.credits} credits included
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by developers everywhere
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what developers are saying about DevAssist
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role} {testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about DevAssist
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to land your dream job?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already using DevAssist to apply smarter and get hired faster.
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full">
            Generate My First Application <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold">DevAssist</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The AI-powered job assistant built specifically for developers. Apply smarter, not harder.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 DevAssist. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Made with ❤️ for developers</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
