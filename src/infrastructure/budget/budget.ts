export class Budget {
	id: string;
	name: string;
	isPeriodic: boolean;
	isFixedCost: boolean;
	season: Date;

	constructor(
		id: string,
		name: string,
		isPeriodic: boolean,
		isFixedCost: boolean,
		season: Date,
	) {
		this.id = id;
		this.name = name;
		this.isPeriodic = isPeriodic;
		this.isFixedCost = isFixedCost;
		this.season = season;
	}
}
