
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="parallax-container h-screen" id="home">
      <div 
        className="parallax-bg bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="parallax-content container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow">
            Compassionate Care, Advanced Healing
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 text-shadow">
            Trusted Multispecialty Hospital in Nashik, Dedicated to Your Health & Well-being.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-hospital-600 hover:bg-hospital-700 text-white font-semibold px-8 py-6 text-lg">
              Book an Appointment
            </Button>
            <Button variant="outline" size="lg" className="bg-emergency-500 hover:bg-emergency-600 border-0 text-white font-semibold px-8 py-6 text-lg">
              <PhoneCall className="mr-2 h-5 w-5" /> Emergency: Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
