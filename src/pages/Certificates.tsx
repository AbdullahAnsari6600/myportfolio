import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, FileText, CheckCircle, Download } from "lucide-react";

const Certificates = () => {
  const { t } = useTranslation();

  const certificates = [
    {
      id: 1,
      title: "Project Completion Certificate - HBR-WORLD LIMITED CO.",
      type: "project",
      issuer: "HBR-WORLD LIMITED CO.",
      date: "January 2026",
      description: "Certificate of Successful Completion of a Multilingual Website for a Contracting Company",
      verified: true,
      file: "/certificates/hbr.pdf"
    },    
    {
      id: 2,
      title: "Project Completion Certificate - Flow Company Ltd.",
      type: "business",
      issuer: "Flow Company Ltd.",
      date: "October 2025",
      description: "Certificate of Successful Completion for the Design and Deployment of a Multilingual Website for Flow Company Ltd",
      verified: true,
    file: "/certificates/flow.pdf", 
    },
    {
      id: 3,
      title: "Project Completion Certificate - Advanced Reforms Company",
      type: "project",
      issuer: "Advanced Reforms Company",
      date: "January 2026",
      description: "Certificate of Successful Completion for the Complete Design and Development of a Responsive Business Website with Backend for Advanced Reforms Company",
      verified: true,
    file: "/certificates/arc.pdf", 
    },
    {
      id: 4,
      title: "Project Completion Certificate - First Ocean Est.",
      type: "business",
      issuer: "City Solutions Company",
      date: "December 2023",
      description: "Certificate of Successful Completion for the Delivery of a Responsive Business Website with Backend, Executed as per Client Requirements, for First Ocean Est.",
      verified: true,
    file: "/certificates/city.pdf", 
    },
    {
      id: 5,
      title: "Project Completion Certificate - Jannat Travels and Tourism",
      type: "business",
      issuer: "Jannat Travels and Tourism",
      date: "Febuary 2026",
      description: "Developed a Business Website for Jannat Travels and Tourism, Enabling Customers to Contact the Team Easily and Explore Featured Travel Packages Hosted on the Website.",
      verified: true,
    file: "/certificates/jannat.pdf", 
    },
    {
      id: 6,
      title: "Project Completion Certificate - Vertex Builders and Company",
      type: "Contracting",
      issuer: "Vertex Builders Company",
      date: "November 2025",
      description: "Developed a Business Website for Vertex Builders Company to Highlight Contracting Services, Projects, and Client Enquiries.",
      verified: true,
    file: "/certificates/vertex.pdf", 
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

  const stats = [
    { label: t("certificates.totalCertificates"), value: "12+", icon: Award },
    { label: t("certificates.technicalCerts"), value: "8+", icon: CheckCircle },
    { label: t("certificates.projectCompletions"), value: "6+", icon: FileText },
    { label: t("certificates.yearsValidated"), value: "3+", icon: Award },
  ];

  return (
    <div className="pt-20">
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t("certificates.title")} <span className="text-gradient">{t("certificates.titleHighlight")}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("certificates.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
            {stats.map((stat, idx) => (
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
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div
  className={`p-3 rounded-lg ${getCertColor(cert.type)} 
  self-start md:self-auto flex-shrink-0`}
>

                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold leading-tight">{cert.title}</h3>
                        {cert.verified && (
                          <Badge variant="secondary" className="ms-2">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-1 font-medium">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground mb-3">{cert.date}</p>
                      <p className="text-sm mb-4">{cert.description}</p>
                      <a href={cert.file} download className="w-full">
  <Button size="sm" variant="outline" className="w-full">
    <Download className="w-4 h-4 me-2" />
    {t("certificates.downloadPDF")}
  </Button>
</a>


                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;
