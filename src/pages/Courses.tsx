import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, CheckCircle, ArrowRight, Calendar, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Courses = () => {
  const courses = [
    {
      id: 'data-engineering',
      title: "Data Engineering",
      description: "Master data pipelines, ETL processes, and big data technologies",
      longDescription: "Learn Python, SQL, Apache Spark, AWS/Azure data services, ETL pipelines, and real-time data processing. Build scalable data infrastructure for modern enterprises.",
      duration: "16 Weeks",
      rating: 4.9,
      students: 450,
      level: "Intermediate to Advanced",
      features: [
        "Python & SQL Mastery",
        "Apache Spark & Big Data",
        "AWS/Azure Data Services",
        "ETL Pipeline Development",
        "Real-time Data Processing",
        "Data Warehousing",
        "Industry Projects",
        "Career Support"
      ],
      syllabus: [
        "Introduction to Data Engineering",
        "Data Engineering Ecosystem",
        "Build Effective Data Pipelines and Architecture",
        "Scala + Spark and Spark SQL",
        "Hadoop and its Ecosystem",
        "NoSQL Databases",
        "Apache Kafka",
        "Cloud Data Platforms"
      ]
    },
    {
      id: 'devops',
      title: "DevOps Masterclass",
      description: "Master the complete DevOps lifecycle with hands-on experience",
      longDescription: "Learn Jenkins, Docker, AWS, Kubernetes, CI/CD pipelines, Infrastructure as Code, monitoring, and deployment strategies. Get industry-ready with real-world projects.",
      duration: "12 Weeks",
      rating: 4.8,
      students: 500,
      level: "Intermediate to Advanced",
      features: [
        "Complete CI/CD Pipeline Setup",
        "AWS Cloud Services",
        "Docker & Kubernetes",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Live Industry Projects",
        "AWS Certification Prep",
        "Job Placement Support"
      ],
      syllabus: [
        "Introduction to DevOps Culture",
        "Version Control with Git",
        "CI/CD with Jenkins",
        "Containerization with Docker",
        "Orchestration with Kubernetes",
        "AWS Cloud Services",
        "Infrastructure as Code (Terraform)",
        "Monitoring and Logging"
      ]
    },
    {
      id: 'ml-ai',
      title: "Machine Learning & AI",
      description: "Build intelligent systems with cutting-edge ML and AI technologies",
      longDescription: "Master Python, machine learning algorithms, deep learning, TensorFlow, MLOps, and generative AI. Create intelligent applications that solve real-world problems.",
      duration: "18 Weeks",
      rating: 4.9,
      students: 380,
      level: "Intermediate to Advanced",
      features: [
        "Python for ML/AI",
        "Machine Learning Algorithms",
        "Deep Learning & Neural Networks",
        "TensorFlow & PyTorch",
        "MLOps & Model Deployment",
        "Generative AI & LLMs",
        "Computer Vision & NLP",
        "Industry Mentorship"
      ],
      syllabus: [
        "Python Programming for AI/ML",
        "Statistics and Mathematics for ML",
        "Machine Learning Fundamentals",
        "Supervised & Unsupervised Learning",
        "Deep Learning & Neural Networks",
        "Natural Language Processing",
        "Computer Vision",
        "MLOps and Model Deployment"
      ]
    },
    {
      id: 'java',
      title: "Java Full Stack Development",
      description: "Complete full-stack development with Java ecosystem",
      longDescription: "Learn Core Java, Spring Boot, Microservices, REST APIs, React/Angular, and database management. Build complete web applications from scratch.",
      duration: "16 Weeks",
      rating: 4.7,
      students: 600,
      level: "Beginner to Advanced",
      features: [
        "Core Java & Advanced Concepts",
        "Spring Boot & Spring Framework",
        "Microservices Architecture",
        "REST API Development",
        "Frontend with React/Angular",
        "Database Design & MySQL",
        "Real-world Projects",
        "Job Guarantee Program"
      ],
      syllabus: [
        "Core Java Programming",
        "Object-Oriented Programming",
        "Collections & Exception Handling",
        "Spring Framework & Spring Boot",
        "REST API Development",
        "Database Design & MySQL",
        "Frontend Technologies",
        "Microservices & Deployment"
      ]
    },
    {
      id: 'testing',
      title: "Automation Testing",
      description: "Become an expert in test automation with modern frameworks",
      longDescription: "Master Selenium WebDriver, API Testing, Mobile Testing, Test Frameworks, and CI/CD integration. Build robust automation suites for web and mobile applications.",
      duration: "10 Weeks",
      rating: 4.9,
      students: 350,
      level: "Beginner to Advanced",
      features: [
        "Selenium WebDriver",
        "API Testing with REST Assured",
        "Mobile Test Automation",
        "Test Framework Design",
        "CI/CD Integration",
        "Performance Testing",
        "Hands-on Projects",
        "Interview Preparation"
      ],
      syllabus: [
        "Manual Testing Fundamentals",
        "Java for Automation",
        "Selenium WebDriver",
        "TestNG & JUnit Frameworks",
        "API Testing with Postman & REST Assured",
        "Mobile Automation with Appium",
        "CI/CD Integration",
        "Performance Testing Basics"
      ]
    },
    {
      id: 'dotnet',
      title: ".NET Development",
      description: "Master Microsoft .NET ecosystem for enterprise development",
      longDescription: "Learn C#, ASP.NET Core, MVC, Web APIs, Entity Framework, and Azure deployment. Build scalable enterprise applications with Microsoft technologies.",
      duration: "14 Weeks",
      rating: 4.8,
      students: 280,
      level: "Intermediate",
      features: [
        "C# Programming Language",
        "ASP.NET Core Development",
        "MVC Architecture",
        "Web API Development",
        "Entity Framework",
        "Azure Cloud Integration",
        "Microsoft Certification Prep",
        "Career Support"
      ],
      syllabus: [
        "C# Programming Fundamentals",
        "Object-Oriented Programming in C#",
        "ASP.NET Core Framework",
        "MVC Pattern Implementation",
        "Web API Development",
        "Entity Framework & Database",
        "Azure Cloud Services",
        "Testing & Deployment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-yellow-300">Career Path</span>
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Industry-relevant courses designed by experts. Get job-ready with hands-on projects and placement support.
          </p>
          <Link to="/demo">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8">
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <CardTitle className="text-2xl text-blue-900 mb-2">{course.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-base">
                        {course.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {course.duration}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm font-medium">{course.rating}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students}+ students
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {course.level}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-600">{course.longDescription}</p>
                  
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {course.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons - No Pricing */}
                  <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                    <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Link to="/demo" className="w-full">
                      <Button variant="outline" size="default" className="w-full">
                        <Calendar className="mr-2 h-4 w-4" />
                        Free Demo
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Courses Stand Out</h2>
            <p className="text-gray-600 text-lg">Get more than just training - get a complete career transformation</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Industry Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Get certified from top platforms like AWS, Microsoft, and more</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>100% Placement Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Mock interviews, resume building, and direct company referrals</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Flexible Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Weekend and weekday batches with online and offline options</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Join thousands of professionals who've transformed their careers</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Demo
              </Button>
            </Link>
            <a href="https://wa.me/917499476837" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Talk to Counsellor
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;

