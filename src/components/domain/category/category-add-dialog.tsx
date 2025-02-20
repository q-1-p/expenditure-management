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
	Radio,
	RadioGroup,
	Text,
} from "@yamada-ui/react";
import { useSetAtom } from "jotai";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { Category } from "../../../infrastructure/category/category";
import {
	addCategory,
	fetchCategories,
} from "../../../infrastructure/category/category-repository";
import { categoriesAtom } from "../../atom";

interface AddExpenditureModalProps {
	open: boolean;
	onClose: () => void;
}

export const CategoryAddDialog = ({
	open,
	onClose,
}: AddExpenditureModalProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Category>();
	const [isFixedCost, setIsFixedCost] = useState<string>("true");
	const [isVariableCost, setIsVariableCost] = useState<string>("true");
	const setCategories = useSetAtom(categoriesAtom);

	const onSubmit = async (category: Category) => {
		await addCategory(category);
		const categories = await fetchCategories();
		setCategories(categories);
		onClose();
	};

	return (
		<Modal open={open} size={"lg"} p={2}>
			<ModalHeader>
				<Heading as={"h3"} size={"md"} p={2}>
					カテゴリ追加
				</Heading>
			</ModalHeader>
			<ModalBody>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormControl invalid={!!errors.name} mb={4}>
						<HStack px={3}>
							<Text w={"5rem"}>名前</Text>
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
					<FormControl invalid={!!errors.budgetaryAmount} mb={4}>
						<HStack px={3}>
							<Text w={"5rem"}>予算</Text>
							<Input
								data-testid="budgetaryAmountEntryField"
								{...register("budgetaryAmount", {
									required: {
										value: true,
										message: "予算を入力してください",
									},
								})}
							/>
						</HStack>
						{errors.budgetaryAmount && (
							<Text color="danger" fontSize="sm" pl={3} mt={1}>
								{errors.budgetaryAmount.message}
							</Text>
						)}
					</FormControl>
					<RadioGroup
						p={3}
						value={isFixedCost.toString()}
						onChange={(value) => setIsFixedCost(value)}
					>
						<HStack>
							<Radio value="true" {...register("isFixedCost")}>
								定期
							</Radio>
							<Radio value="false" {...register("isFixedCost")}>
								不定期
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
								固定費
							</Radio>
							<Radio value="false" {...register("isPeriodic")}>
								変動費
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
