import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { isDemoMode } from "@/services/auth";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}

export const AuthLayout = ({ title, subtitle, children, footer }: AuthLayoutProps) => (
  <div className="min-h-screen flex items-center justify-center p-4 relative">
    <div className="absolute inset-0 bg-gradient-to-br from-earth-light/20 to-sky-light/20" />

    <div className="w-full max-w-md relative z-10 space-y-4">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-earth-dark hover:underline focus-visible:outline focus-visible:outline-2 rounded"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        Back to home
      </Link>

      <Card className="bg-background/95 backdrop-blur-sm border-earth-medium/20">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <img
              src="/images/agronova-logo.png"
              alt="Agronova logo"
              className="w-16 h-16 rounded-full border-2 border-earth-medium"
            />
          </div>
          <CardTitle className="text-2xl font-bold text-earth-dark">{title}</CardTitle>
          <p className="text-earth-medium text-sm">{subtitle}</p>
        </CardHeader>

        <CardContent className="space-y-4">
          {isDemoMode && (
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                <strong>Demo mode:</strong> this prototype has no account backend yet. Your details
                are checked in the browser only; nothing is saved or sent anywhere.
              </AlertDescription>
            </Alert>
          )}
          {children}
          <p className="text-center text-sm text-muted-foreground pt-2">{footer}</p>
        </CardContent>
      </Card>
    </div>
  </div>
);
