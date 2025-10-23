import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  ArrowRight,
  Briefcase,
  Users,
  Award,
  Code2,
  Sparkles,
  Database,
  Wrench,
  MessageSquare,
  Target,
  ExternalLink,
  Github,
  Download,
  FileText,
  CheckCircle,
  Quote,
  Star,
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [portfolioFilter, setPortfolioFilter] = useState("all");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setContactForm({ name: "", email: "", message: "" });
  };

  // Data
  const stats = [
    { icon: Briefcase, label: "Projects Completed", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "35+" },
    { icon: Award, label: "Certifications", value: "12+" },
    { icon: Code2, label: "Years Experience", value: "5+" },
  ];

  const technicalSkills = [
    {
      category: "Frontend",
      icon: Code2,
      skills: [
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML5/CSS3", level: 98 },
      ],
    },
    {
      category: "Backend",
      icon: Database,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 92 },
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "REST APIs", level: 95 },
      ],
    },
    {
      category: "Tools & Others",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Figma", level: 85 },
        { name: "Agile/Scrum", level: 90 },
      ],
    },
  ];

  const softSkills = [
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Clear and effective client communication in English and Arabic",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaborative approach to problem-solving and project delivery",
    },
    {
      icon: Target,
      title: "Project Management",
      description: "Organized workflow with timely delivery and quality assurance",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform - Al-Faisal Group",
      category: "ecommerce",
      company: "Al-Faisal Trading LLC",
      description:
        "Built a comprehensive e-commerce platform with Arabic/English support, payment gateway integration, and inventory management for a leading Saudi retail company.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      impact: "Increased online sales by 180% in first 6 months",
      verified: true,
      link: "#",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    },
    {
      id: 2,
      title: "Corporate Website - Emirates Consulting",
      category: "corporate",
      company: "Emirates Business Consultants",
      description:
        "Developed a modern, multilingual corporate website with CMS integration for content management and lead generation forms.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
      impact: "40% increase in qualified leads",
      verified: true,
      link: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      id: 3,
      title: "Healthcare Portal - Riyadh Medical Center",
      category: "healthcare",
      company: "Riyadh Medical Services",
      description:
        "Created a patient management system with appointment booking, medical records, and telemedicine features compliant with local regulations.",
      technologies: ["React", "Express", "PostgreSQL", "WebRTC"],
      impact: "Streamlined operations for 10,000+ patients",
      verified: true,
      link: "#",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    },
    {
      id: 4,
      title: "Real Estate Platform - Dubai Properties",
      category: "realestate",
      company: "Dubai Property Solutions",
      description:
        "Developed a property listing platform with virtual tours, advanced search filters, and agent dashboard for Dubai real estate market.",
      technologies: ["React", "Node.js", "MongoDB", "AWS S3"],
      impact: "Listed 500+ properties, 2000+ active users",
      verified: false,
      link: "#",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    },
    {
      id: 5,
      title: "Logistics Dashboard - Gulf Freight Services",
      category: "logistics",
      company: "Gulf Shipping & Logistics",
      description:
        "Built a real-time shipment tracking and management dashboard with analytics for logistics operations across GCC.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      impact: "Reduced tracking time by 60%",
      verified: true,
      link: "#",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    },
    {
      id: 6,
      title: "Educational Platform - Arab Academy",
      category: "education",
      company: "Arab Online Academy",
      description:
        "Developed an e-learning platform with video courses, quizzes, progress tracking, and certification system.",
      technologies: ["Next.js", "Express", "PostgreSQL", "Stripe"],
      impact: "10,000+ enrolled students",
      verified: false,
      link: "#",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "ecommerce", name: "E-Commerce" },
    { id: "corporate", name: "Corporate" },
    { id: "healthcare", name: "Healthcare" },
    { id: "realestate", name: "Real Estate" },
    { id: "logistics", name: "Logistics" },
    { id: "education", name: "Education" },
  ];

  const filteredProjects =
    portfolioFilter === "all" ? projects : projects.filter((p) => p.category === portfolioFilter);

  const certificates = [
    {
      id: 1,
      title: "Project Completion Certificate - Al-Faisal Group",
      type: "project",
      issuer: "Al-Faisal Trading LLC",
      date: "March 2024",
      description: "Certificate of successful completion of e-commerce platform development project",
      verified: true,
    },
    {
      id: 2,
      title: "CompTIA Security+ Certification",
      type: "technical",
      issuer: "CompTIA",
      date: "January 2024",
      description: "Industry-recognized certification for cybersecurity fundamentals",
      verified: true,
    },
    {
      id: 3,
      title: "AWS Certified Developer - Associate",
      type: "technical",
      issuer: "Amazon Web Services",
      date: "November 2023",
      description: "Cloud development and deployment expertise on AWS platform",
      verified: true,
    },
    {
      id: 4,
      title: "Employment Certificate - Emirates Consulting",
      type: "employment",
      issuer: "Emirates Business Consultants",
      date: "September 2023",
      description: "Full-time employment as Senior Fullstack Developer (2022-2023)",
      verified: true,
    },
    {
      id: 5,
      title: "MongoDB Certified Developer",
      type: "technical",
      issuer: "MongoDB University",
      date: "July 2023",
      description: "Advanced database design and development certification",
      verified: true,
    },
    {
      id: 6,
      title: "Project Excellence Award - Riyadh Medical Center",
      type: "project",
      issuer: "Riyadh Medical Services",
      date: "June 2023",
      description: "Recognition for outstanding performance in healthcare portal development",
      verified: true,
    },
  ];

  const getCertIcon = (type: string) => {
    switch (type) {
      case "project":
        return Award;
      case "employment":
        return FileText;
      case "technical":
        return CheckCircle;
      default:
        return Award;
    }
  };

  const getCertColor = (type: string) => {
    switch (type) {
      case "project":
        return "bg-secondary/10 text-secondary border-secondary/20";
      case "employment":
        return "bg-primary/10 text-primary border-primary/20";
      case "technical":
        return "bg-accent/10 text-accent-foreground border-accent/20";
      default:
        return "bg-muted";
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Mansour",
      position: "CEO",
      company: "Al-Faisal Trading LLC",
      location: "Riyadh, Saudi Arabia",
      testimonial:
        "Abdullah delivered an exceptional e-commerce platform that exceeded our expectations. His technical expertise combined with understanding of our market made the project a tremendous success. Our online sales increased by 180% in just 6 months.",
      rating: 5,
      initials: "AA",
    },
    {
      id: 2,
      name: "Sarah Al-Khalifa",
      position: "Director of IT",
      company: "Emirates Business Consultants",
      location: "Dubai, UAE",
      testimonial:
        "Working with Abdullah was a pleasure. He demonstrated exceptional professionalism and delivered our corporate website ahead of schedule. The multilingual capabilities and CMS integration were implemented flawlessly. Highly recommended!",
      rating: 5,
      initials: "SK",
    },
    {
      id: 3,
      name: "Dr. Mohammed Al-Rashid",
      position: "Operations Manager",
      company: "Riyadh Medical Services",
      location: "Riyadh, Saudi Arabia",
      testimonial:
        "The healthcare portal Abdullah developed for us has transformed our operations. The patient management system is intuitive, secure, and fully compliant with local regulations. His attention to detail and commitment to quality are outstanding.",
      rating: 5,
      initials: "MR",
    },
    {
      id: 4,
      name: "Khalid Al-Otaibi",
      position: "Project Manager",
      company: "Gulf Shipping & Logistics",
      location: "Kuwait City, Kuwait",
      testimonial:
        "Abdullah's expertise in real-time tracking systems helped us reduce our shipment tracking time by 60%. His technical skills, combined with excellent communication and project management, made the entire process smooth and efficient.",
      rating: 5,
      initials: "KO",
    },
    {
      id: 5,
      name: "Fatima Al-Harbi",
      position: "Founder & Director",
      company: "Arab Online Academy",
      location: "Jeddah, Saudi Arabia",
      testimonial:
        "The e-learning platform Abdullah built for us is robust, scalable, and user-friendly. We now have over 10,000 enrolled students. His understanding of educational technology and dedication to our success was evident throughout the project.",
      rating: 5,
      initials: "FH",
    },
    {
      id: 6,
      name: "Omar Al-Suwaidi",
      position: "Managing Director",
      company: "Dubai Property Solutions",
      location: "Dubai, UAE",
      testimonial:
        "Abdullah's work on our real estate platform has been instrumental in our growth. The virtual tour integration and advanced search features he implemented have significantly improved user engagement. A true professional!",
      rating: 5,
      initials: "OS",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abdullah@example.com",
      link: "mailto:abdullah@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+966 XXX XXX XXX",
      link: "tel:+966XXXXXXXXX",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Saudi Arabia, GCC",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/yourprofile",
      color: "hover:text-[#0077B5]",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/yourprofile",
      color: "hover:text-foreground",
    },
    {
      icon: Mail,
      label: "Email",
      link: "mailto:abdullah@example.com",
      color: "hover:text-primary",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-hero opacity-95" />
          <img src={heroBg} alt="Hero background" className="w-full h-full object-cover opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-white">Available for new projects</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Abdullah Ashraf Ansari
            </h1>

            <p className="text-2xl md:text-3xl text-secondary font-semibold mb-4">Fullstack / Web Developer</p>

            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              I help businesses in GCC transform ideas into responsive, scalable, and secure web applications.
              Experienced in Fullstack development with MERN & modern tech stacks.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a href="#portfolio">
                <Button size="lg" className="text-lg px-8 shadow-glow">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                >
                  Get in Touch
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white/10 backdrop-blur-md border-white/20 hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering excellence in every project with modern technologies and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "GCC Market Expertise",
                description:
                  "Deep understanding of regional business needs and cultural context across Saudi Arabia and GCC countries",
                icon: "🌍",
              },
              {
                title: "Modern Tech Stack",
                description:
                  "Proficient in MERN stack, React, Node.js, TypeScript, and cutting-edge web technologies",
                icon: "⚡",
              },
              {
                title: "Client-Focused",
                description:
                  "Clear communication, timely delivery, and ongoing support to ensure project success",
                icon: "🤝",
              },
            ].map((item, index) => (
              <Card key={index} className="p-8 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate developer with a mission to build digital solutions that make a difference
            </p>
          </div>

          <Card className="p-8 md:p-12 mb-16 animate-fade-in">
            <h3 className="text-3xl font-bold mb-6">Professional Background</h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm <strong className="text-foreground">Abdullah Ashraf Ansari</strong>, a passionate Fullstack
                Developer with over 5 years of experience building modern web applications. My journey in software
                development has been driven by a commitment to excellence and a deep understanding of both technical
                and business needs.
              </p>
              <p>
                Based in the GCC region, I've had the privilege of working with diverse clients across Saudi Arabia,
                UAE, and other Gulf countries. This experience has given me unique insights into regional market
                dynamics and cultural nuances that are crucial for successful project delivery.
              </p>
              <p>
                I specialize in the <strong className="text-foreground">MERN stack</strong> (MongoDB, Express.js,
                React, Node.js) and modern web technologies. My approach combines clean code practices, scalable
                architecture, and user-centric design to create applications that are not just functional, but truly
                exceptional.
              </p>
            </div>
          </Card>

          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Technical Expertise</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {technicalSkills.map((category, idx) => (
                <Card key={idx} className="p-8 hover-lift animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold">{category.category}</h4>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">Soft Skills & Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {softSkills.map((skill, idx) => (
                <Card
                  key={idx}
                  className="p-8 text-center hover-lift animate-fade-in"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="inline-flex p-4 rounded-full bg-secondary/10 mb-4">
                    <skill.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{skill.title}</h4>
                  <p className="text-muted-foreground">{skill.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 mt-16 bg-gradient-card animate-fade-in">
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Responsive Design
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                API Development
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Database Design
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                UI/UX Implementation
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Performance Optimization
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Security Best Practices
              </Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of successful projects delivered for clients across GCC markets
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setPortfolioFilter(cat.id)}
                variant={portfolioFilter === cat.id ? "default" : "outline"}
                className="transition-all"
              >
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <Card key={project.id} className="overflow-hidden hover-lift animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {project.verified && (
                    <div className="absolute top-3 right-3 bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <Award className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1 font-medium">{project.company}</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium text-accent-foreground">📈 {project.impact}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Certificates & <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional certifications, project completions, and recognitions from industry leaders
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
            {[
              { label: "Total Certificates", value: "12+", icon: Award },
              { label: "Technical Certs", value: "5", icon: CheckCircle },
              { label: "Project Completions", value: "4", icon: FileText },
              { label: "Years Validated", value: "5+", icon: Award },
            ].map((stat, idx) => (
              <Card key={idx} className="p-6 text-center hover-lift">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, idx) => {
              const Icon = getCertIcon(cert.type);
              return (
                <Card
                  key={cert.id}
                  className="p-6 hover-lift animate-scale-in"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${getCertColor(cert.type)}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold leading-tight">{cert.title}</h3>
                        {cert.verified && (
                          <Badge variant="secondary" className="ml-2">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-1 font-medium">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground mb-3">{cert.date}</p>
                      <p className="text-sm mb-4">{cert.description}</p>
                      <Button size="sm" variant="outline" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Client <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear what clients and partners across GCC have to say about working with me
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
            {[
              { label: "Happy Clients", value: "35+" },
              { label: "5-Star Reviews", value: "32" },
              { label: "Repeat Clients", value: "85%" },
              { label: "Avg. Rating", value: "4.9/5" },
            ].map((stat, idx) => (
              <Card key={idx} className="p-6 text-center hover-lift">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card
                key={testimonial.id}
                className="p-6 hover-lift animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">"{testimonial.testimonial}"</p>

                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.company} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how I can help bring your ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8 animate-fade-in">
              <Card className="p-8 bg-gradient-card">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, idx) => (
                    <a key={idx} href={info.link} className="flex items-start space-x-4 group">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                        <div className="font-medium group-hover:text-primary transition-colors">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
                <div className="flex flex-col space-y-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-all group ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-8 bg-secondary/10 border-secondary/20">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="w-3 h-3 bg-secondary rounded-full mr-2 animate-pulse" />
                  Available for Projects
                </h3>
                <p className="text-sm text-muted-foreground">
                  Currently accepting new client projects. Expected response time: 24-48 hours.
                </p>
              </Card>
            </div>

            <div className="lg:col-span-3 animate-scale-in">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full min-h-[160px]"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>

              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">24-48h</div>
                  <div className="text-sm text-muted-foreground">Average Response Time</div>
                </Card>
                <Card className="p-6">
                  <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
