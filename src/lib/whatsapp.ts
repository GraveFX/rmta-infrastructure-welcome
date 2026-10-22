export const WHATSAPP_NUMBER = "918900060001";
export const WHATSAPP_DISPLAY = "+91 8900060001";
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export type ServiceKey = "civil" | "it" | "property" | "general";

export const SERVICE_MESSAGES: Record<ServiceKey, string> = {
  civil:
    "Hello RMTA Infrastructure, I would like to enquire about your Civil Engineering and Infrastructure services. Please contact me to discuss my requirements.",
  it: "Hello RMTA Infrastructure, I would like to discuss an IT or technology project. Please contact me to discuss my requirements.",
  property:
    "Hello RMTA Infrastructure, I would like to make a property-related enquiry. Please contact me to discuss the details.",
  general:
    "Hello RMTA Infrastructure, I would like to discuss a project with your team. Please let me know how we can proceed.",
};

export const SERVICE_LABELS: Record<ServiceKey, string> = {
  civil: "Civil Engineering & Infrastructure",
  it: "IT & Technology Projects",
  property: "Property Dealing",
  general: "General enquiry",
};

export function whatsappUrl(message?: string) {
  return message ? `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}` : WHATSAPP_BASE;
}

export function serviceWhatsappUrl(key: ServiceKey) {
  return whatsappUrl(SERVICE_MESSAGES[key]);
}

export interface EnquiryInput {
  name: string;
  phone: string;
  email?: string;
  service: ServiceKey;
  details: string;
}

export function enquiryMessage(i: EnquiryInput) {
  const lines = [
    "Hello RMTA Infrastructure,",
    "",
    `I would like to enquire about: ${SERVICE_LABELS[i.service]}.`,
    "",
    `Name: ${i.name.trim()}`,
    `Phone: ${i.phone.trim()}`,
  ];
  if (i.email?.trim()) lines.push(`Email: ${i.email.trim()}`);
  lines.push("", "Details:", i.details.trim(), "", "Please contact me to discuss my requirements.");
  return lines.join("\n");
}
