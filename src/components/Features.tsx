
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Globe, Rocket, Code, Shield, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized loading with server-side rendering and smart caching strategies.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: Globe,
      title: "Web Standards",
      description: "Built on top of web platform fundamentals with progressive enhancement.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Rocket,
      title: "Performance First",
      description: "Automatic code splitting and optimizations for the best user experience.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Code,
      title: "Developer Experience",
      description: "TypeScript support, hot reloading, and powerful development tools.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Shield,
      title: "Production Ready",
      description: "Battle-tested architecture with enterprise-grade security and reliability.",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Active community with extensive documentation and learning resources.",
      color: "text-pink-600",
      bgColor: "bg-pink-100"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-transparent to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              our platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for developers who want to ship fast without compromising on performance or user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
