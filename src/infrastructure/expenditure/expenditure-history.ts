export class ExpenditureHistory {
	id: string;
	name: string;
	categoryId: string;
	amount: number;
	isPeriodic: boolean;
	isFixedCost: boolean;
	expendedAt: Date;

	constructor(
		id: string,
		name: string,
		categoryId: string,
		amount: number,
		isPeriodic: boolean,
		isFixedCost: boolean,
		expendedAt: Date,
	) {
		this.id = id;
		this.name = name;
		this.categoryId = categoryId;
		this.amount = amount;
		this.isPeriodic = isPeriodic;
		this.isFixedCost = isFixedCost;
		this.expendedAt = expendedAt;
	}
}
