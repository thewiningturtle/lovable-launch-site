
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Calendar, Play, ArrowRight, Quote } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rohit Sharma",
      role: "DevOps Engineer",
      company: "Capgemini",
      location: "Pune",
      course: "DevOps Masterclass",
      image: "/placeholder.svg",
      quote: "I was earning ₹3.5 LPA, now I work at Capgemini with ₹8.2 LPA after the DevOps course. The hands-on projects and mentorship were incredible. Totally worth every penny!",
      rating: 5,
      salaryBefore: "₹3.5 LPA",
      salaryAfter: "₹8.2 LPA",
      videoUrl: "#"
    },
    {
      id: 2,
      name: "Sonal Patil",
      role: "Java Full Stack Developer",
      company: "TCS",
      location: "Nagpur",
      course: "Java Full Stack",
      image: "/placeholder.svg",
      quote: "Cracked 4 interviews back-to-back. Their Java course + mock sessions were game changers. The instructors are industry experts who really care about your success.",
      rating: 5,
      salaryBefore: "₹4.0 LPA",
      salaryAfter: "₹9.5 LPA",
      videoUrl: "#"
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Test Automation Engineer",
      company: "Infosys",
      location: "Mumbai",
      course: "Automation Testing",
      image: "/placeholder.svg",
      quote: "The automation testing course helped me transition from manual to automation. Great mentors and comprehensive curriculum. I'm now leading automation projects at Infosys.",
      rating: 5,
      salaryBefore: "₹2.8 LPA",
      salaryAfter: "₹7.2 LPA",
      videoUrl: "#"
    },
    {
      id: 4,
      name: "Priya Deshmukh",
      role: ".NET Developer",
      company: "Microsoft",
      location: "Hyderabad",
      course: ".NET Development",
      image: "/placeholder.svg",
      quote: "From a fresher to working at Microsoft! The .NET course was comprehensive and the placement support was outstanding. They prepared me for every aspect of the interview process.",
      rating: 5,
      salaryBefore: "Fresher",
      salaryAfter: "₹12.0 LPA",
      videoUrl: "#"
    },
    {
      id: 5,
      name: "Rajesh Mehta",
      role: "Senior DevOps Engineer",
      company: "Amazon",
      location: "Bangalore",
      course: "DevOps Masterclass",
      image: "/placeholder.svg",
      quote: "The course content is updated with latest industry trends. AWS certification preparation was excellent. Now I'm working at Amazon Web Services team!",
      rating: 5,
      salaryBefore: "₹5.5 LPA",
      salaryAfter: "₹15.0 LPA",
      videoUrl: "#"
    },
    {
      id: 6,
      name: "Sneha Joshi",
      role: "QA Automation Lead",
      company: "Wipro",
      location: "Chennai",
      course: "Automation Testing",
      image: "/placeholder.svg",
      quote: "Best decision I made for my career. The practical approach to learning automation testing was perfect. I'm now leading a team of 8 automation engineers.",
      rating: 5,
      salaryBefore: "₹4.2 LPA",
      salaryAfter: "₹10.8 LPA",
      videoUrl: "#"
    }
  ];

  const stats = [
    { label: "Students Placed", value: "2000+", color: "text-blue-600" },
    { label: "Average Salary Hike", value: "150%", color: "text-green-600" },
    { label: "Partner Companies", value: "200+", color: "text-purple-600" },
    { label: "Course Completion Rate", value: "95%", color: "text-orange-600" }
  ];

  const companies = [
    "TCS", "Infosys", "Wipro", "Capgemini", "Accenture", "Microsoft", "Amazon", "Google", "IBM", "Cognizant"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ⭐ <span className="text-yellow-300">Success Stories</span> That Inspire
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Real transformations, real careers, real success. See how our students went from learning to earning.
          </p>
          <Link to="/demo">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8">
              <Calendar className="mr-2 h-5 w-5" />
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className={`text-4xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hear From Our Successful Graduates</h2>
            <p className="text-gray-600 text-lg">Real stories of career transformation and growth</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative">
                <CardHeader className="pb-4">
                  <div className="absolute top-4 right-4">
                    <Quote className="h-8 w-8 text-blue-200" />
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {testimonial.role} at {testimonial.company}
                      </CardDescription>
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {testimonial.course}
                    </Badge>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 italic text-sm leading-relaxed">"{testimonial.quote}"</p>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Salary Growth:</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500">{testimonial.salaryBefore}</span>
                        <ArrowRight className="h-4 w-4 text-green-600" />
                        <span className="font-bold text-green-600">{testimonial.salaryAfter}</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Video Story
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Students Work At</h2>
            <p className="text-gray-600">Top companies trust our graduates</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {companies.map((company, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="font-bold text-gray-700 text-lg">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8">Join our next batch and transform your career like thousands before you</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Demo
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <ArrowRight className="mr-2 h-5 w-5" />
                View Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
