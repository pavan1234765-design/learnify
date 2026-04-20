import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/917022018220";

export function WhatsAppWidget() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3"
      style={{ filter: "drop-shadow(0 4px 16px rgba(37,211,102,0.35))" }}
    >
      {/* Tooltip label */}
      <span
        className={`
          whitespace-nowrap text-sm font-medium text-white
          bg-[#128C7E] rounded-full px-4 py-2
          transition-all duration-300 ease-out pointer-events-none
          ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}
        `}
        aria-hidden={!hovered}
      >
        Chat with us on WhatsApp
      </span>

      {/* Floating button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="whatsapp.open_button"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className="
          relative flex items-center justify-center
          w-14 h-14 rounded-full
          bg-[#25D366] hover:bg-[#20BF5B]
          transition-colors duration-200
          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50
          whatsapp-pulse
        "
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"
          aria-hidden="true"
          style={{ animationDuration: "2s" }}
        />

        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-white relative z-10"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.16c-1.49 0-2.96-.4-4.24-1.17l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.27-4.37c0-4.54 3.7-8.24 8.26-8.24 2.21 0 4.28.86 5.84 2.42a8.21 8.21 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.21 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.41-.56-.42-.14 0-.3-.01-.46-.01-.17 0-.44.06-.67.31-.22.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.28z" />
        </svg>
      </a>
    </div>
  );
}
