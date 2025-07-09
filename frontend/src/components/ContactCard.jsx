import React from "react";
import { Button } from "./Button";
import { Mail, Calendar } from "lucide-react";

const ContactCard = ({
  icon,
  title,
  description,
  actionText,
  actionHref,
  isButton = false,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-border/50 p-8 text-center hover:shadow-lg transition-all duration-300 hover:border-border/80">
      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
        <div className="text-primary-foreground text-2xl">{icon}</div>
      </div>

      <h3 className="text-2xl font-semibold text-foreground mb-4">{title}</h3>

      <p className="text-muted-foreground mb-8 leading-relaxed">
        {description}
      </p>

      {isButton ? (
        <Button
          className="bg-[#432818] bg-muted/80 text-muted-foreground px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-md"
          onClick={() => window.open("https://calendly.com", "_blank")}
        >
          {actionText}
        </Button>
      ) : (
        <a
          href={actionHref}
          className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
        >
          {actionText}
        </a>
      )}
    </div>
  );
};

export default ContactCard;
