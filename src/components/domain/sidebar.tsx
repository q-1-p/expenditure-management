import { Box, LinkBox } from "@yamada-ui/react";
import { keyframes } from "@emotion/react";
import { useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";

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
					py={16}
					height={"100vh"}
					width={"12rem"}
					animation={`${fadeIn} 0.1s ease-in-out`}
				>
					{routes.map((route) => (
						<>
							<LinkBox
								key={route.name}
								p={4}
								onClick={() => navigate(route.path)}
								_hover={{ bg: "gray.600" }} // ホバー時の背景色変更
							>
								{route.name}
							</LinkBox>
						</>
					))}
				</Box>
			)}
		</>
	);
});
