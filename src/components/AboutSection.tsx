
import { cn } from "@/lib/utils";
import { Heart, Clock, Hospital, Brain } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="flex flex-col items-center md:items-start text-center md:text-left p-6 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-xl">
    <div className="mb-4 text-hospital-600">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AboutSection = () => {
  const features = [
    {
      icon: <Clock className="h-10 w-10" />,
      title: "24/7 Emergency Services",
      description: "Round-the-clock emergency care with rapid response teams."
    },
    {
      icon: <Brain className="h-10 w-10" />,
      title: "Expert & Experienced Doctors",
      description: "Highly qualified specialists with years of proven expertise."
    },
    {
      icon: <Hospital className="h-10 w-10" />,
      title: "Modern Facilities & Technology",
      description: "State-of-the-art equipment and advanced diagnostic tools."
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Patient-Centered Approach",
      description: "Compassionate care focused on your comfort and recovery."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About Sparsh Hospital</h2>
          <div className="w-24 h-1 bg-hospital-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            For over 15 years, Sparsh Hospital has been at the forefront of healthcare excellence in Nashik. 
            Our state-of-the-art facilities, combined with compassionate care from our experienced medical professionals, 
            have made us the trusted choice for families seeking quality healthcare services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
