import { useParams, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { ArrowLeft } from "lucide-react";

const ServiceDetail = () => {
  const { service } = useParams();
  const navigate = useNavigate();

  const serviceInfo = {
    research: {
      title: "Research",
      description:
        "Comprehensive market research and user insights to drive strategic decision-making.",
      category: "Digital Advisory",
    },
    "customer-experience": {
      title: "Customer Experience",
      description:
        "Design exceptional customer journeys that create lasting value and engagement.",
      category: "Digital Advisory",
    },
    "digital-ecosystem": {
      title: "Digital Business Ecosystem",
      description:
        "Build interconnected digital platforms that scale and adapt to market changes.",
      category: "Digital Advisory",
    },
    "service-design": {
      title: "Service & Business Design",
      description:
        "Craft innovative service models that align with your business objectives.",
      category: "Digital Advisory",
    },
    "digital-transformation": {
      title: "Customer & Digital Transformation",
      description:
        "Transform your organization's digital capabilities and customer relationships.",
      category: "Digital Advisory",
    },
    "technology-consulting": {
      title: "Technology Consulting",
      description:
        "Strategic technology guidance to optimize your digital infrastructure.",
      category: "Digital Advisory",
    },
    "continuous-discovery": {
      title: "Continuous Discovery",
      description:
        "Ongoing research and validation to ensure product-market fit.",
      category: "Digital Advisory",
    },
    "product-strategy": {
      title: "Product Strategy",
      description:
        "Develop winning product strategies that drive growth and market success.",
      category: "Product Delivery",
    },
    "product-development": {
      title: "Product Development",
      description:
        "End-to-end product development from concept to market launch.",
      category: "Product Delivery",
    },
    "agile-delivery": {
      title: "Agile Delivery",
      description:
        "Fast, iterative delivery methodologies that ensure quality and speed.",
      category: "Product Delivery",
    },
    "technical-architecture": {
      title: "Technical Architecture",
      description:
        "Robust, scalable technical architectures that support business growth.",
      category: "Product Delivery",
    },
    "quality-assurance": {
      title: "Quality Assurance",
      description:
        "Comprehensive testing and quality control for reliable software products.",
      category: "Product Delivery",
    },
    devops: {
      title: "DevOps & Deployment",
      description:
        "Streamlined deployment processes and infrastructure management.",
      category: "Product Delivery",
    },
    "data-strategy": {
      title: "Data Strategy",
      description:
        "Comprehensive data strategies that unlock business value and insights.",
      category: "Data & AI",
    },
    "machine-learning": {
      title: "Machine Learning",
      description:
        "Advanced ML models that automate processes and enhance decision-making.",
      category: "Data & AI",
    },
    "artificial-intelligence": {
      title: "Artificial Intelligence",
      description:
        "AI solutions that transform business operations and customer experiences.",
      category: "Data & AI",
    },
    "data-analytics": {
      title: "Data Analytics",
      description:
        "Deep analytical insights that drive strategic business decisions.",
      category: "Data & AI",
    },
    "business-intelligence": {
      title: "Business Intelligence",
      description:
        "Intelligent dashboards and reporting for data-driven decision making.",
      category: "Data & AI",
    },
    "predictive-modeling": {
      title: "Predictive Modeling",
      description:
        "Advanced predictive models that forecast trends and optimize outcomes.",
      category: "Data & AI",
    },
  };

  const currentService = serviceInfo[service];

  if (!currentService) {
    return (
      <div
        className="min-h-screen font-['Fira_Code'] flex items-center justify-center bg-background"
        //style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => navigate("/service")}>Back to Services</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/services")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Button>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="text-sm text-muted-foreground mb-2">
              {currentService.category}
            </div>
            <CardTitle className="text-4xl font-bold">
              {currentService.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-8">
              {currentService.description}
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">What We Deliver</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Strategic planning and implementation</li>
                  <li>• Expert consultation and guidance</li>
                  <li>• Custom solutions tailored to your needs</li>
                  <li>• Ongoing support and optimization</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Get Started</h3>
                <p className="text-muted-foreground mb-4">
                  Ready to transform your business with{" "}
                  {currentService.title.toLowerCase()}? Contact our experts to
                  discuss your specific needs.
                </p>
                <Button size="lg">Contact Us</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiceDetail;
