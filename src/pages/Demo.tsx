import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, CheckCircle, Phone, MessageCircle, Clock, Users, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Demo = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    experience: '',
    preferredTime: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Demo Scheduled Successfully!",
      description: "We'll contact you within 24 hours to confirm your demo session.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      experience: '',
      preferredTime: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const courses = ["DevOps Masterclass", "Automation Testing", "Java Full Stack", ".NET Development"];
  const timeSlots = ["10:00 AM - 11:00 AM", "2:00 PM - 3:00 PM", "4:00 PM - 5:00 PM", "6:00 PM - 7:00 PM", "8:00 PM - 9:00 PM"];
  const benefits = [
    { icon: Users, title: "Live Interaction", description: "Direct interaction with industry experts" },
    { icon: Award, title: "Course Overview", description: "Complete curriculum and career roadmap" },
    { icon: Clock, title: "Flexible Timing", description: "Choose your convenient time slot" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calendar className="h-8 w-8 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Book Your <span className="text-yellow-300">Free Demo Class</span>
            </h1>
          </div>
          <p className="text-xl mb-8 text-blue-100">
            Live sessions with expert instructors. No credit card required.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5" /> <span>Choose your course</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5" /> <span>Pick a time</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5" /> <span>Get expert guidance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Benefits */}
      {/* (rest of the component remains unchanged) */}

      <Footer />
    </div>
  );
};

export default Demo;
