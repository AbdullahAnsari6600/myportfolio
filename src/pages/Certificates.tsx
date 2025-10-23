import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Award, FileText, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Certificates = () => {
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
    {
      id: 7,
      title: "React Professional Certificate",
      type: "technical",
      issuer: "Meta (Facebook)",
      date: "April 2023",
      description: "Advanced React.js development and best practices",
      verified: true,
    },
    {
      id: 8,
      title: "Agile Scrum Master Certification",
      type: "professional",
      issuer: "Scrum Alliance",
      date: "February 2023",
      description: "Project management and agile methodologies certification",
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

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Certificates & <span className="text-gradient">Achievements</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications, project completions, and recognitions from industry leaders
          </p>
        </div>

        {/* Stats */}
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

        {/* Certificates Grid */}
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
                    <p className="text-sm text-muted-foreground mb-1 font-medium">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">{cert.date}</p>
                    <p className="text-sm mb-4">{cert.description}</p>
                    <Button size="sm" variant="outline" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download Certificate PDF
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center animate-fade-in">
          <Card className="p-12 bg-gradient-card">
            <Award className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Continuous Learning</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              I believe in staying current with industry trends and continuously expanding my skill set.
              All certificates are verifiable and available for download.
            </p>
            <Button size="lg">
              <Download className="w-5 h-5 mr-2" />
              Download All Certificates
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
