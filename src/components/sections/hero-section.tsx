
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { WaitlistForm } from "@/components/waitlist-form"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,hsl(var(--background)),rgba(255,255,255,0.1))]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center">
          <Badge className="mb-6 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-900/70">
            🚀 Coming Soon - Join the Waitlist
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Apply Smarter.{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Code More.
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI job assistant built for developers. Generate tailored job emails and cover letters, 
            manage multiple profiles, and track applications — all in one place. Built for speed and precision.
          </p>
          <div className="flex flex-col items-center gap-6">
            <WaitlistForm size="lg" className="max-w-md w-full" />
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-full">
              Get 5 Free Credits on Launch
            </Button>
          </div>
        </div>
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-transparent to-transparent h-32 bottom-0 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop" 
            alt="Developer workspace"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
