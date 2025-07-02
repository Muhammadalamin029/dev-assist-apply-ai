
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Save, Zap, Download, BarChart3, CreditCard } from "lucide-react"

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI-Generated Applications",
    description: "Paste any job description and let AI generate a custom email + cover letter tailored to your profile"
  },
  {
    icon: <Save className="h-6 w-6" />,
    title: "Multiple Profiles",
    description: "Save multiple profiles tailored to different job types and automatically match skills to requirements"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Tech Stack Detection",
    description: "Auto-detect relevant technologies and frameworks based on the job post requirements"
  },
  {
    icon: <Download className="h-6 w-6" />,
    title: "PDF Export",
    description: "Export applications as polished, professional PDFs ready to send to employers"
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Application Tracking",
    description: "Track every job application in one clean, organized dashboard with status updates"
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Pay-as-you-go",
    description: "No subscription needed — just pay for what you use with simple credit-based pricing"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need to land your next role
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From AI generation to application tracking, DevAssist has all the tools developers need.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 transition-colors">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl dark:text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
