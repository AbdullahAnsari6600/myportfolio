import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Wrench,
  MessageSquare,
  Users,
  Target,
  User,
  Briefcase,
  MapPin,
  Globe,
  Calendar,
} from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  const technicalSkills = [
    {
      category: t("about.frontend"),
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
      category: t("about.backend"),
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
      category: t("about.toolsOthers"),
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
  const careerInfo = [
    {
      icon: Briefcase,
      label: "Projects",
      value: "50+ Completed Projects",
    },
    {
      icon: Calendar,
      label: "Experience",
      value: "3+ Years Professional Experience",
    },
  ];
  

  const softSkills = [
    {
      icon: MessageSquare,
      title: t("about.communication.title"),
      description: t("about.communication.description"),
    },
    {
      icon: Users,
      title: t("about.teamwork.title"),
      description: t("about.teamwork.description"),
    },
    {
      icon: Target,
      title: t("about.projectManagement.title"),
      description: t("about.projectManagement.description"),
    },
  ];

  const personalInfo = [
    { icon: User, label: t("about.personalInfo.fullName"), value: t("about.personalInfo.fullNameValue") },
    { icon: Briefcase, label: t("about.personalInfo.designation"), value: t("about.personalInfo.designationValue") },
    { icon: Calendar, label: t("about.personalInfo.experience"), value: t("about.personalInfo.experienceValue") },
    { icon: MapPin, label: t("about.personalInfo.location"), value: t("about.personalInfo.locationValue") },
    { icon: Globe, label: t("about.personalInfo.languages"), value: t("about.personalInfo.languagesValue") },
    { icon: Target, label: t("about.personalInfo.availability"), value: t("about.personalInfo.availabilityValue") },
  ];

  return (
    <div className="pt-20">
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t("about.title")} <span className="text-gradient">{t("about.titleHighlight")}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("about.subtitle")}
            </p>
          </div>

          {/* Personal Information Card */}
          
          
          <Card className="p-6 sm:p-8 md:p-12 mb-16 animate-fade-in bg-gradient-card">
  <h2 className="text-3xl font-bold mb-8">
    {t("about.personalInfo.title")}
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-6 sm:gap-8 md:gap-2 items-start">
    
    {/* Profile Image */}
    <div className="flex justify-center md:justify-start">
      <div className="w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] rounded-3xl overflow-hidden border shadow-lg bg-white">
        <img
          src="/abdullah1.jpg"
          alt="Abdullah Ashraf Ansari"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Right Content */}
    <div className="grid gap-6 sm:gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {[...personalInfo, ...careerInfo].map((info, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-muted/40"
          >
            <div className="p-2 sm:p-3 rounded-lg bg-primary/10 shrink-0">
              <info.icon className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                {info.label}
              </p>
              <p className="font-semibold leading-snug text-sm sm:text-base">{info.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</Card>



          {/* Professional Background */}
          <Card className="p-8 md:p-12 mb-16 animate-fade-in">
            <h3 className="text-3xl font-bold mb-6">{t("about.professionalBackground")}</h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">{t("about.bio1")}</strong>
              </p>
              <p>{t("about.bio2")}</p>
              <p>{t("about.bio3")}</p>
            </div>
          </Card>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">{t("about.technicalExpertise")}</h3>
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

          {/* Soft Skills */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">{t("about.softSkills")}</h3>
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

          {/* Badges */}
          <Card className="p-8 mt-16 bg-gradient-card animate-fade-in">
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                {t("about.badges.responsiveDesign")}
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                {t("about.badges.apiDevelopment")}
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                {t("about.badges.databaseDesign")}
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                {t("about.badges.uiuxImplementation")}
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                {t("about.badges.performanceOptimization")}
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                {t("about.badges.securityBestPractices")}
              </Badge>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
