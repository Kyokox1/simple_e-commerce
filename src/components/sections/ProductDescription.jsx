import React from "react";
import {
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	Image,
	Tag,
	Text
} from "@chakra-ui/react";

export const ProductDescription = ({
	cart,
	countCart,
	count,
	setProduct,
	onOpen,
	setCount
}) => {
	const handleProduct = () => {
		setProduct((prevProduct) => ({
			...prevProduct,
			name: `${seasonRandom} Limited Edition...`,
			quantity: count + prevProduct.quantity,
			price: 125
		}));
		// setProduct({...product, name:"Autumn Limited Edition...",quantity:count,price:125,total:product.price*product.quantity})
		onOpen();
		setCount(0);
	};

	// ?Estaciones Random

	const seasons = ["Autumn", "Spring", "Summer", "Winter"];
	const seasonRandom =
		seasons[Math.floor(Math.random() * seasons.length)];

	return (
		<Flex direction="column" p="15px" pb="70px" gap="25px">
			<Text
				as="h2"
				fontSize="lg"
				fontWeight="bold"
				letterSpacing="2px"
				color="primary.orange"
			>
				SNEAKERS COMPANY
			</Text>
			<Heading as="h1" fontSize="2.7rem">
				Fall Limited Edition <br /> Sneakers
			</Heading>
			<Text
				as="p"
				fontSize="lg"
				fontWeight="semibold"
				color="secondary.DarkGrayishBlue"
			>
				These low-profile sneakers are your perfect casual wear
				companion. Featuring a durable rubber outer sole, they ll
				withstand everything the weather can offer.
			</Text>
			{/* Price Product */}
			<HStack fontWeight="bold" justify="space-between">
				<Text fontSize="3xl">
					{" "}
					$125.00{" "}
					<Tag
						verticalAlign={3}
						ml="5px"
						fontSize="lg"
						fontWeight="bold"
						color="primary.orange"
						colorScheme="orange"
					>
						50%
					</Tag>{" "}
				</Text>

				<Text
					fontSize="xl"
					alignSelf="flex-start"
					color="secondary.GrayishBlue"
					textDecor="line-through"
				>
					$250.00
				</Text>
			</HStack>
			<Flex direction="column" gap="15px" align="center">
				{/* Buttons add and sustract Cart-count */}
				<HStack
					justify="space-between"
					w="100%"
					maxW="500px"
					bgColor="gray.100"
					borderRadius="5px"
				>
					<Box
						as="button"
						onClick={() => countCart("sustract")}
						h="40px"
						w="50px"
						bgImage="./assets/images/icon-minus.svg"
						bgRepeat="no-repeat"
						bgPos="center"
					></Box>
					<Text fontWeight="bold" fontSize="2xl">
						{count}
					</Text>
					<Box
						as="button"
						onClick={() => countCart("add")}
						h="40px"
						w="50px"
						bgImage="./assets/images/icon-plus.svg"
						bgRepeat="no-repeat"
						bgPos="center"
					></Box>
				</HStack>
				{/* Button Add to Cart */}
				<Button
					onClick={handleProduct}
					py="20px"
					w="100%"
					maxW="500px"
					fontSize="2xl"
					leftIcon={
						<Image
							filter={"brightness(500%)"}
							h="15px"
							src={cart}
							mr="10px"
							alt="cart"
						/>
					}
					color="white"
					colorScheme="orange"
				>
					Add to Cart
				</Button>
			</Flex>
		</Flex>
	);
};
