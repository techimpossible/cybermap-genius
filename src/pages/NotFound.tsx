
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ShieldAlert, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-6">
            <ShieldAlert className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-cyber-navy">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for couldn't be found. It might have been moved or deleted.
          </p>
          <Button 
            asChild
            size="lg"
            className="group"
          >
            <a href="/">
              <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Return to Dashboard
            </a>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
