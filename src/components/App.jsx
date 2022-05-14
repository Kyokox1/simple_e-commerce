import { Flex, Heading, HStack, Image, Link } from "@chakra-ui/react";
import React from "react";

import cart from "../../public/assets/images/icon-cart.svg";
import avatar from "../../public/assets/images/image-avatar.png";

import { HamburgerButton } from "./items/HamburgerButton";

import "../styles/reset.scss";

const App = () => {
	return (
		<>
			<Heading
				as="header"
				w="100%"
				h="10vh"
				maxW={{ base: "100%", md: "90%", lg: "80%" }}
				m="0 auto"
				bg="orange"
			>
				<HStack w="inherit" h="inherit">
					<HamburgerButton />
					<Link fontWeight="bold" fontSize="4xl" href="#" flex={3}>
						sneakers
					</Link>
					<Flex flex={2} h="100%" align="center" justify="space-evenly">
						<Image src={cart} alt="cart" h="40%" />
						<Image src={avatar} alt="profile" h="50%" />
					</Flex>
				</HStack>
			</Heading>
		</>
	);
};

export default App;
