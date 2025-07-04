
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Brain, Menu } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { useNavigate } from "react-router-dom"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">DevAssist</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              FAQ
            </a>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="#features" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Features
                  </a>
                  <a href="#pricing" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Pricing
                  </a>
                  <a href="#faq" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    FAQ
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
