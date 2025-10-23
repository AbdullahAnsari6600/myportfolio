import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Mansour",
      position: "CEO",
      company: "Al-Faisal Trading LLC",
      location: "Riyadh, Saudi Arabia",
      testimonial: "Abdullah delivered an exceptional e-commerce platform that exceeded our expectations. His technical expertise combined with understanding of our market made the project a tremendous success. Our online sales increased by 180% in just 6 months.",
      rating: 5,
      initials: "AA",
    },
    {
      id: 2,
      name: "Sarah Al-Khalifa",
      position: "Director of IT",
      company: "Emirates Business Consultants",
      location: "Dubai, UAE",
      testimonial: "Working with Abdullah was a pleasure. He demonstrated exceptional professionalism and delivered our corporate website ahead of schedule. The multilingual capabilities and CMS integration were implemented flawlessly. Highly recommended!",
      rating: 5,
      initials: "SK",
    },
    {
      id: 3,
      name: "Dr. Mohammed Al-Rashid",
      position: "Operations Manager",
      company: "Riyadh Medical Services",
      location: "Riyadh, Saudi Arabia",
      testimonial: "The healthcare portal Abdullah developed for us has transformed our operations. The patient management system is intuitive, secure, and fully compliant with local regulations. His attention to detail and commitment to quality are outstanding.",
      rating: 5,
      initials: "MR",
    },
    {
      id: 4,
      name: "Khalid Al-Otaibi",
      position: "Project Manager",
      company: "Gulf Shipping & Logistics",
      location: "Kuwait City, Kuwait",
      testimonial: "Abdullah's expertise in real-time tracking systems helped us reduce our shipment tracking time by 60%. His technical skills, combined with excellent communication and project management, made the entire process smooth and efficient.",
      rating: 5,
      initials: "KO",
    },
    {
      id: 5,
      name: "Fatima Al-Harbi",
      position: "Founder & Director",
      company: "Arab Online Academy",
      location: "Jeddah, Saudi Arabia",
      testimonial: "The e-learning platform Abdullah built for us is robust, scalable, and user-friendly. We now have over 10,000 enrolled students. His understanding of educational technology and dedication to our success was evident throughout the project.",
      rating: 5,
      initials: "FH",
    },
    {
      id: 6,
      name: "Omar Al-Suwaidi",
      position: "Managing Director",
      company: "Dubai Property Solutions",
      location: "Dubai, UAE",
      testimonial: "Abdullah's work on our real estate platform has been instrumental in our growth. The virtual tour integration and advanced search features he implemented have significantly improved user engagement. A true professional!",
      rating: 5,
      initials: "OS",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Client <span className="text-gradient">Testimonials</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear what clients and partners across GCC have to say about working with me
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
          {[
            { label: "Happy Clients", value: "35+" },
            { label: "5-Star Reviews", value: "32" },
            { label: "Repeat Clients", value: "85%" },
            { label: "Avg. Rating", value: "4.9/5" },
          ].map((stat, idx) => (
            <Card key={idx} className="p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={testimonial.id}
              className="p-6 hover-lift animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              {/* Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.testimonial}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-3 pt-4 border-t border-border">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.company} • {testimonial.location}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center animate-fade-in">
          <Card className="p-12 bg-gradient-card">
            <h2 className="text-3xl font-bold mb-4">Want to share your experience?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              If you've worked with me, I'd love to hear your feedback. Your testimonial helps
              me improve and assists other potential clients in making their decision.
            </p>
            <a href="/contact" className="inline-block">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-hover transition-all">
                Get in Touch
              </button>
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
