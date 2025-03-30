
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDepartmentChange = (value: string) => {
    setFormData(prev => ({ ...prev, department: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Enquiry Submitted",
      description: "We'll get back to you as soon as possible!",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      department: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Contact Us</h2>
          <div className="w-24 h-1 bg-hospital-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Patient Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Contact Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select 
                  value={formData.department} 
                  onValueChange={handleDepartmentChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="gynecology">Gynecology & Maternity</SelectItem>
                    <SelectItem value="surgery">General Surgery</SelectItem>
                    <SelectItem value="oncology">Oncology</SelectItem>
                    <SelectItem value="nephrology">Nephrology</SelectItem>
                    <SelectItem value="gastroenterology">Gastroenterology</SelectItem>
                    <SelectItem value="emergency">Emergency Care</SelectItem>
                    <SelectItem value="ent">ENT</SelectItem>
                    <SelectItem value="ophthalmology">Ophthalmology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please describe your enquiry"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-hospital-600 hover:bg-hospital-700">
                Submit Enquiry
              </Button>
              
              <div className="mt-4 flex items-center justify-center space-x-2">
                <span className="text-gray-600">Need immediate assistance?</span>
                <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer" className="text-hospital-600 hover:text-hospital-700 font-medium">
                  Contact via WhatsApp
                </a>
              </div>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Find Us</h3>
            <div className="bg-gray-100 rounded-lg overflow-hidden h-[300px] mb-6">
              {/* Map placeholder - replace with actual Google Maps embed */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
                Google Maps will be embedded here
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Address</h4>
                <p className="text-gray-600">123 Hospital Road, Near City Center, Nashik, Maharashtra - 422001</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600">+91 1234 567890 / +91 9876 543210</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">info@sparshhospital.com</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900">Working Hours</h4>
                <p className="text-gray-600">Emergency Services: 24/7</p>
                <p className="text-gray-600">OPD: 9:00 AM - 8:00 PM (Mon-Sat)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
