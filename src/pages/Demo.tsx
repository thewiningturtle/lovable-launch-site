import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, CheckCircle, Clock, Users, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Demo = () => {
  const { toast } = useToast();
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current!,
      'YOUR_PUBLIC_KEY'
    ).then(
      () => {
        toast({
          title: "Demo Scheduled Successfully!",
          description: "We'll contact you within 24 hours to confirm your demo session.",
        });
        (form.current as HTMLFormElement).reset();
      },
      (error) => {
        console.error(error);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
        });
      }
    );
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

      {/* Form Section */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Schedule Your Demo</CardTitle>
            <CardDescription>Fill in your details and we'll contact you to confirm</CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Full Name *</Label>
                  <Input name="name" required placeholder="Enter your full name" />
                </div>
                <div>
                  <Label>Phone Number *</Label>
                  <Input name="phone" required placeholder="+91 98765 43210" />
                </div>
              </div>
              <div>
                <Label>Email Address *</Label>
                <Input name="email" type="email" required placeholder="your.email@example.com" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Interested Course *</Label>
                  <Select name="course" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map(course => (
                        <SelectItem key={course} value={course}>{course}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Experience Level</Label>
                  <Input name="experience" placeholder="e.g. 3 years" />
                </div>
              </div>
              <div>
                <Label>Preferred Time Slot</Label>
                <Select name="preferredTime">
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map(slot => (
                      <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Additional Message (Optional)</Label>
                <Textarea name="message" placeholder="Any specific questions or requirements..." />
              </div>
              <Button type="submit" className="w-full">
                <Calendar className="mr-2 h-5 w-5" /> Schedule My Demo
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;
