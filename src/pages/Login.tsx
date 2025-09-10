import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    mobile: "",
    aadhar: "",
    password: "",
    name: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (isLogin: boolean = false) => {
    const newErrors: Record<string, string> = {};

    // Mobile validation
    if (!formData.mobile.match(/^[0-9]{10}$/)) {
      newErrors.mobile = "Invalid 10-digit mobile number";
    }

    // Aadhar validation
    if (!formData.aadhar.match(/^[0-9]{12}$/)) {
      newErrors.aadhar = "Invalid 12-digit Aadhar";
    }

    // Password validation
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = isLogin ? "Password is required" : "Must be ≥ 6 characters";
    }

    if (!isLogin) {
      // Name validation for registration
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
      }

      // Confirm password validation
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm(true)) {
      // Simulate login success
      navigate("/soil-setup");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm(false)) {
      // Simulate registration success
      navigate("/soil-setup");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-earth-light/20 to-sky-light/20"></div>
      
      <Card className="w-full max-w-md relative z-10 bg-background/95 backdrop-blur-sm border-earth-medium/20">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/f2ee9f02-6fb1-4990-82cb-a4be934e38fb.png" 
              alt="AGRONOVA Logo" 
              className="w-16 h-16 rounded-full border-2 border-earth-medium"
            />
          </div>
          <CardTitle className="text-2xl font-bold text-earth-dark">
            Welcome to AGRONOVA
          </CardTitle>
          <p className="text-earth-medium text-sm">
            Gamified Sustainable Farming Platform
          </p>
        </CardHeader>

        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="Enter 10-digit mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className={errors.mobile ? "border-destructive" : ""}
                  />
                  {errors.mobile && (
                    <p className="text-destructive text-xs">{errors.mobile}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="aadhar">Aadhar Card Number</Label>
                  <Input
                    id="aadhar"
                    name="aadhar"
                    type="text"
                    placeholder="12-digit Aadhar"
                    value={formData.aadhar}
                    onChange={handleInputChange}
                    className={errors.aadhar ? "border-destructive" : ""}
                  />
                  {errors.aadhar && (
                    <p className="text-destructive text-xs">{errors.aadhar}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={errors.password ? "border-destructive" : ""}
                  />
                  {errors.password && (
                    <p className="text-destructive text-xs">{errors.password}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" variant="success">
                  Login
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register" className="space-y-4">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile-reg">Mobile Number</Label>
                  <Input
                    id="mobile-reg"
                    name="mobile"
                    type="tel"
                    placeholder="Enter 10-digit mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className={errors.mobile ? "border-destructive" : ""}
                  />
                  {errors.mobile && (
                    <p className="text-destructive text-xs">{errors.mobile}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="aadhar-reg">Aadhar Card Number</Label>
                  <Input
                    id="aadhar-reg"
                    name="aadhar"
                    type="text"
                    placeholder="12-digit Aadhar"
                    value={formData.aadhar}
                    onChange={handleInputChange}
                    className={errors.aadhar ? "border-destructive" : ""}
                  />
                  {errors.aadhar && (
                    <p className="text-destructive text-xs">{errors.aadhar}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password-reg">Password</Label>
                  <Input
                    id="password-reg"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={errors.password ? "border-destructive" : ""}
                  />
                  {errors.password && (
                    <p className="text-destructive text-xs">{errors.password}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={errors.confirmPassword ? "border-destructive" : ""}
                  />
                  {errors.confirmPassword && (
                    <p className="text-destructive text-xs">{errors.confirmPassword}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" variant="success">
                  Register & Continue
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;