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
      title: "Data Engineering",
      description: "Python, SQL, Apache Spark, AWS/Azure Data Services, ETL Pipelines",
      duration: "16 Weeks",
      rating: 4.9,
      students: 450,
      features: ["Real-time Data Processing", "Cloud Data Platforms", "Industry Projects"]
    },
    {
      title: "DevOps Masterclass",
      description: "Jenkins, Docker, AWS, Kubernetes, CI/CD, Infrastructure as Code",
      duration: "12 Weeks",
      rating: 4.8,
      students: 500,
      features: ["Live Projects", "AWS Certification", "Placement Support"]
    },
    {
      title: "Machine Learning & AI",
      description: "Python, ML Algorithms, Deep Learning, TensorFlow, MLOps, Generative AI",
      duration: "18 Weeks",
      rating: 4.9,
      students: 380,
      features: ["Hands-on ML Projects", "AI/ML Certification", "Industry Mentorship"]
    },
    {
      title: "Java Full Stack Development",
      description: "Core Java, Spring Boot, Microservices, REST APIs, React/Angular",
      duration: "16 Weeks",
      rating: 4.7,
      students: 600,
      features: ["Full Stack Projects", "Industry Mentorship", "Job Guarantee"]
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
      name: "Priya Sharma",
      role: "Data Engineer at Flipkart",
      location: "Bangalore",
      image: "/placeholder.svg",
      quote: "The Data Engineering course transformed my career. From a software developer to a Data Engineer at Flipkart!",
      rating: 5
    },
    {
      name: "Rohit Kumar",
      role: "DevOps Engineer at Capgemini",
      location: "Pune",
      image: "/placeholder.svg",
      quote: "LinuxForge's DevOps training helped me land my dream job. The hands-on projects were incredible!",
      rating: 5
    },
    {
      name: "Sonal Patil",
      role: "ML Engineer at TCS",
      location: "Mumbai",
      image: "/placeholder.svg",
      quote: "The ML/AI course content is cutting-edge. Now I'm working on exciting AI projects at TCS.",
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
            Master <strong>Data Engineering</strong>, <strong>DevOps</strong>, <strong>ML/AI</strong> and <strong>Java</strong> at <span className="text-yellow-400">LinuxForge</span> – India's most trusted IT training institute.
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

      {/* Popular Courses Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your <span className="text-blue-600">Career Path</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-relevant courses designed by experts. Get job-ready with hands-on projects and placement support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {courses.map((course, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {course.duration}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students}+ students</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link to="/demo" className="flex-1">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Book Free Demo
                      </Button>
                    </Link>
                    <Link to="/courses">
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/courses">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why <span className="text-blue-600">LinuxForge</span>?
            </h2>
            <p className="text-xl text-gray-600">
              Get more than just training - get a complete career transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success <span className="text-blue-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600">
              Real transformations from our students
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Read More Stories <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of professionals who've already made the switch
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Demo
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Call +91 98765 43210
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

