import civil from "@/assets/civil.jpg";
import it from "@/assets/it.jpg";
import property from "@/assets/property.jpg";
import type { ServiceKey } from "./whatsapp";

/** Verified from the existing RMTA website. Edit here to update everywhere. */
export const COMPANY = {
  name: "RMTA Infrastructure",
  nameBn: "রম্য ইনফ্রাস্ট্রাকচার",
  email: "rmtainfra@gmail.com",
  phone: "+91 8900060001",
  address: {
    street: "56, MM Ghosh St",
    locality: "Krishnanagar",
    district: "Nadia",
    region: "West Bengal",
    postalCode: "741101",
    country: "India",
  },
  registeredAddress: {
    street: "19, Bowbazar West lane",
    locality: "Krishnanagar-I",
    district: "Nadia",
    region: "West Bengal",
    postalCode: "741101",
    country: "India",
  },
};

const addressLine = (a: typeof COMPANY.address) => `${a.street}, ${a.locality}, ${a.district}, ${a.region} ${a.postalCode}`;

export const ADDRESS_LINE = addressLine(COMPANY.address);
export const REGISTERED_ADDRESS_LINE = addressLine(COMPANY.registeredAddress);


export interface Service {
  key: Exclude<ServiceKey, "general">;
  index: string;
  title: string;
  summary: string;
  /** Proposed entries — confirm with RMTA before treating as established services. */
  items: string[];
  image: string;
  alt: string;
}

export const SERVICES: Service[] = [
  {
    key: "civil",
    index: "01",
    title: "Civil Engineering & Infrastructure",
    summary: "Support for civil and infrastructure-related requirements, from early planning conversations through coordination on site.",
    items: ["Civil engineering", "Infrastructure-related projects", "Construction coordination", "Project planning", "Execution and coordination"],
    image: civil,
    alt: "Illustrative image: surveyor with a total station beside concrete columns on a construction site",
  },
  {
    key: "it",
    index: "02",
    title: "IT & Technology Projects",
    summary: "Discussions around technology and IT project needs for businesses, scoped to what your organisation actually requires.",
    items: ["IT project delivery", "Technology consulting", "Software and digital solutions", "Business technology implementation", "Technology project coordination"],
    image: it,
    alt: "Illustrative image: a dark server room corridor with status lights",
  },
  {
    key: "property",
    index: "03",
    title: "Property Dealing",
    summary: "Property-related enquiries in and around Krishnanagar, handled through a direct conversation with the RMTA team.",
    items: ["Property-related enquiries", "Property dealing", "Transaction assistance"],
    image: property,
    alt: "Illustrative image: a modern residential building at golden hour",
  },
];

export const PROCESS = [
  { title: "Initial enquiry", text: "Message us on WhatsApp with a short description of what you need." },
  { title: "Requirement discussion", text: "We talk through your goals, site or system, and constraints." },
  { title: "Scope clarification", text: "Together we define what is in scope and what is not." },
  { title: "Proposal and planning", text: "You receive a proposal and plan to review." },
  { title: "Execution, where applicable", text: "Work proceeds as agreed, with regular communication." },
];

export const VALUES = [
  { title: "Requirement-focused", text: "Every conversation starts from your project, not a fixed package." },
  { title: "Clear communication", text: "A direct WhatsApp line to the team, in plain language." },
  { title: "Project-specific", text: "Solutions shaped around the scope, site and budget at hand." },
  { title: "Cross-disciplinary", text: "Engineering, technology and property interests under one name." },
];

/** Verified project records go here. Empty until RMTA supplies real projects. */
export const PROJECTS: {
  title: string;
  category: string;
  location: string;
  description: string;
  status: string;
  services: string[];
  images: string[];
}[] = [];
