import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const { t } = useTranslation();
  const [portfolioFilter, setPortfolioFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Construction Company",
      category: "construction",
      company: "Advanced Reforms Company",
      description:
        "Constructed a responsive web application for a construction company, including Arabic/English support.",
      technologies: ["React", "Node.js", "Javascript", "CSS","TypeScript"],
      impact: "Increased online sales by 180% in first 6 months",
      verified: true,
      link: "https://www.arc-ksa.com",
      image: "/1.jpg",
    },
    {
      id: 2,
      title: "Contracting Company",
      category: "contracting",
      company: "HBR-WORLD Company Ltd.",
      description:
        "Developed a responsive international website for HBR Company, supporting multiple languages to cater to global users.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
      impact: "40% increase in qualified leads",
      verified: true,
      link: "https://www.hbr-world.com",
      image: "/2.jpg",
    },
    {
      id: 3,
      title: "Civil Maintenance",
      category: "maintenance",
      company: "First Ocean Est.",
      description:
        "Constructed a responsive web application for First Ocean Est., showcasing their maintenance services across various civil construction.",
      technologies: ["React", "Express", "Node", "JavaScript","CSS"],
      impact: "Streamlined operations for various needs",
      verified: true,
      link: "https://www.firstom.com",
      image: "/3.jpg",
    },
    {
      id: 4,
      title: "Travels and Tourism",
      category: "travels",
      company: "Jannat Travels and Tourism",
      description:
        "Web application for Jannat Travels & Tourism, featuring various Umrah packages, tour management, and a user-friendly booking experience.",
      technologies: ["React", "Node.js", "HTML", "JavaScript"],
      impact: "Listed local and international Umrah packages with a seamless booking experience.",
      verified: false,
      link: "https://www.jannattravelsandtours.com",
      image: "/4.jpg",
    },
    {
      id: 5,
      title: "Construction Company",
      category: "construction",
      company: "Vertex Builders Company",
      description:
        "Developed a responsive web application for Vertex, a civil construction company, to showcase projects, services, and company information effectively.",
      technologies: ["React", "Node.js", "CSS", "HTML", "JavaScript"],
      impact: "Created an interactive and informative platform for clients and partners.",
      verified: true,
      link: "https://www.vertexbcc.com",
      image: "/5.jpg",
    },
    {
      id: 6,
      title: "Contracting Company",
      category: "contracting",
      company: "Flow Limted Company",
      description:
        "Developed a comprehensive website for a contracting company in Riyadh, showcasing services, ongoing projects, and client testimonials.",
      technologies: ["Next.js", "Express", "CSS", "HTML","TypeScript"],
      impact: "Improved online visibility",
      verified: false,
      link: "https://www.flowltd-ksa.com",
      image: "/6.jpg",
    },
  ];

  const categories = [
    { id: "all", name: t("portfolio.allProjects") },
    { id: "construction", name: t("portfolio.construction") },
    { id: "contracting", name: t("portfolio.contracting") },
    { id: "maintenance", name: t("portfolio.maintenance") },
    { id: "travels", name: t("portfolio.travels") },
  ];

  const filteredProjects =
    portfolioFilter === "all" ? projects : projects.filter((p) => p.category === portfolioFilter);

  return (
    <div className="pt-20">
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t("portfolio.title")} <span className="text-gradient">{t("portfolio.titleHighlight")}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("portfolio.subtitle")}
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
  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
/>

                  {project.verified && (
                    <div className="absolute top-3 end-3 bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <Award className="w-3 h-3" />
                      <span>{t("portfolio.verified")}</span>
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
  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
    <Button size="sm" variant="outline" className="w-full flex items-center justify-center">
      <ExternalLink className="w-4 h-4 me-2" />
      {t("portfolio.viewLive")}
    </Button>
  </a>
</div>

                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
