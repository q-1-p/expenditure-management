import { atom } from "jotai";
import type { ExpenditureHistory } from "../infrastructure/expenditure/expenditure-history";

export const expenditureHistoriesAtom = atom<ExpenditureHistory[]>();
