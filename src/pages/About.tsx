import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Wrench, MessageSquare, Users, Target } from "lucide-react";

const About = () => {
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
    { icon: MessageSquare, title: "Communication", description: "Clear and effective client communication in English and Arabic" },
    { icon: Users, title: "Teamwork", description: "Collaborative approach to problem-solving and project delivery" },
    { icon: Target, title: "Project Management", description: "Organized workflow with timely delivery and quality assurance" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a mission to build digital solutions that make a difference
          </p>
        </div>

        {/* Bio Section */}
        <Card className="p-8 md:p-12 mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Professional Background</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm <strong className="text-foreground">Abdullah Ashraf Ansari</strong>, a passionate Fullstack Developer
              with over 5 years of experience building modern web applications. My journey in software development
              has been driven by a commitment to excellence and a deep understanding of both technical and business needs.
            </p>
            <p>
              Based in the GCC region, I've had the privilege of working with diverse clients across Saudi Arabia, UAE,
              and other Gulf countries. This experience has given me unique insights into regional market dynamics and
              cultural nuances that are crucial for successful project delivery.
            </p>
            <p>
              I specialize in the <strong className="text-foreground">MERN stack</strong> (MongoDB, Express.js, React, Node.js)
              and modern web technologies. My approach combines clean code practices, scalable architecture, and user-centric
              design to create applications that are not just functional, but truly exceptional.
            </p>
            <p>
              Whether it's building an e-commerce platform, corporate website, or custom web application, I bring
              technical expertise, reliability, and a genuine commitment to client success on every project.
            </p>
          </div>
        </Card>

        {/* Technical Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {technicalSkills.map((category, idx) => (
              <Card key={idx} className="p-8 hover-lift animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
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
          <h2 className="text-3xl font-bold mb-8 text-center">Soft Skills & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {softSkills.map((skill, idx) => (
              <Card key={idx} className="p-8 text-center hover-lift animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="inline-flex p-4 rounded-full bg-secondary/10 mb-4">
                  <skill.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <Card className="p-8 mt-16 bg-gradient-card animate-fade-in">
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="secondary" className="text-sm px-4 py-2">Responsive Design</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">API Development</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">Database Design</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">UI/UX Implementation</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">Performance Optimization</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">Security Best Practices</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">Version Control</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">Testing & Debugging</Badge>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
