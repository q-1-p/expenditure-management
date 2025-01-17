export class ExpenditureHistory {
	id: string;
	name: string;
	isPeriodic: boolean;
	isFixedCost: boolean;
	expendedAt: Date;

	constructor(
		id: string,
		name: string,
		isPeriodic: boolean,
		isFixedCost: boolean,
		expendedAt: Date,
	) {
		this.id = id;
		this.name = name;
		this.isPeriodic = isPeriodic;
		this.isFixedCost = isFixedCost;
		this.expendedAt = expendedAt;
	}
}
