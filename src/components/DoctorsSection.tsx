
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DoctorProps {
  name: string;
  specialty: string;
  qualifications: string;
  image: string;
}

const Doctor = ({ name, specialty, qualifications, image }: DoctorProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-full md:w-[350px] mx-4 transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
    <div className="h-[300px] overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-hospital-600 font-medium mb-2">{specialty}</p>
      <p className="text-gray-600 mb-4">{qualifications}</p>
      <Button className="w-full bg-hospital-600 hover:bg-hospital-700">Book Appointment</Button>
    </div>
  </div>
);

const DoctorsSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const doctors = [
    {
      name: "Dr. Aditya Sharma",
      specialty: "Cardiologist",
      qualifications: "MD, DM Cardiology",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Dr. Priya Desai",
      specialty: "Neurologist",
      qualifications: "MD, DM Neurology",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Dr. Raj Patel",
      specialty: "Orthopedic Surgeon",
      qualifications: "MS Orthopedics",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Dr. Anjali Gupta",
      specialty: "Pediatrician",
      qualifications: "MD Pediatrics",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Dr. Vikram Singh",
      specialty: "Gastroenterologist",
      qualifications: "MD, DM Gastroenterology",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -370, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 370, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      setScrollPosition(sliderRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const showLeftButton = scrollPosition > 0;
  const showRightButton = sliderRef.current ? 
    scrollPosition < sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 10 : 
    true;

  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Meet Our Doctors</h2>
          <div className="w-24 h-1 bg-hospital-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Our team of dedicated specialists brings years of experience and expertise to provide you with the best care possible.
          </p>
        </div>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x scroll-smooth no-scrollbar py-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {doctors.map((doctor, index) => (
              <div key={index} className="snap-center">
                <Doctor
                  name={doctor.name}
                  specialty={doctor.specialty}
                  qualifications={doctor.qualifications}
                  image={doctor.image}
                />
              </div>
            ))}
          </div>

          <button
            onClick={scrollLeft}
            className={cn(
              "absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md transition-all duration-300 hover:bg-hospital-600 hover:text-white",
              !showLeftButton && "opacity-0 pointer-events-none"
            )}
            aria-label="Scroll left"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          <button
            onClick={scrollRight}
            className={cn(
              "absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md transition-all duration-300 hover:bg-hospital-600 hover:text-white",
              !showRightButton && "opacity-0 pointer-events-none"
            )}
            aria-label="Scroll right"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
