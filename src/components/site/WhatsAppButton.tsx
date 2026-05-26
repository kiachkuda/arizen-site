import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/15555555555"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 size-14 bg-brand-emerald text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
