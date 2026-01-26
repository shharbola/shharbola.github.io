import { motion } from 'framer-motion';
import { professionalInfo, services, featuredProjects } from '@/data/professional';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Code, Layers, Lightbulb, TrendingUp, Leaf, Brain, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.png';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Lightbulb,
  Code,
  Layers,
  Brain,
  TrendingUp,
  Leaf,
};

/**
 * Homepage for Dr. Shubhi Harbola - AI Consultant & Researcher
 * Bold, modern design showcasing expertise and impact
 */
export default function Home() {
  return (
    <>
      <SEOHead />
      
      <div className="min-h-screen">
        {/* Hero Section - Full viewport with gradient */}
        <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-background via-background to-accent">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500" />
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          {/* Hero Content */}
          <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-16 py-32">
            {/* Text Content */}
            <motion.div
              className="flex-1 space-y-8 max-w-2xl text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center lg:justify-start"
              >
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 text-sm font-medium border-primary/50 bg-primary/10 text-primary gap-2"
                >
                  <Sparkles className="size-4" />
                  {professionalInfo.availability}
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {professionalInfo.name}
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl font-medium tracking-wide text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {professionalInfo.title}
              </motion.p>

              <motion.p
                className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                {professionalInfo.tagline}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <Button asChild size="lg" className="text-base font-medium px-8">
                  <Link to="/contact">
                    Let's Collaborate
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base font-medium px-8">
                  <Link to="/about">Learn More</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-2xl" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt={professionalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <ScrollIndicator />
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 px-6 lg:px-8 bg-card border-y border-border">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <p className="text-4xl md:text-5xl font-bold text-primary">{professionalInfo.experience.years}+</p>
                  <p className="text-sm md:text-base text-muted-foreground font-medium">Years Experience</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl md:text-5xl font-bold text-primary">13</p>
                  <p className="text-sm md:text-base text-muted-foreground font-medium">Publications</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl md:text-5xl font-bold text-primary">18%</p>
                  <p className="text-sm md:text-base text-muted-foreground font-medium">Forecast Accuracy Boost</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl md:text-5xl font-bold text-primary">$60K+</p>
                  <p className="text-sm md:text-base text-muted-foreground font-medium">Annual Savings Delivered</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  AI Solutions That Deliver Impact
                </h2>
                <p className="text-lg font-light leading-relaxed text-muted-foreground">
                  {professionalInfo.heroIntroduction}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2 pt-4">
                  {professionalInfo.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-medium">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-base font-medium tracking-wide text-primary hover:text-primary/80 transition-colors group pt-4"
                >
                  <span>View Full Background</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-secondary/30 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Impact & Results
                </h2>
                <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                  Selected projects showcasing measurable business outcomes
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredProjects.map((project, index) => (
                <ScrollReveal key={project.title} delay={index * 0.1}>
                  <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Zap className="size-5" />
                      </div>
                      <Badge variant="outline" className="text-primary border-primary/30">
                        {project.impact}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  How I Can Help
                </h2>
                <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                  From AI strategy to hands-on implementation, I help organizations unlock the power of intelligent systems.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {services.slice(0, 4).map((service, index) => {
                const Icon = iconMap[service.icon] || Code;
                return (
                  <ScrollReveal key={service.id} delay={index * 0.1}>
                    <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon className="size-6" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold">{service.title}</h3>
                          <p className="text-muted-foreground font-light leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="flex justify-center mt-12">
                <Button asChild variant="outline" size="lg">
                  <Link to="/services" className="gap-2">
                    View All Services
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-lg md:text-xl opacity-90 font-light max-w-2xl mx-auto">
                  I'm currently accepting consulting engagements. Let's discuss how AI can drive measurable results for your organization.
                </p>
                <Button asChild size="lg" variant="secondary" className="text-base font-medium px-8">
                  <Link to="/contact">
                    Start a Conversation
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
