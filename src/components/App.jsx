import React, { useState } from "react";
import {
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	Image,
	Stack,
	Tag,
	Text,
	useDisclosure
} from "@chakra-ui/react";

import cart from "../../public/assets/images/icon-cart.svg";

import { Modals } from "./sections/ModalCartAndProduct";

import "../styles/reset.scss";
import { Header } from "./sections/Header";
// import { ModalProduct } from "./sections/ModalProduct";

const App = () => {
	const [carousel, setCarousel] = useState(1);
	const [count, setCount] = useState(0);

	// ? Funcion para que funcione el carousel Principal

	const slideCarousel = (direction) => {
		if (direction === "next") {
			if (carousel < 4)
				return setCarousel((prevCarousel) => prevCarousel + 1);
			else return setCarousel(1);
		}

		if (direction === "back") {
			if (carousel > 1)
				return setCarousel((prevCarousel) => prevCarousel - 1);
			else return setCarousel(4);
		}
	};

	// ? Funcion para el contador de objetos en el carrito

	const countCart = (addOrSustract) => {
		if (addOrSustract === "add" && count < 100)
			setCount((prevCount) => prevCount + 1);

		if (addOrSustract === "sustract" && count >= 1)
			setCount((prevCount) => prevCount - 1);
	};

	// ? Para activar el Modal
	const { isOpen, onOpen, onClose } = useDisclosure();

	// ? Contenido del Modal
	const initialProduct = {
		name: "",
		quantity: 0,
		price: 0
	};

	const [product, setProduct] = useState(initialProduct);

	const handleProduct = () => {
		setProduct((prevProduct) => ({
			...prevProduct,
			name: `${seasonRandom} Limited Edition...`,
			quantity: count,
			price: 125
		}));
		// setProduct({...product, name:"Autumn Limited Edition...",quantity:count,price:125,total:product.price*product.quantity})
		onOpen();
		setCount(0);
	};

	// ?Estaciones Random

	const seasons = ["Autumn", "Spring", "Summer", "Winter"];
	const seasonRandom = seasons[Math.floor(Math.random() * seasons.length)];

	// ?Modal Product
	const [showModalProduct, setShowModalProduct] = useState(false);

	const openModalProduct = () => {
		if (window.innerWidth >= 960) {
			setShowModalProduct(true);
			onOpen();
		}
	};

	return (
		<Box
			bgColor="secondary.LightGrayishBlue"
			fontFamily="Kumbh Sans, sans-serif"
			h={{ base: "auto", lg: "100vh" }}
		>
			{/* Header */}

			<Header cart={cart} product={product} onOpen={onOpen} />

			{/* Main */}
			<main>
				<Stack
					direction={{ base: "column", lg: "row" }}
					maxW={{ lg: "80%", xl: "70%" }}
					m="0 auto"
					pt={{ lg: "40px" }}
				>
					{/* Carousel */}
					<Box pos="relative" h={{ base: "50vh", lg: "60vh" }} w="100%">
						<Image
							src={`./assets/images/image-product-${carousel}.jpg`}
							alt="Shoes"
							onClick={openModalProduct}
							h="100%"
							w="100%"
							borderRadius={{ lg: "2xl" }}
							objectFit="cover"
							cursor="pointer"
						/>
						<Box
							as="button"
							onClick={() => slideCarousel("next")}
							display={{ lg: "none" }}
							pos="absolute"
							boxSize="30px"
							p="15px"
							zIndex="10"
							bgImage="./assets/images/icon-next.svg"
							bgColor="secondary.LightGrayishBlue"
							bgPos="center"
							borderRadius="50%"
							bgRepeat="no-repeat"
							bgSize="auto"
							top="calc(50% - 22px)"
							right="5%"
						></Box>
						<Box
							as="button"
							onClick={() => slideCarousel("back")}
							display={{ lg: "none" }}
							pos="absolute"
							boxSize="30px"
							p="15px"
							zIndex="10"
							bgImage="/assets/images/icon-previous.svg"
							bgColor="secondary.LightGrayishBlue"
							bgPos="center"
							borderRadius="50%"
							bgRepeat="no-repeat"
							bgSize="auto"
							top="calc(50% - 22px)"
							left="5%"
						></Box>
						{/* Tumbnail Desktop */}
						<Stack
							display={{ base: "none", lg: "flex" }}
							direction="row"
							spacing={8}
							pt="20px"
						>
							{[1, 2, 3, 4].map((num, i) => (
								<Box
									key={i}
									flex={1}
									borderRadius="2xl"
									overflow="hidden"
									border={
										carousel === num
											? "2px hsl(26, 100%, 55%) solid"
											: "2px transparent solid"
									}
								>
									<Image
										onClick={() => setCarousel(num)}
										src={`./assets/images/image-product-${num}-thumbnail.jpg`}
										alt="Tumbnails"
										h="100%"
										w="100%"
										filter={carousel === num && "opacity(50%)"}
										cursor="pointer"
										_hover={
											carousel !== num && { filter: "grayScale(60%)" }
										}
									/>
								</Box>
							))}
						</Stack>
					</Box>

					{/* Description */}
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
				</Stack>

				<Modals
					isOpen={isOpen}
					onClose={onClose}
					product={product}
					setProduct={setProduct}
					initialProduct={initialProduct}
					showModalProduct={showModalProduct}
					setShowModalProduct={setShowModalProduct}
				/>
			</main>
		</Box>
	);
};

export default App;
