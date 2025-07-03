
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Plus, FileText, BarChart3, LogOut } from 'lucide-react';
import { logOut } from '@/services/authService';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await logOut();
      toast({
        title: "Signed out",
        description: "You've been successfully signed out.",
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!currentUser) {
    navigate('/auth');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">DevAssist</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {currentUser.email}
              </span>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back!
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Ready to generate your next job application?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                Quick Start
              </CardTitle>
              <CardDescription>
                Generate a new application in minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" disabled>
                <Plus className="h-4 w-4 mr-2" />
                New Application
              </Button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Feature coming soon
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Applications
              </CardTitle>
              <CardDescription>
                View and manage your applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" disabled>
                <FileText className="h-4 w-4 mr-2" />
                View All
              </Button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Feature coming soon
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Analytics
              </CardTitle>
              <CardDescription>
                Track your application success
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" disabled>
                <BarChart3 className="h-4 w-4 mr-2" />
                View Stats
              </Button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Feature coming soon
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              DevAssist is under development. Here's what's coming next:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• AI-powered job application generation</li>
              <li>• Multiple profile management</li>
              <li>• Application tracking dashboard</li>
              <li>• PDF export functionality</li>
              <li>• Tech stack detection and matching</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
