import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Twitter,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
} from 'lucide-react';
import { professionalInfo, education, experience, publications } from '@/data/professional';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import profilePhoto from '@/assets/profile-photo.png';

/**
 * About page with professional biography, education, experience, and publications
 */
export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn about ${professionalInfo.name}, ${professionalInfo.title}. ${
          professionalInfo.biography.split('\n\n')[0]
        }`}
        image={profilePhoto}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                About Me
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide">
                {professionalInfo.title}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portrait and Biography - Split Layout */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Portrait Image */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-muted">
                  <img
                    src={profilePhoto}
                    alt={professionalInfo.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 flex-wrap">
                  {professionalInfo.socialLinks.github && (
                    <a
                      href={professionalInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-lg hover:bg-accent hover:border-primary/50 transition-all"
                      aria-label="GitHub"
                      title="GitHub"
                    >
                      <Github className="size-5" />
                    </a>
                  )}

                  {professionalInfo.socialLinks.linkedin && (
                    <a
                      href={professionalInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-lg hover:bg-accent hover:border-primary/50 transition-all"
                      aria-label="LinkedIn"
                      title="LinkedIn"
                    >
                      <Linkedin className="size-5" />
                    </a>
                  )}

                  {professionalInfo.socialLinks.twitter && (
                    <a
                      href={professionalInfo.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-lg hover:bg-accent hover:border-primary/50 transition-all"
                      aria-label="Twitter"
                      title="Twitter"
                    >
                      <Twitter className="size-5" />
                    </a>
                  )}

                  {/* ResearchGate */}
                  {professionalInfo.socialLinks.researchgate && (
                    <a
                      href={professionalInfo.socialLinks.researchgate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-lg hover:bg-accent hover:border-primary/50 transition-all"
                      aria-label="ResearchGate"
                      title="ResearchGate"
                    >
                      <GraduationCap className="size-5" />
                    </a>
                  )}

                  {/* Google Scholar */}
                  {professionalInfo.socialLinks.googleScholar && (
                    <a
                      href={professionalInfo.socialLinks.googleScholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-lg hover:bg-accent hover:border-primary/50 transition-all"
                      aria-label="Google Scholar"
                      title="Google Scholar"
                    >
                      <BookOpen className="size-5" />
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Biography and Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    {professionalInfo.name}
                  </h2>
                  <p className="text-xl text-primary font-medium tracking-wide">
                    {professionalInfo.tagline}
                  </p>
                </div>

                <Separator />

                <div className="space-y-4">
                  {professionalInfo.biography.split('\n\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base md:text-lg font-light leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-muted-foreground">
                    <Briefcase className="size-4" />
                    <span>Expertise</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {professionalInfo.expertise.map((item) => (
                      <Badge key={item} variant="secondary" className="font-medium">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3 text-sm font-light">
                    <MapPin className="size-4 text-muted-foreground" />
                    <span>{professionalInfo.location}</span>
                  </div>
                  <div className="text-sm font-light">
                    <span className="text-muted-foreground">Email: </span>
                    <a
                      href={`mailto:${professionalInfo.email}`}
                      className="text-primary hover:underline transition-colors"
                    >
                      {professionalInfo.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 bg-secondary/30 border-y border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="size-6 text-primary" />
                <h3 className="text-2xl md:text-3xl font-bold">Education</h3>
              </div>
            </ScrollReveal>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-xl bg-card border border-border">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <Badge variant="outline" className="w-fit">
                        {edu.year}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mb-2">Grade: {edu.grade}</p>
                    <p className="text-sm text-muted-foreground font-light">{edu.focus}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="size-6 text-primary" />
                <h3 className="text-2xl md:text-3xl font-bold">Experience</h3>
              </div>
            </ScrollReveal>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-xl bg-card border border-border">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <h4 className="text-lg font-semibold">{exp.title}</h4>
                      <Badge variant="outline" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 bg-secondary/30 border-y border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <Award className="size-6 text-primary" />
                <h3 className="text-2xl md:text-3xl font-bold">Key Achievements</h3>
              </div>
            </ScrollReveal>
            <div className="grid gap-4">
              {professionalInfo.achievements.map((achievement, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-foreground font-light">{achievement}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="size-6 text-primary" />
                <h3 className="text-2xl md:text-3xl font-bold">Selected Publications</h3>
                <Badge variant="secondary" className="ml-auto">
                  13 Total
                </Badge>
              </div>
            </ScrollReveal>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-xl bg-card border border-border">
                    <h4 className="font-medium mb-2">{pub.title}</h4>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span>{pub.journal}</span>
                      <span>•</span>
                      <Badge variant="outline" className="text-xs">
                        {pub.year}
                      </Badge>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
