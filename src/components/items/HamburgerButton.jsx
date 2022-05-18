import React, { useRef } from "react";
import {
	Box,
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
	const btnRef = useRef();

	const Link = styled.a`
		padding-top: 10%;
		padding-left: 40px;
		height: 100%;
		width: 100%;
		flex: 1;
	`;

	return (
		<>
			<Box
				as="Button"
				ref={btnRef}
				onClick={onOpen}
				display={{ base: "block", lg: "none" }}
				variant="ghost"
				p="15px"
			>
				<Image src={menu} w="20px" />
			</Box>
			<Drawer
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				finalFocusRef={btnRef}
				size="sm"
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton
						fontSize="20px"
						_focus={{ outline: "none" }}
					/>
					<DrawerBody pt="12vh" px="0" fontSize="2rem" fontWeight={"bold"}>
						<VStack as="nav" height="55vh">
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
