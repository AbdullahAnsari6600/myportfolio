import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
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
      value: "abdullah.ashraf6600@gmail.com",
      link: "mailto:abdullah.ashraf6600@gmail.com",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+91 81212 16768",
      link: "tel:+918121216768",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: "Hyderabad, India",
      link: "https://maps.google.com/?q=Hyderabad",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/abdullah-ansari-2855b6228/",
      color: "hover:text-[#0077B5]",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      link: "https://wa.me/918121216768?text=Hi%20Abdullah,%20I%20found%20your%20portfolio",
      color: "hover:text-[#25D366]",
    },
  ];

  return (
    <div className="pt-20">
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              {t("contact.title")}{" "}
              <span className="text-gradient">
                {t("contact.titleHighlight")}
              </span>
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* LEFT COLUMN */}
            {/* LEFT COLUMN */}
<div className="lg:col-span-2 flex flex-col gap-8 h-full">
  {/* Contact Info */}
  <Card className="p-5 sm:p-6 md:p-8 bg-gradient-card flex-1">
    <h3 className="text-2xl font-bold mb-6">
      {t("contact.contactInfo")}
    </h3>
    <div className="space-y-6">
      {contactInfo.map((info, idx) => (
        <a
          key={idx}
          href={info.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 group"
        >
          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20">
            <info.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">{info.label}</div>
            <div className="font-medium group-hover:text-primary">{info.value}</div>
          </div>
        </a>
      ))}
    </div>
  </Card>

  {/* AVAILABLE FOR PROJECTS */}
  <Card className="p-5 sm:p-6 md:p-8 bg-secondary/10 border-secondary/20 flex-1">
    <h3 className="text-xl font-bold mb-3 flex items-center">
      <span className="w-3 h-3 bg-secondary rounded-full me-2 animate-pulse" />
      {t("contact.availableForProjects")}
    </h3>
    <p className="text-sm text-muted-foreground mb-4">
      {t("contact.availableNote")}
    </p>

    <div className="grid sm:grid-cols-2 gap-4">
      <Card className="p-4">
        <div className="text-2xl font-bold text-primary">24–48h</div>
        <div className="text-xs text-muted-foreground">{t("contact.responseTime")}</div>
      </Card>
      <Card className="p-4">
        <div className="text-2xl font-bold text-secondary">100%</div>
        <div className="text-xs text-muted-foreground">{t("contact.satisfactionRate")}</div>
      </Card>
      <Card className="p-4">
      <div className="text-2xl font-bold text-green-500">3+</div>
      <div className="text-xs text-muted-foreground">Years Experience</div>
    </Card>
    {/* NEW METRIC 2 */}
    <Card className="p-4">
      <div className="text-2xl font-bold text-indigo-500">50+</div>
      <div className="text-xs text-muted-foreground">Projects Completed</div>
    </Card>
    </div>
    
  </Card>
</div>


            {/* RIGHT COLUMN */}
            <div className="lg:col-span-3 animate-scale-in space-y-8">
              {/* CONNECT WITH ME (moved to RIGHT) */}
              <Card className="p-5 sm:p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4">
                  {t("contact.connectWithMe")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-all ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </Card>

              {/* SEND MESSAGE */}
              <Card className="p-5 sm:p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6">
                  {t("contact.sendMessage")}
                </h3>

                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <Input
                    placeholder={t("contact.namePlaceholder")}
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                    required
                  />

                  <Input
                    type="email"
                    placeholder={t("contact.emailPlaceholder")}
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    required
                  />

                  <Textarea
                    placeholder={t("contact.messagePlaceholder")}
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        message: e.target.value,
                      })
                    }
                    className="min-h-[180px]"
                    required
                  />

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-5 h-5 me-2" />
                    {t("contact.sendBtn")}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
