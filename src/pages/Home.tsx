import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users, Award, Code2, Sparkles } from "lucide-react";
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

      {/* Quick Highlights */}
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
    </div>
  );
};

export default Home;
