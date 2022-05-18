import React from "react";
import {
	Box,
	Flex,
	Heading,
	HStack,
	Image,
	Link,
	Stack,
	Text
} from "@chakra-ui/react";

import { HamburgerButton } from "../items/HamburgerButton";

import avatar from "../../../public/assets/images/image-avatar.png";

export const Header = ({ product, cart, onOpen }) => {
	return (
		<Heading
			as="header"
			w="100%"
			h="10vh"
			maxW={{ base: "100%", md: "90%", lg: "80%", xl: "75%" }}
			m="0 auto"
			borderBottom={{ lg: "1px hsl(220, 14%, 90%)  solid" }}
		>
			<HStack w="inherit" h="inherit">
				<HamburgerButton />
				<Box fontWeight="bold" fontSize="4xl" flex={{ base: 3, lg: 1 }}>
					<Link href="#">sneakers</Link>
				</Box>
				{/* Nav Desktop */}
				<Stack
					h="100%"
					w="40%"
					display={{ base: "none", lg: "flex" }}
					direction="row"
					flex={4}
					spacing={10}
					pl="15px"
					pr="20%"
					fontSize="xl"
					color="secondary.DarkGrayishBlue"
					fontWeight={500}
				>
					{["Collections", "Men", "Women", "About", "Contact"].map(
						(el, i) => (
							<Link
								flex="1"
								key={i}
								href="#"
								h="100%"
								display="flex"
								alignItems="center"
								justifyContent="center"
								borderBottom="2px transparent solid"
								_hover={{
									color: "black",
									borderBottom: "2px orange solid"
								}}
								_focus={{
									color: "black",
									borderBottom: "2px orange solid"
								}}
							>
								{el}
							</Link>
						)
					)}
				</Stack>

				<Flex flex={2} h="100%" align="center" justify="space-evenly">
					<Box pos="relative">
						<Text
							as="span"
							display={product.quantity > 0 ? "block" : "none"}
							pos="absolute"
							top="-6px"
							left="10px"
							px="7px"
							py="0"
							fontSize="lg"
							textAlign="center"
							color="white"
							bgColor="primary.orange"
							borderRadius="30px"
							zIndex="100"
						>
							{product.quantity}
						</Text>
						<Image
							onClick={onOpen}
							src={cart}
							alt="cart"
							h="40%"
							cursor="pointer"
							filter={product.quantity > 0 && "contrast(600%)"}
							_hover={{ filter: "contrast(500%)" }}
						/>
					</Box>
					<Link h="50%">
						<Image src={avatar} alt="profile" h="100%" />
					</Link>
				</Flex>
			</HStack>
		</Heading>
	);
};
