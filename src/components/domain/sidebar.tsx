import { Box } from "@yamada-ui/react";
import { keyframes } from "@emotion/react";
import { useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const SideBar = memo(() => {
	const navigate = useNavigate();
	const [isVisible, setIsVisible] = useState(false);

	// Add event listener for mouse move
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (e.clientX < 100) {
				setIsVisible(true);
			} else if (e.clientX > 200) {
				setIsVisible(false);
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<>
			{isVisible && (
				<Box
					bg={"gray.900"}
					p={4}
					pt={16}
					height={"100vh"}
					width={"12rem"}
					animation={`${fadeIn} 0.1s ease-in-out`}
				>
					<Box p={1} onClick={() => navigate("/")}>
						支出一覧
					</Box>
					<Box p={1} onClick={() => navigate("/budget")}>
						予算管理
					</Box>
					<Box p={1} onClick={() => navigate("/category")}>
						カテゴリ管理
					</Box>
				</Box>
			)}
		</>
	);
});
