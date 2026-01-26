import { motion } from 'framer-motion';
import { Code, Layers, Lightbulb, TrendingUp, Leaf, Brain, ArrowRight } from 'lucide-react';
import { services, professionalInfo } from '@/data/professional';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Lightbulb,
  Code,
  Layers,
  Brain,
  TrendingUp,
  Leaf,
};

export default function Services() {
  return (
    <>
      <SEOHead
        title="Services"
        description={`AI consulting and development services offered by ${professionalInfo.name}. LLM solutions, predictive analytics, AI strategy, and sustainable AI.`}
      />
      
      <div className="min-h-screen">
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">Services</h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light">
                AI solutions that deliver measurable business impact
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Code;
              return (
                <ScrollReveal key={service.id} delay={index * 0.1}>
                  <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="p-4 rounded-xl bg-primary/10 text-primary self-start">
                        <Icon className="size-8" />
                      </div>
                      <div className="space-y-4 flex-1">
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                        <p className="text-muted-foreground font-light leading-relaxed">{service.description}</p>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 bg-secondary/30 border-y border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-center mb-12">How We'll Work Together</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Understand your challenges, goals, and existing capabilities.' },
                { step: '02', title: 'Strategy', desc: 'Design a tailored AI roadmap with clear milestones and ROI.' },
                { step: '03', title: 'Delivery', desc: 'Build, deploy, and iterate on solutions that drive results.' },
              ].map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 0.1}>
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground font-light">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 font-light">Let's discuss your AI challenges and find the right solution.</p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Schedule a Consultation <ArrowRight className="ml-2 size-4" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
