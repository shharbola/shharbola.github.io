import { motion } from 'framer-motion';
import { Mail, MapPin, Sparkles, Linkedin, Calendar } from 'lucide-react';
import { professionalInfo } from '@/data/professional';
import { ContactForm } from '@/components/forms/ContactForm';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

/**
 * Contact page with form and contact information
 * Features validated contact form and availability status
 */
export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact"
        description={`Get in touch with ${professionalInfo.name} for AI consulting inquiries, speaking opportunities, and collaboration. ${professionalInfo.availability}`}
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
              <Badge 
                variant="outline" 
                className="px-4 py-2 text-sm font-medium border-primary/50 bg-primary/10 text-primary gap-2 mb-6"
              >
                <Sparkles className="size-4" />
                {professionalInfo.availability}
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                Let's Connect
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Have an AI challenge? Let's discuss how I can help your organization.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Send a Message
                  </h2>
                  <p className="text-muted-foreground font-light">
                    Fill out the form below and I'll get back to you within 24-48 hours.
                  </p>
                </div>

                <ContactForm />
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Other Ways to Connect
                  </h2>
                  <p className="text-muted-foreground font-light">
                    Prefer a different channel? Here are other ways to reach me.
                  </p>
                </div>

                <Separator />

                {/* Contact Details */}
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Mail className="size-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium tracking-wide text-muted-foreground">
                        Email
                      </p>
                      <a
                        href={`mailto:${professionalInfo.email}`}
                        className="text-base md:text-lg font-light hover:text-primary transition-colors"
                      >
                        {professionalInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Linkedin className="size-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium tracking-wide text-muted-foreground">
                        LinkedIn
                      </p>
                      <a
                        href={professionalInfo.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base md:text-lg font-light hover:text-primary transition-colors"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <MapPin className="size-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium tracking-wide text-muted-foreground">
                        Location
                      </p>
                      <p className="text-base md:text-lg font-light">
                        {professionalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Engagement Types */}
                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="size-5 text-primary" />
                    <p className="font-semibold">Engagement Types</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Strategic AI Consulting
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Project-based Development
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Advisory & Fractional Roles
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Speaking & Workshops
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bottom spacing */}
        <div className="h-16" />
      </div>
    </>
  );
}
