import React from "react";
import Header from "./Header";
import ContactCard from "./ContactCard";
import { Mail, Calendar } from "lucide-react";
import Footer from "./Footer";

const ContactSection = () => {
  return (
    <div
      className="min-h-screen bg-background"
      style={{ backgroundColor: "hsl(44, 20%, 94%)" }}
    >
      <Header />

      <main className="container mx-auto px-4 lg:px-6 py-16 lg:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 pt-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get in touch with our team to discuss your translation needs
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          <ContactCard
            icon={<Mail className="w-8 h-8" />}
            title="Email Us"
            description="Reach out directly to our support team"
            actionText="connect@instrek.com"
            actionHref="mailto:connect@instrek.com"
          />

          <ContactCard
            icon={<Calendar className="w-8 h-8" />}
            title="Schedule a Demo"
            description="See Instrek in action with a personalized demo"
            actionText="Book a time slot"
            isButton={true}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactSection;
