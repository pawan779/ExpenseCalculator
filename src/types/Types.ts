import { categoryBG } from "../../theme";

export type VisitedPlacesProps = {
  id: number;
  place: string;
  country: string;
};

export type ExpenseProps = {
  id: number;
  title: string;
  amount: string;
  category: Category;
};

export type Category = keyof typeof categoryBG;

export type CategoryProps = {
  title: string;
  value: string;
};

export type CatProps = {
  label: string;
  value: number;
  color: string;
};
