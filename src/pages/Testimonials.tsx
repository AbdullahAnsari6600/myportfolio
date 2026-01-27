import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: "Ahmed (Abu Hamdan)",
      position: "CEO",
      company: "HBR-WORLD Limited Co.",
      location: "Riyadh, Saudi Arabia",
      testimonial:
        "Mr. Abdullah delivered our business website exactly on time and exceeded expectations. He was always available for calls, clearly understood our requirements, and translated them into a professional, modern website that truly represents our company.",
      rating: 5,
      initials: "AH",
    },
    {
      id: 2,
      name: "Sarah Al-Khalifa",
      position: "Director of IT",
      company: "VERTEX Builders and Company",
      location: "Khobar, Saudi Arabia",
      testimonial:
        "Working with Mr. Abdullah was a great experience. He maintained regular communication, attended calls promptly with our team, and delivered the website on schedule. The final result was clean, responsive, and perfectly aligned with our business needs.",
      rating: 5,
      initials: "SK",
    },
    {
      id: 3,
      name: "Wahed Bin Jaffer",
      position: "Business Developer",
      company: "First Ocean Est.",
      location: "Riyadh, Saudi Arabia",
      testimonial:
        "We highly appreciate Mr. Abdullah’s commitment and responsiveness. He was always available for discussions, delivered the website on time, and ensured every business requirement was carefully implemented with exceptional attention to detail.",
      rating: 5,
      initials: "WJ",
    },
    {
      id: 4,
      name: "Turkey Khalid",
      position: "Manager",
      company: "Advanced Reforms Company",
      location: "Riyadh City, Saudi Arabia",
      testimonial:
        "Mr. Abdullah showed excellent professionalism throughout the project. He respected timelines, coordinated well with our internal team through calls, and delivered a business website that significantly improved our company’s online presence.",
      rating: 5,
      initials: "TK",
    },
    {
      id: 5,
      name: "Fatima Al-Harbi",
      position: "Founder & Director",
      company: "FLow Company Ltd.",
      location: "Jeddah, Saudi Arabia",
      testimonial:
        "Mr. Abdullah handled our website project with great responsibility. From timely delivery to clear communication and regular calls with our team, the entire process was smooth and the final website exceeded our expectations.",
      rating: 5,
      initials: "FH",
    },
    {
      id: 6,
      name: "Omar Al-Suwaidi",
      position: "Managing Director",
      company: "Jannat Travels and Tourism",
      location: "Saudi Arabia",
      testimonial:
        "Abdullah's work on our real travels and tourism platform has been instrumental in our growth. The virtual tour integration and advanced search features he implemented have significantly improved user engagement. A true professional!",
      rating: 5,
      initials: "OS",
    },
  ];

  const stats = [
    { label: t("testimonials.happyClients"), value: "10+" },
    { label: t("testimonials.fiveStarReviews"), value: "32" },
    { label: t("testimonials.repeatClients"), value: "85%" },
    { label: t("testimonials.avgRating"), value: "4.9/5" },
  ];

  return (
    <div className="pt-20">
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t("testimonials.title")} <span className="text-gradient">{t("testimonials.titleHighlight")}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("testimonials.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
            {stats.map((stat, idx) => (
              <Card key={idx} className="p-6 text-center hover-lift">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card
                key={testimonial.id}
                className="p-6 hover-lift animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">"{testimonial.testimonial}"</p>

                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.company} • {testimonial.location}
                    </div>
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

export default Testimonials;
