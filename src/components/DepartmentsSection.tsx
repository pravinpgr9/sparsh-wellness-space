
import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Heart, 
  Brain, 
  Baby, 
  Hospital, 
  Pill, 
  Ambulance,
  Stethoscope,
  Bone,
  Activity,
  Eye, 
  Ear
} from "lucide-react";

interface DepartmentProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Department = ({ icon, title, description }: DepartmentProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="department-card bg-white rounded-lg shadow-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className={cn(
          "department-icon mb-4 text-hospital-500 transition-colors duration-300",
          isHovered && "text-hospital-600"
        )}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const DepartmentsSection = () => {
  const departments = [
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Cardiology",
      description: "Advanced heart care treatments and cardiac diagnostics"
    },
    {
      icon: <Bone className="h-10 w-10" />,
      title: "Orthopedics",
      description: "Joint replacements, sports injuries, and bone health"
    },
    {
      icon: <Brain className="h-10 w-10" />,
      title: "Neurology",
      description: "Brain & spinal treatments with advanced neurological care"
    },
    {
      icon: <Baby className="h-10 w-10" />,
      title: "Pediatrics",
      description: "Specialized healthcare for infants, children, and adolescents"
    },
    {
      icon: <Pill className="h-10 w-10" />,
      title: "Gynecology & Maternity",
      description: "Women's health services and safe delivery care"
    },
    {
      icon: <Hospital className="h-10 w-10" />,
      title: "General Surgery",
      description: "Minimally invasive procedures and surgical excellence"
    },
    {
      icon: <Activity className="h-10 w-10" />,
      title: "Oncology",
      description: "Cancer treatment & chemotherapy with personalized care"
    },
    {
      icon: <Pill className="h-10 w-10" />,
      title: "Nephrology",
      description: "Kidney care & dialysis for acute and chronic conditions"
    },
    {
      icon: <Stethoscope className="h-10 w-10" />,
      title: "Gastroenterology",
      description: "Comprehensive digestive system treatments and care"
    },
    {
      icon: <Ambulance className="h-10 w-10" />,
      title: "Emergency & Trauma Care",
      description: "24/7 Critical Care for emergencies and accidents"
    },
    {
      icon: <Ear className="h-10 w-10" />,
      title: "ENT",
      description: "Specialized ear, nose, and throat treatments"
    },
    {
      icon: <Eye className="h-10 w-10" />,
      title: "Ophthalmology",
      description: "Advanced eye treatments and vision care services"
    }
  ];

  return (
    <section id="departments" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Departments</h2>
          <div className="w-24 h-1 bg-hospital-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Sparsh Hospital offers comprehensive care across multiple specialties.
            Our departments are equipped with cutting-edge technology and staffed by expert specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {departments.map((department, index) => (
            <Department 
              key={index} 
              icon={department.icon} 
              title={department.title} 
              description={department.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
