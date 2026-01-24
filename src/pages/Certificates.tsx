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

  const stats = [
    { label: t("certificates.totalCertificates"), value: "12+", icon: Award },
    { label: t("certificates.technicalCerts"), value: "5", icon: CheckCircle },
    { label: t("certificates.projectCompletions"), value: "4", icon: FileText },
    { label: t("certificates.yearsValidated"), value: "5+", icon: Award },
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
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${getCertColor(cert.type)}`}>
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
                      <Button size="sm" variant="outline" className="w-full">
                        <Download className="w-4 h-4 me-2" />
                        {t("certificates.downloadPDF")}
                      </Button>
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
