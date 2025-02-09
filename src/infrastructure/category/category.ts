export class Category {
	id: string;
	name: string;
	isPeriodic: boolean;
	isFixedCost: boolean;

	constructor(
		id: string,
		name: string,
		isPeriodic: boolean,
		isFixedCost: boolean,
	) {
		this.id = id;
		this.name = name;
		this.isPeriodic = isPeriodic;
		this.isFixedCost = isFixedCost;
	}
}
