
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
            Get Job-Ready in <span className="text-yellow-300">12 Weeks</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Master DevOps, Testing, Java & More! India's most trusted IT training platform for professionals and job seekers.
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

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 text-lg">Join thousands of professionals who've transformed their careers</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📚 Courses We Offer</h2>
            <p className="text-gray-600 text-lg">Industry-relevant courses designed by experts</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-blue-900">{course.title}</CardTitle>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {course.duration}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm font-medium">{course.rating}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students}+ students
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                    <Link to="/courses">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">⭐ Success Stories</h2>
            <p className="text-gray-600 text-lg">Hear from our successful graduates</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-gray-400" />
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>
                    {testimonial.role} • {testimonial.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/testimonials">
              <Button variant="outline" size="lg">
                <Play className="mr-2 h-4 w-4" />
                Watch More Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Booking Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">📅 Book Your Free Demo Class</h2>
          <p className="text-xl mb-8 text-blue-100">Live sessions with expert instructors. No credit card required.</p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Choose your course
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Pick a time
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Get expert guidance
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🤔 Still Have Questions?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Do you offer EMI options?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Yes, easy monthly installments are available for all courses.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Is placement guaranteed?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We offer 100% placement assistance with referrals, mock interviews, and resume prep.</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All FAQs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Level Up Your Career? 🚀</h2>
          <p className="text-xl mb-8 text-green-100">Enroll now and get trained by industry experts.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8">
              <Award className="mr-2 h-5 w-5" />
              Enroll Now
            </Button>
            <Link to="/demo">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <Calendar className="mr-2 h-5 w-5" />
                Book Demo
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
