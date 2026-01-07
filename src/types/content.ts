// Tipos base
export interface BaseBlock<T extends string, P> {
  type: T;
  props: P;
}

// HERO
export interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  button: {
    text: string;
    url: string;
  };
}

// ABOUT
export interface AboutProps {
  title: string;
  description: string;
  image: string;
}

// SERVICES
export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface ServicesProps {
  title: string;
  services: ServiceItem[];
}

// PRICING
export interface PricingPlan {
  name: string;
  price: number;
  features: string[];
}

export interface PricingProps {
  title: string;
  currency: string;
  plans: PricingPlan[];
}

// CONTACT
export interface ContactField {
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  required: boolean;
}

export interface ContactProps {
  title: string;
  address: string;
  phone: string;
  email: string;
  form: {
    fields: ContactField[];
  };
}

// Unión de bloques
export type PageBlock =
  | BaseBlock<"hero", HeroProps>
  | BaseBlock<"about", AboutProps>
  | BaseBlock<"services", ServicesProps>
  | BaseBlock<"pricing", PricingProps>
  | BaseBlock<"contact", ContactProps>;
