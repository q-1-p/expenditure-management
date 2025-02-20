export class ExpenditureHistory {
	id: string;
	name: string;
	categoryId: string;
	categoryName = "";
	amount: number;
	expendedAt: Date;

	constructor(
		id: string,
		name: string,
		categoryId: string,
		amount: number,
		expendedAt: Date,
	) {
		this.id = id;
		this.name = name;
		this.categoryId = categoryId;
		this.amount = amount;
		this.expendedAt = expendedAt;
	}
}
