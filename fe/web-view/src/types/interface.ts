import { ReactNode } from "react";

export interface ITag {
  clideren: React.ReactNode;
}

export interface ICategori {
  id: number;
  image: string;
  name: string;
}

export interface ICardShop {
  id: number;
  image: string;
  name: string;
  stock: number;
  price: number;
  reting?: number;
}

export interface ICardCart {
  id: number;
  image: string;
  name: string;
  price: number;
}

export interface ICorousel {
  className?: React.StyleHTMLAttributes<HTMLDivElement>["className"];
  style?: React.CSSProperties;
  onClick?: () => void;
}