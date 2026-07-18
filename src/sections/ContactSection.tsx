import { useState, type FormEvent } from 'react';
import { CheckCircle2, Github, Linkedin, MailIcon, PhoneIcon } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { ContactCard } from '../components/ui/contact-card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';

const CONTACT_INFO = [
  {
    icon: MailIcon,
    label: 'Email',
    value: 'llithira3@gmail.com',
    href: 'mailto:llithira3@gmail.com',
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: '+94 70 209 3945',
    href: 'tel:+94702093945',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'lithira-silva',
    href: 'https://www.linkedin.com/in/lithira-silva-20b42a370/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'lithira-works',
    href: 'https://github.com/lithira-works',
  },
];

type FormStatus = 'idle' | 'submitting' | 'success';

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status !== 'idle') return;

    setStatus('submitting');
    // Simulated network round-trip — swap for a real API/email call when ready.
    window.setTimeout(() => setStatus('success'), 1200);
  };

  return (
    <section
      id="contact"
      className="relative z-10 bg-[#0C0C0C] px-5 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-24 md:px-10 md:pb-32 md:pt-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Let&apos;s Talk
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={40} className="mx-auto max-w-5xl">
        <ContactCard
          title="Get In Touch"
          description="Have a project in mind or just want to say hi? Fill out the form and I'll get back to you within 24 hours."
          contactInfo={CONTACT_INFO}
        >
          {status === 'success' ? (
            <div className="flex w-full flex-col items-center gap-4 py-10 text-center">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full"
                style={{ background: 'linear-gradient(135deg, #B600A8 0%, #7621B0 100%)' }}
              >
                <CheckCircle2 className="h-7 w-7 text-white" />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-medium text-[#D7E2EA]">Message sent!</p>
                <p className="text-sm text-[#D7E2EA]/60">
                  Thanks for reaching out — I&apos;ll reply as soon as I can.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full space-y-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input id="contact-name" type="text" placeholder="John Doe" required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <ContactButton type="submit" className="w-full" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </ContactButton>
            </form>
          )}
        </ContactCard>
      </FadeIn>
    </section>
  );
}
