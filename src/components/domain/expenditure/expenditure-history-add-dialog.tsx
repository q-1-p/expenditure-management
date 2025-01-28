import {
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	HStack,
	Text,
	Input,
	Spacer,
	RadioGroup,
	Radio,
	Button,
	Heading,
} from "@yamada-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface AddExpenditureModalProps {
	open: boolean;
	onClose: () => void;
}

export const ExpenditureHistoryAddDialog = ({
	open,
	onClose,
}: AddExpenditureModalProps) => {
	const { register, handleSubmit } = useForm();
	const [isFixedCost, setIsFixedCost] = useState("true");
	const [isVariableCost, setIsVariableCost] = useState("true");

	const onSubmit = (data: any) => {
		alert(data);
		// ここで送信処理を行う
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
					<HStack px={3}>
						<Text w={"5rem"}>金額</Text>
						<Input {...register("amount")} />
					</HStack>
					<HStack p={3}>
						<Text w={"5rem"}>日付</Text>
						<Input type="datetime-local" {...register("date")} />
					</HStack>
					<Spacer />
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
							<Radio value="true" {...register("isVariableCost")}>
								変動費
							</Radio>
							<Radio value="false" {...register("isVariableCost")}>
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
