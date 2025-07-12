import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Calendar, BookOpen, Award, MessageCircle, Phone, Star, ArrowRight, Play } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const courses = [
    {
      title: "DevOps Masterclass",
      description: "Learn Jenkins, Docker, AWS, Kubernetes, CI/CD",
      duration: "12 Weeks",
      price: "₹45,000",
      rating: 4.8,
      students: 500,
      features: ["Live Projects", "AWS Certification", "Placement Support"]
    },
    {
      title: "Automation Testing",
      description: "Selenium, API Testing, Postman, Frameworks",
      duration: "10 Weeks",
      price: "₹35,000",
      rating: 4.9,
      students: 350,
      features: ["Hands-on Testing", "Framework Design", "Interview Prep"]
    },
    {
      title: "Java Full Stack",
      description: "Spring Boot, REST APIs, Angular/React, MySQL",
      duration: "16 Weeks",
      price: "₹55,000",
      rating: 4.7,
      students: 600,
      features: ["Full Stack Projects", "Industry Mentorship", "Job Guarantee"]
    },
    {
      title: ".NET Development",
      description: "C#, ASP.NET Core, MVC, Entity Framework",
      duration: "14 Weeks",
      price: "₹50,000",
      rating: 4.8,
      students: 280,
      features: ["Microsoft Certified", "Real Projects", "Career Support"]
    }
  ];

  const features = [
    { icon: CheckCircle, title: "100% Placement Support", desc: "Mock interviews and job referrals" },
    { icon: Calendar, title: "Flexible Batches", desc: "Weekend & weekday options available" },
    { icon: BookOpen, title: "Real-World Projects", desc: "Build portfolio with live projects" },
    { icon: Users, title: "1:1 Mentorship", desc: "Personal guidance from experts" },
    { icon: Award, title: "Industry Certification", desc: "Get certified from top platforms" },
    { icon: MessageCircle, title: "Resume Building", desc: "LinkedIn & resume optimization" }
  ];

  const testimonials = [
    {
      name: "Rohit Sharma",
      role: "DevOps Engineer at Capgemini",
      location: "Pune",
      image: "/placeholder.svg",
      quote: "I was earning ₹3.5 LPA, now I work at Capgemini with ₹8.2 LPA after the DevOps course. Totally worth it!",
      rating: 5
    },
    {
      name: "Sonal Patil",
      role: "Java Developer",
      location: "Nagpur",
      image: "/placeholder.svg",
      quote: "Cracked 4 interviews back-to-back. Their Java course + mock sessions were game changers.",
      rating: 5
    },
    {
      name: "Amit Kumar",
      role: "Test Automation Engineer",
      location: "Mumbai",
      image: "/placeholder.svg",
      quote: "The automation testing course helped me transition from manual to automation. Great mentors!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            🎯 Trusted by 2000+ Professionals
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Get <span className="text-yellow-300">Job-Ready</span> with Real IT Skills
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Master <strong>DevOps</strong>, <strong>Java</strong>, and <strong>Automation Testing</strong> at <span className="text-yellow-400">LinuxForge</span> – India’s most trusted IT training institute.
          </h2>    
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/demo">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Demo
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 text-lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              Talk to Counsellor
            </Button>
          </div>
        </div>
      </section>

      {/* Remaining sections unchanged */}

      <Footer />
    </div>
  );
};

export default Index;
