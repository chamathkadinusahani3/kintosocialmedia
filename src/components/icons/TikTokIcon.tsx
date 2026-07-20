
import React from 'react';

// TikTok isn't available in lucide-react, so we provide a matching custom glyph.
export function TikTokIcon({ className }: {className?: string;}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true">
      
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.6c-1.3.1-2.5-.3-3.6-1v6.1c0 3.6-2.9 6.4-6.5 6.4-1.4 0-2.7-.4-3.7-1.2C4.5 18.6 3.9 16.9 4 15.2c.2-2.9 2.6-5.2 5.6-5.2.4 0 .8 0 1.2.1v2.8c-.4-.1-.7-.2-1.1-.2-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.8-1.2 2.8-2.7V3h4z" />
    </svg>);

}