import {
	Button,
	FormControl,
	HStack,
	Heading,
	Input,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	Option,
	Radio,
	RadioGroup,
	Select,
	Text,
} from "@yamada-ui/react";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import type { Category } from "../../../infrastructure/category/category";
import { fetchCategories } from "../../../infrastructure/category/category-repository";
import type { ExpenditureHistory } from "../../../infrastructure/expenditure/expenditure-history";
import {
	addExpenditureHistory,
	fetchExpenditureHistories,
} from "../../../infrastructure/expenditure/expenditure-repository";
import { expenditureHistoriesAtom } from "../../atom";

interface AddExpenditureModalProps {
	open: boolean;
	onClose: () => void;
}

export const ExpenditureHistoryAddDialog = ({
	open,
	onClose,
}: AddExpenditureModalProps) => {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ExpenditureHistory>();
	const [isFixedCost, setIsFixedCost] = useState("true");
	const [isVariableCost, setIsVariableCost] = useState("true");
	const setExpenditureHistories = useSetAtom(expenditureHistoriesAtom);
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		fetchCategories().then((data) => setCategories(data));
	}, []);

	const onSubmit = async (expenditureHistory: ExpenditureHistory) => {
		expenditureHistory.categoryId ??= crypto.randomUUID(); //テスト時にしか発生しないエラーを回避するためのコード
		await addExpenditureHistory(expenditureHistory);
		const histories = await fetchExpenditureHistories();
		setExpenditureHistories(histories);
		onClose();
	};

	return (
		<Modal open={open} size={"lg"} p={2}>
			<ModalHeader>
				<Heading as={"h3"} size={"md"} p={2}>
					支出履歴追加
				</Heading>
			</ModalHeader>
			<ModalBody>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormControl invalid={!!errors.name} mb={4}>
						<HStack px={3}>
							<Text w={"6rem"}>名前</Text>
							<Input
								data-testid="nameEntryField"
								{...register("name", {
									required: {
										value: true,
										message: "名前を入力してください",
									},
								})}
							/>
						</HStack>
						{errors.name && (
							<Text color="danger" fontSize="sm" pl={3} mt={1}>
								{errors.name.message}
							</Text>
						)}
					</FormControl>
					<FormControl mb={4}>
						<HStack px={3}>
							<Text w={"6rem"}>カテゴリ</Text>
							<Controller
								control={control}
								name="categoryId"
								render={({ field }) => (
									<Select
										defaultValue={categories.at(0)?.id ?? ""}
										data-testid="categorySelectField"
										{...field}
									>
										{categories.map((category) => (
											<Option key={category.id} value={category.id}>
												{category.name}
											</Option>
										))}
									</Select>
								)}
							/>
						</HStack>
					</FormControl>
					<FormControl invalid={!!errors.amount} mb={4}>
						<HStack px={3}>
							<Text w={"6rem"}>金額</Text>
							<Input
								type="number"
								data-testid="amountEntryField"
								{...register("amount", {
									required: {
										value: true,
										message: "金額を入力してください",
									},
									min: {
										value: 0,
										message: "0以上の値を入力してください",
									},
								})}
							/>
						</HStack>
						{errors.amount && (
							<Text color="danger" fontSize="sm" pl={3} mt={1}>
								{errors.amount.message}
							</Text>
						)}
					</FormControl>
					<HStack px={3}>
						<Text w={"6rem"}>日付</Text>
						<Input
							type="datetime-local"
							data-testid="dateEntryField"
							{...register("expendedAt", {
								required: {
									value: true,
									message: "日付を入力してください",
								},
							})}
						/>
					</HStack>
					<br />
					<RadioGroup
						p={3}
						value={isFixedCost.toString()}
						onChange={(value) => setIsFixedCost(value)}
					>
						<HStack>
							<Radio value="true" {...register("isFixedCost")}>
								固定費
							</Radio>
							<Radio value="false" {...register("isFixedCost")}>
								非固定費
							</Radio>
						</HStack>
					</RadioGroup>
					<RadioGroup
						p={3}
						value={isVariableCost.toString()}
						onChange={(value) => setIsVariableCost(value)}
					>
						<HStack>
							<Radio value="true" {...register("isPeriodic")}>
								変動費
							</Radio>
							<Radio value="false" {...register("isPeriodic")}>
								非変動費
							</Radio>
						</HStack>
					</RadioGroup>
				</form>
			</ModalBody>
			<ModalFooter>
				<Button variant="ghost" onClick={onClose}>
					閉じる
				</Button>
				<Button colorScheme="primary" onClick={handleSubmit(onSubmit)}>
					追加
				</Button>
			</ModalFooter>
		</Modal>
	);
};
