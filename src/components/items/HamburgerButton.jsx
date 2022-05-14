import React from "react";
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Image,
	useDisclosure,
	VStack
} from "@chakra-ui/react";
import styled from "@emotion/styled";

import menu from "../../../public/assets/images/icon-menu.svg";

export const HamburgerButton = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	const Link = styled.a`
		padding-top: 10%;
		padding-left: 40px;
		height: 100%;
		width: 100%;
		flex: 1;
	`;

	return (
		<>
			<Button
				_focus={{ outline: "none" }}
				ref={btnRef}
				variant="ghost"
				onClick={onOpen}
			>
				<Image src={menu} w="20px" />
			</Button>
			<Drawer
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton
						fontSize="20px"
						_focus={{ outline: "none" }}
					/>
					<DrawerBody pt="12vh" px="0" fontSize="2rem" fontWeight={"bold"}>
						<VStack height="55vh">
							<Link href="#">Collections</Link>
							<Link href="#">Men</Link>
							<Link href="#">Women</Link>
							<Link href="#">About</Link>
							<Link href="#">Contact</Link>
						</VStack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};
