import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon, PlusIcon } from 'lucide-react';

type ContactInfoProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  className?: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
  title?: string;
  description?: string;
  contactInfo?: ContactInfoProps[];
  formSectionClassName?: string;
};

export function ContactCard({
  title = 'Contact With Us',
  description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
  contactInfo,
  className,
  formSectionClassName,
  children,
  ...props
}: ContactCardProps) {
  return (
    <div
      className={cn(
        'relative grid h-full w-full overflow-hidden rounded-[32px] border border-white/10 bg-card/60 shadow-2xl shadow-black/40 backdrop-blur-sm sm:rounded-[40px] md:grid-cols-2 md:rounded-[48px] lg:grid-cols-3',
        className,
      )}
      {...props}
    >
      <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-[#D7E2EA]/25" />
      <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-[#D7E2EA]/25" />
      <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-[#D7E2EA]/25" />
      <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 text-[#D7E2EA]/25" />

      <div className="flex flex-col justify-between lg:col-span-2">
        <div className="relative h-full space-y-6 px-6 py-10 sm:px-8 sm:py-12 md:p-12">
          <h3
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            {title}
          </h3>
          <p className="max-w-xl text-sm leading-relaxed text-[#D7E2EA]/70 md:text-base">
            {description}
          </p>
          <div className="grid gap-2 pt-2 sm:grid-cols-2">
            {contactInfo?.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>
        </div>
      </div>

      <div
        className={cn(
          'flex h-full w-full items-center border-t border-white/10 bg-white/[0.02] p-6 sm:p-8 md:col-span-1 md:border-t-0 md:border-l',
          formSectionClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}

function ContactInfo({ icon: Icon, label, value, href, className }: ContactInfoProps) {
  const content = (
    <>
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110"
        style={{ background: 'linear-gradient(135deg, #B600A8 0%, #7621B0 100%)' }}
      >
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/60">{label}</p>
        <p className="truncate text-sm font-medium text-[#D7E2EA] transition-colors duration-200 group-hover:text-white">
          {value}
        </p>
      </div>
    </>
  );

  const sharedClassName = cn(
    'group flex items-center gap-3 rounded-2xl py-2 transition-transform duration-200',
    href && 'cursor-pointer hover:-translate-y-0.5',
    className,
  );

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={sharedClassName}
        aria-label={`${label}: ${value}`}
      >
        {content}
      </a>
    );
  }

  return <div className={sharedClassName}>{content}</div>;
}
