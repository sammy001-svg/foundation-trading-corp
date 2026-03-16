import * as Icons from "lucide-react";
import products from "@/data/products.json";
import team from "@/data/team.json";
import insights from "@/data/insights.json";

export type IconName = keyof typeof Icons;

export interface Product {
  title: string;
  id: string;
  image: string;
  icon: string;
  description: string;
  highlights: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  social: {
    linkedin: string;
    email: string;
    phone: string;
  };
}

export interface Insight {
  title: string;
  category: string;
  summary: string;
  date: string;
  image: string;
  link: string;
}

export const getIcon = (name: string) => {
  const Icon = (Icons as unknown as Record<string, React.ComponentType>)[name];
  return Icon || Icons.HelpCircle;
};

export const getProducts = () => products as Product[];
export const getTeam = () => team as TeamMember[];
export const getInsights = () => insights as Insight[];
export const getProductById = (id: string) => (products as Product[]).find(p => p.id === id);
