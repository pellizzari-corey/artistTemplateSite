/*
 * CONTACT PAGE — "Digital Canvas" Bold Geometric Expressionism
 * Contact form with commission info and social links.
 */

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { toast } from "sonner";
import { Send, Mail, Twitter, Instagram, Clock, MessageSquare } from "lucide-react";

const commissionInfo = [
  {
    icon: Clock,
    title: "Turnaround",
    desc: "Standard orders: 3-7 business days. Rush orders available for an additional fee.",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    desc: "I keep you updated at every stage. You'll see sketches before I move to final rendering.",
  },
  {
    icon: Mail,
    title: "Preferred Contact",
    desc: "Use the form below or email directly at hello@artistry.com for commission inquiries.",
  },
];

const projectTypes = [
  "Emote Pack",
  "Single Emote",
  "Full Brand Package",
  "Logo Design",
  "Stream Overlay",
  "Panel Design",
  "Social Media Kit",
  "Custom Illustration",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Message sent!", {
      description: "Thanks for reaching out. I'll get back to you within 24-48 hours.",
    });
    setFormData({ name: "", email: "", projectType: "", budget: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-8 md:pb-12">
        <div className="container">
          <SectionHeading
            tag="Contact"
            title="Let's make something bold."
            description="Have a project in mind? Fill out the form below and I'll get back to you within 24-48 hours."
            accentColor="coral"
          />
        </div>
      </section>

      {/* Commission Info */}
      <section className="pb-12 md:pb-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commissionInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-6 bg-card border border-border"
              >
                <div className="w-10 h-10 bg-coral/10 flex items-center justify-center mb-4">
                  <info.icon size={18} className="text-coral" />
                </div>
                <h3 className="font-[var(--font-display)] font-bold text-base mb-2">
                  {info.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {info.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-[var(--font-display)] font-semibold text-xs uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-coral focus:outline-none transition-colors text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-[var(--font-display)] font-semibold text-xs uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-coral focus:outline-none transition-colors text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-[var(--font-display)] font-semibold text-xs uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <select
                      required
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border text-foreground focus:border-coral focus:outline-none transition-colors text-sm appearance-none"
                    >
                      <option value="" disabled>
                        Select a project type
                      </option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-[var(--font-display)] font-semibold text-xs uppercase tracking-wider mb-2">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border text-foreground focus:border-coral focus:outline-none transition-colors text-sm appearance-none"
                    >
                      <option value="" disabled>
                        Select budget range
                      </option>
                      <option value="under-50">Under $50</option>
                      <option value="50-150">$50 - $150</option>
                      <option value="150-350">$150 - $350</option>
                      <option value="350-600">$350 - $600</option>
                      <option value="600+">$600+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-[var(--font-display)] font-semibold text-xs uppercase tracking-wider mb-2">
                    Project Details
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-coral focus:outline-none transition-colors text-sm resize-none"
                    placeholder="Tell me about your project — what you need, references, deadlines, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-coral text-background font-[var(--font-display)] font-bold text-sm uppercase tracking-wider hover:bg-coral-light transition-colors duration-200 group"
                >
                  Send Message
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="p-6 md:p-8 bg-card border border-border mb-6">
                <h3 className="font-[var(--font-display)] font-bold text-lg mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@artistry.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-coral transition-colors text-sm"
                  >
                    <Mail size={16} />
                    hello@artistry.com
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-coral transition-colors text-sm"
                  >
                    <Twitter size={16} />
                    @artistry
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-coral transition-colors text-sm"
                  >
                    <Instagram size={16} />
                    @artistry
                  </a>
                </div>
              </div>

              <div className="p-6 md:p-8 bg-card border border-border">
                <h3 className="font-[var(--font-display)] font-bold text-lg mb-4">
                  Commission Status
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-[var(--font-display)] font-semibold text-sm text-green-400">
                    Open for Commissions
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Currently accepting new projects. Average response time is 24-48 hours.
                  Rush orders are available upon request.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
