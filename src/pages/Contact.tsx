import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({
        title: t("toast.missingInfo"),
        description: t("toast.fillAllFields"),
        variant: "destructive",
      });
      return;
    }

    toast({
      title: t("toast.messageSent"),
      description: t("toast.thankYou"),
    });

    setContactForm({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "abdullah@example.com",
      link: "mailto:abdullah@example.com",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+966 XXX XXX XXX",
      link: "tel:+966XXXXXXXXX",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
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
      label: t("contact.email"),
      link: "mailto:abdullah@example.com",
      color: "hover:text-primary",
    },
  ];

  return (
    <div className="pt-20">
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t("contact.title")} <span className="text-gradient">{t("contact.titleHighlight")}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8 animate-fade-in">
              <Card className="p-8 bg-gradient-card">
                <h3 className="text-2xl font-bold mb-6">{t("contact.contactInfo")}</h3>
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
                <h3 className="text-xl font-bold mb-6">{t("contact.connectWithMe")}</h3>
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
                  <span className="w-3 h-3 bg-secondary rounded-full me-2 animate-pulse" />
                  {t("contact.availableForProjects")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("contact.availableNote")}
                </p>
              </Card>
            </div>

            <div className="lg:col-span-3 animate-scale-in">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">{t("contact.sendMessage")}</h3>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t("contact.yourName")} *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={t("contact.namePlaceholder")}
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t("contact.emailAddress")} *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t("contact.emailPlaceholder")}
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t("contact.yourMessage")} *
                    </label>
                    <Textarea
                      id="message"
                      placeholder={t("contact.messagePlaceholder")}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full min-h-[160px]"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-5 h-5 me-2" />
                    {t("contact.sendBtn")}
                  </Button>
                </form>
              </Card>

              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">24-48h</div>
                  <div className="text-sm text-muted-foreground">{t("contact.responseTime")}</div>
                </Card>
                <Card className="p-6">
                  <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">{t("contact.satisfactionRate")}</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
