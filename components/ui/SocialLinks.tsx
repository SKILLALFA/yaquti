import { SVGProps } from "react";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.5 8.5h2.25a.75.75 0 0 0 .75-.75V5.1a.75.75 0 0 0-.68-.747 25.6 25.6 0 0 0-2.62-.103c-2.5 0-4.2 1.53-4.2 4.335V10.5H7.75a.75.75 0 0 0-.75.75v2.25c0 .414.336.75.75.75H10v7a.75.75 0 0 0 .75.75h2.5a.75.75 0 0 0 .75-.75v-7h2.35a.75.75 0 0 0 .744-.657l.28-2.25a.75.75 0 0 0-.744-.843H14v-1.607c0-.61.163-.893 1-.893Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21 6.3c-.63.29-1.3.48-2 .57a3.5 3.5 0 0 0 1.53-1.93 6.9 6.9 0 0 1-2.2.85 3.47 3.47 0 0 0-5.9 3.16A9.83 9.83 0 0 1 5.15 5.6a3.47 3.47 0 0 0 1.07 4.63 3.4 3.4 0 0 1-1.57-.43v.04a3.47 3.47 0 0 0 2.78 3.4 3.5 3.5 0 0 1-1.56.06 3.47 3.47 0 0 0 3.24 2.41A6.96 6.96 0 0 1 4 17.15a9.8 9.8 0 0 0 5.32 1.56c6.38 0 9.87-5.29 9.87-9.87l-.01-.45A7.06 7.06 0 0 0 21 6.3Z" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5a1.94 1.94 0 1 0 0-3.88 1.94 1.94 0 0 0 0 3.88ZM5.25 10.25h3.38v9H5.25v-9Zm5.63 0h3.24v1.23h.05c.45-.85 1.56-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18v4.34h-3.38v-3.85c0-.92-.02-2.1-1.28-2.1-1.28 0-1.48.99-1.48 2.03v3.92h-3.4v-9Z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon, shape: "rounded-full" },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon, shape: "rounded-md" },
  { label: "Twitter", href: "https://twitter.com", Icon: TwitterIcon, shape: "rounded-full" },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedInIcon, shape: "rounded-md" },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIALS.map(({ label, href, Icon, shape }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`flex h-9 w-9 items-center justify-center bg-cream text-ink transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${shape}`}
        >
          <Icon width={18} height={18} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
