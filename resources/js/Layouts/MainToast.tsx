import { useEffect } from "react";
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

interface MainToastProps {
  title: string;
  description: string;
  bg: string;
}

const MainToast: React.FC<MainToastProps> = ({ title, description, bg }) => {
  const { toast } = useToast();
  useEffect(() => {
    toast({
      title,
      description,
      className: `bg-${bg}-500 text-white`,
    });
  }, [toast, title, description, bg]); // Include toast in the dependencies

  return <Toaster />;
};

export default MainToast;
