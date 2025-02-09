import { Heading, IconButton, useDisclosure } from "@yamada-ui/react";
import { ExpenditureList } from "../domain/expenditure/expenditure-history-list";
import { BaseTemplate } from "../template/base.template";
import { PlusIcon } from "@yamada-ui/lucide";
import { ExpenditureHistoryAddDialog } from "../domain/expenditure/expenditure-history-add-dialog";

export const ExpenditureListPage = () => {
	const { open, onOpen, onClose } = useDisclosure();

	return (
		<>
			<BaseTemplate>
				<Heading pb={4}>支出一覧ページ</Heading>
				<ExpenditureList />
				<IconButton
					as="button"
					colorScheme={"primary"}
					variant={"outline"}
					size={"lg"}
					icon={<PlusIcon />}
					position={"absolute"}
					bottom={"4vh"}
					right={"4vw"}
					onClick={onOpen}
					aria-label="支出追加"
				/>
				<ExpenditureHistoryAddDialog open={open} onClose={onClose} />
			</BaseTemplate>
		</>
	);
};
