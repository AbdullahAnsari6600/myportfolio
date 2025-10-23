import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Award } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform - Al-Faisal Group",
      category: "ecommerce",
      company: "Al-Faisal Trading LLC",
      description: "Built a comprehensive e-commerce platform with Arabic/English support, payment gateway integration, and inventory management for a leading Saudi retail company.",
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
      description: "Developed a modern, multilingual corporate website with CMS integration for content management and lead generation forms.",
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
      description: "Created a patient management system with appointment booking, medical records, and telemedicine features compliant with local regulations.",
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
      description: "Developed a property listing platform with virtual tours, advanced search filters, and agent dashboard for Dubai real estate market.",
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
      description: "Built a real-time shipment tracking and management dashboard with analytics for logistics operations across GCC.",
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
      description: "Developed an e-learning platform with video courses, quizzes, progress tracking, and certification system.",
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

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of successful projects delivered for clients across GCC markets
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              variant={filter === cat.id ? "default" : "outline"}
              className="transition-all"
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover-lift animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Image */}
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

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-1 font-medium">{project.company}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Impact */}
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 mb-4">
                  <p className="text-sm font-medium text-accent-foreground">
                    📈 {project.impact}
                  </p>
                </div>

                {/* Actions */}
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

        {/* Verified Projects Section */}
        <div className="mt-20 text-center animate-fade-in">
          <Card className="inline-block p-8 bg-gradient-card">
            <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Verified Projects</h3>
            <p className="text-muted-foreground max-w-2xl">
              Projects marked with the "Verified" badge come with company confirmation letters
              and certificates available in the{" "}
              <a href="/certificates" className="text-primary font-semibold hover:underline">
                Certificates section
              </a>
              .
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
