import { MessageCircle } from "lucide-react";
import { getPhoneNumber, whatsappUrl } from "@/lib/settings";

const WhatsAppButton = async () => {
  const phone = await getPhoneNumber();
  const url = phone ? whatsappUrl(phone) : "#";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[999] group"
      aria-label="Neem contact op via WhatsApp"
    >
      <div className="relative">
        {/* Pulsing rings */}
        <div className="absolute inset-0 rounded-full bg-emerald-500 opacity-20 group-hover:opacity-35"></div>
        
        {/* Main button */}
        <div className="relative flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-[transform,box-shadow] duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]">
          <MessageCircle size={30} className="text-white" aria-hidden="true" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-france-900/90 backdrop-blur-md border border-blanc-50/10 rounded-xl text-blanc-50 text-sm font-bold whitespace-nowrap opacity-0 -translate-x-4 transition-[opacity,transform] duration-300 group-hover:opacity-100 group-hover:translate-x-0 shadow-xl pointer-events-none">
          Hulp nodig? Chat met ons!
          <div className="absolute left-full top-1/2 -translate-y-1/2 w-2 h-2 bg-france-900 border-r border-t border-blanc-50/10 rotate-45 -ml-1"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
