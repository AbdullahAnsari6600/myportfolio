import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Briefcase, 
  Users, 
  Award, 
  Code2, 
  Sparkles,
  Star,
  Building2,
  Plane,
  FileText,
  Palette,
  File,
  Stamp,
  Receipt,
  Layers,
  CheckCircle2,
  Globe,
  Wrench,
  Shield,
  HeartHandshake
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Briefcase, label: t("stats.projectsCompleted"), value: "50+" },
    { icon: Users, label: t("stats.happyClients"), value: "35+" },
    { icon: Award, label: t("stats.certifications"), value: "12+" },
    { icon: Code2, label: t("stats.yearsExperience"), value: "5+" },
  ];

  const highlights = [
    {
      title: t("whyChooseMe.gccExpertise.title"),
      description: t("whyChooseMe.gccExpertise.description"),
      icon: "🌍",
    },
    {
      title: t("whyChooseMe.techStack.title"),
      description: t("whyChooseMe.techStack.description"),
      icon: "⚡",
    },
    {
      title: t("whyChooseMe.clientFocused.title"),
      description: t("whyChooseMe.clientFocused.description"),
      icon: "🤝",
    },
  ];

  const reviews = [
    {
      text: t("clientReviews.reviews.0.text"),
      role: t("clientReviews.reviews.0.role"),
      company: t("clientReviews.reviews.0.company"),
      country: t("clientReviews.reviews.0.country"),
    },
    {
      text: t("clientReviews.reviews.1.text"),
      role: t("clientReviews.reviews.1.role"),
      company: t("clientReviews.reviews.1.company"),
      country: t("clientReviews.reviews.1.country"),
    },
    {
      text: t("clientReviews.reviews.2.text"),
      role: t("clientReviews.reviews.2.role"),
      company: t("clientReviews.reviews.2.company"),
      country: t("clientReviews.reviews.2.country"),
    },
  ];

  const processSteps = [
    { icon: FileText, ...JSON.parse(JSON.stringify(t("workProcess.steps.0", { returnObjects: true }))) },
    { icon: Layers, ...JSON.parse(JSON.stringify(t("workProcess.steps.1", { returnObjects: true }))) },
    { icon: Code2, ...JSON.parse(JSON.stringify(t("workProcess.steps.2", { returnObjects: true }))) },
    { icon: Shield, ...JSON.parse(JSON.stringify(t("workProcess.steps.3", { returnObjects: true }))) },
    { icon: HeartHandshake, ...JSON.parse(JSON.stringify(t("workProcess.steps.4", { returnObjects: true }))) },
  ];

  const industries = [
    { icon: Building2, name: t("industries.list.0.name") },
    { icon: Users, name: t("industries.list.1.name") },
    { icon: Plane, name: t("industries.list.2.name") },
    { icon: Briefcase, name: t("industries.list.3.name") },
    { icon: FileText, name: t("industries.list.4.name") },
  ];

  const brandingItems = [
    { icon: Palette, name: t("branding.items.0.name") },
    { icon: File, name: t("branding.items.1.name") },
    { icon: Stamp, name: t("branding.items.2.name") },
    { icon: Receipt, name: t("branding.items.3.name") },
    { icon: Layers, name: t("branding.items.4.name") },
  ];

  const maintenanceItems = t("maintenance.items", { returnObjects: true }) as string[];

  const services = t("services.list", { returnObjects: true }) as Array<{ title: string; description: string }>;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-hero opacity-95" />
          <img src={heroBg} alt="Hero background" className="w-full h-full object-cover opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-white">{t("hero.available")}</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              {t("hero.name")}
            </h1>

            <p className="text-2xl md:text-3xl text-secondary font-semibold mb-4">{t("hero.title")}</p>

            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              {t("hero.intro")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link to="/portfolio">
                <Button size="lg" className="text-lg px-8 shadow-glow">
                  {t("hero.viewWork")}
                  <ArrowRight className="ms-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                >
                  {t("hero.getInTouch")}
                </Button>
              </Link>
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

      {/* Client Reviews Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("clientReviews.title")} <span className="text-gradient">{t("clientReviews.titleHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("clientReviews.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{review.text}"</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">{review.role}</p>
                  <p className="text-sm text-muted-foreground">{review.company} • {review.country}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/testimonials">
              <Button variant="outline" size="lg">
                {t("clientReviews.viewAll")}
                <ArrowRight className="ms-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("workProcess.title")} <span className="text-gradient">{t("workProcess.titleHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("workProcess.subtitle")}
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card className="p-6 text-center hover-lift relative z-10 h-full">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("industries.title")} <span className="text-gradient">{t("industries.titleHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("industries.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="p-6 text-center hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <industry.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <p className="font-medium text-sm">{industry.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("whyChooseMe.title")} <span className="text-gradient">{t("whyChooseMe.titleHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("whyChooseMe.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card key={index} className="p-8 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Preview */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("certifications.title")} <span className="text-gradient">{t("certifications.titleHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("certifications.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[1, 2, 3].map((_, index) => (
              <Card key={index} className="p-6 hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-16 h-16 text-primary/50" />
                </div>
                <p className="font-medium text-center">Company Name • 2024</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/certificates">
              <Button variant="outline" size="lg">
                {t("certifications.viewAll")}
                <ArrowRight className="ms-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Complete Solutions Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <Globe className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("solutions.title")} <span className="text-secondary">{t("solutions.titleHighlight")}</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
              {t("solutions.subtitle")}
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {t("solutions.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Branding & Identity Packages */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("branding.title")} <span className="text-gradient">{t("branding.titleHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("branding.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
            {brandingItems.map((item, index) => (
              <Card key={index} className="p-6 text-center hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <item.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                <p className="font-medium text-sm">{item.name}</p>
              </Card>
            ))}
          </div>

          <p className="text-center text-muted-foreground italic">{t("branding.note")}</p>
        </div>
      </section>

      {/* Maintenance & Support */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t("maintenance.title")} <span className="text-gradient">{t("maintenance.titleHighlight")}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t("maintenance.subtitle")}
              </p>
              
              <ul className="space-y-4 mb-8">
                {maintenanceItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Card className="p-4 bg-primary/5 border-primary/20">
                <p className="text-primary font-medium flex items-center gap-2">
                  <Wrench className="w-5 h-5" />
                  {t("maintenance.keyLine")}
                </p>
              </Card>
            </div>

            <div className="relative animate-scale-in">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="grid grid-cols-2 gap-6">
                  {[Wrench, Shield, Code2, HeartHandshake].map((Icon, index) => (
                    <div key={index} className="text-center p-4">
                      <Icon className="w-12 h-12 mx-auto mb-3 text-primary" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("services.title")} <span className="text-gradient">{t("services.titleHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mb-6">
                  {index === 0 && <Globe className="w-7 h-7 text-white" />}
                  {index === 1 && <Palette className="w-7 h-7 text-white" />}
                  {index === 2 && <Wrench className="w-7 h-7 text-white" />}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Line CTA */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <p className="text-2xl md:text-3xl font-semibold mb-8">{t("trustLine")}</p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              {t("hero.getInTouch")}
              <ArrowRight className="ms-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
