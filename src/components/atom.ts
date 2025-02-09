import { atom } from "jotai";
import type { ExpenditureHistory } from "../infrastructure/expenditure/expenditure-history";
import type { Category } from "../infrastructure/category/category";

export const expenditureHistoriesAtom = atom<ExpenditureHistory[]>();
export const categoriesAtom = atom<Category[]>();
