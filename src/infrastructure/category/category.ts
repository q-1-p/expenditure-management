export class Category {
	id: string;
	name: string;
	isPeriodic: boolean;
	isFixedCost: boolean;
	budgetaryAmount: number;

	constructor(
		id: string,
		name: string,
		isPeriodic: boolean,
		isFixedCost: boolean,
		budgetaryAmount: number,
	) {
		this.id = id;
		this.name = name;
		this.isPeriodic = isPeriodic;
		this.isFixedCost = isFixedCost;
		this.budgetaryAmount = budgetaryAmount;
	}
}
