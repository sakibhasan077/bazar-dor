export interface NavbarType {
  icon: string;
  id: string;
  nameBn: string;
  slug: string;
}

export interface AllProductType {
  categoryIcon: string;
  image: string;
  id: string;
  nameBn: string;
  slug: string;
  today: number;
  categoryNameBn: string;
  unit: "piece" | "dozen" | "kg" |"litre";
  change: {
    dir: "down" | "up" | "flat";
    pct: number;
  };
}
