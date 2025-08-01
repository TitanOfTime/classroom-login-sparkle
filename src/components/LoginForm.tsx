import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { GraduationCap, Shield, User, Lock } from 'lucide-react';

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    userType: '',
    username: '',
    password: ''
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.userType || !formData.username || !formData.password) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate login process
    toast({
      title: "Login Successful",
      description: `Welcome ${formData.userType}! Redirecting to dashboard...`,
    });

    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-academic-light via-background to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-3 bg-gradient-to-r from-academic-primary to-academic-secondary rounded-full">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-academic-primary">APIIT Classroom</h1>
            <h2 className="text-xl font-semibold text-academic-secondary">Booking System</h2>
            <p className="text-muted-foreground mt-2">Sign in to manage classroom reservations</p>
          </div>
        </div>

        {/* Login Form */}
        <Card className="backdrop-blur-sm bg-white/80 shadow-form border-0">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-2xl font-bold text-center text-academic-primary">Welcome Back</CardTitle>
            <CardDescription className="text-center">
              Choose your role and enter your credentials
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              {/* User Type Selection */}
              <div className="space-y-2">
                <Label htmlFor="userType" className="text-sm font-medium text-academic-primary">
                  I am a...
                </Label>
                <Select value={formData.userType} onValueChange={(value) => handleInputChange('userType', value)}>
                  <SelectTrigger className="h-12 border-2 border-border focus:border-academic-secondary transition-colors">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin" className="cursor-pointer">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-academic-secondary" />
                        Administrator
                      </div>
                    </SelectItem>
                    <SelectItem value="lecturer" className="cursor-pointer">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-academic-secondary" />
                        Lecturer
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Username */}
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium text-academic-primary">
                  Username
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    className="pl-10 h-12 border-2 border-border focus:border-academic-secondary transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-academic-primary">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="pl-10 h-12 border-2 border-border focus:border-academic-secondary transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                variant="academic"
                size="lg"
                className="w-full h-12 text-base font-semibold mt-6"
              >
                Sign In to Dashboard
              </Button>
            </form>

            {/* Additional Links */}
            <div className="text-center space-y-2 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Forgot your password?{' '}
                <button className="text-academic-secondary hover:text-academic-primary transition-colors font-medium">
                  Reset here
                </button>
              </p>
              <p className="text-xs text-muted-foreground">
                Need help? Contact IT Support at{' '}
                <span className="text-academic-secondary font-medium">support@apiit.edu</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2024 APIIT Classroom Booking System</p>
          <p>Secure • Reliable • Easy to Use</p>
        </div>
      </div>
    </div>
  );
};