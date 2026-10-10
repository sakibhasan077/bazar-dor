export interface NavbarType {
  icon: string;
  id: string;
  nameBn: string;
  slug: string;
}

interface MarketsType {
  division: string;
  market: string;
  max: number;
  min: number;
}

export interface AllProductType {
  categoryIcon: string;
  image: string;
  category: string;
  yesterday: number;
  id: string;
  nameBn: string;
  slug: string;
  today: number;
  categoryNameBn: string;
  unit: "piece" | "dozen" | "kg" | "litre";
  change: {
    dir: "down" | "up" | "flat";
    pct: number;
  };
  markets: MarketsType[];
}

export type SignoutType = {
  userData: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null;
  };
};