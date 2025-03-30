
import { cn } from "@/lib/utils";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmergencyButton = () => {
  return (
    <div className="float-button animate-float">
      <a href="tel:+911234567890">
        <Button className="bg-emergency-500 hover:bg-emergency-600 flex items-center space-x-2 font-semibold text-white rounded-full px-6 py-6 shadow-lg">
          <div className="flex items-center justify-center rounded-full bg-white p-1.5 pulse">
            <PhoneCall className="h-6 w-6 text-emergency-500" />
          </div>
          <span className="whitespace-nowrap">Need an Ambulance? Call Now</span>
        </Button>
      </a>
    </div>
  );
};

export default EmergencyButton;
