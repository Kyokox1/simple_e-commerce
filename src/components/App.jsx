import React, { useState } from "react";
import {
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	Image,
	Link,
	Tag,
	Text,
	useDisclosure
} from "@chakra-ui/react";

import cart from "../../public/assets/images/icon-cart.svg";
import avatar from "../../public/assets/images/image-avatar.png";

import { HamburgerButton } from "./items/HamburgerButton";

import "../styles/reset.scss";
import { ModalCart } from "./sections/Modal";

const App = () => {
	const [carousel, setCarousel] = useState(1);
	const [count, setCount] = useState(0);

	// ? Funcion para que funcione el carousel

	const slideCarousel = (direction) => {
		if (direction === "next") {
			if (carousel < 4)
				return setCarousel((prevCarousel) => prevCarousel + 1);
			if (carousel === 4) return setCarousel(1);
		}

		if (direction === "back") {
			if (carousel > 1)
				return setCarousel((prevCarousel) => prevCarousel - 1);
			if (carousel === 1) return setCarousel(4);
		}
	};

	// ? Funcion para el contador de objetos en el carrito

	const countCart = (addOrSustract) => {
		if (addOrSustract === "add") setCount((prevCount) => prevCount + 1);

		if (addOrSustract === "sustract" && count >= 1)
			setCount((prevCount) => prevCount - 1);
	};

	// ? Para activar el Modal
	const { isOpen, onOpen, onClose } = useDisclosure()

	// ? Contenido del Modal
	const initialProduct={
        name:"",
        quantity:0,
        price:0
    }

    const [product, setProduct] = useState(initialProduct);

    const handleProduct=()=>{
		setProduct(prevProduct=>({...prevProduct, name:`${seasonRandom} Limited Edition...`,quantity:count,price:125}))
		// setProduct({...product, name:"Autumn Limited Edition...",quantity:count,price:125,total:product.price*product.quantity})
		onOpen()
    }

	// ?Estaciones Random

	const seasons=["Autumn","Spring","Summer","Winter"]
	const seasonRandom = seasons[Math.floor(Math.random()*seasons.length)]

	return (
		<Box
			bgColor="secondary.LightGrayishBlue"
			fontFamily="Kumbh Sans, sans-serif"
		>
			{/* Header */}
			<Heading
				as="header"
				w="100%"
				h="10vh"
				maxW={{ base: "100%", md: "90%", lg: "80%" }}
				m="0 auto"
			>
				<HStack w="inherit" h="inherit">
					<HamburgerButton />
					<Box fontWeight="bold" fontSize="4xl" flex={3}>
						<Link href="#">sneakers</Link>
					</Box>
					<Flex flex={2} h="100%" align="center" justify="space-evenly">
						<Image
							onClick={onOpen}
							src={cart}
							alt="cart"
							h="40%"
							cursor="pointer"
							_hover={{ filter: "contrast(500%)" }}
						/>
						<Link h="50%">
							<Image src={avatar} alt="profile" h="100%" />
						</Link>
					</Flex>
				</HStack>
			</Heading>

			{/* Main */}
			<main>
				<Box>
					{/* Carousel */}
					<Box pos="relative" h="50vh" w="100%">
						<Image
							src={`./assets/images/image-product-${carousel}.jpg`}
							alt="Shoes"
							h="100%"
							w="100%"
							objectFit="cover"
							cursor="pointer"
						/>
						<Box
							as="button"
							onClick={() => slideCarousel("next")}
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
						<Flex direction="column" gap="15px">
							{/* Buttons add and sustract Cart-count */}
							<HStack
								justify="space-between"
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
				</Box>
			</main>

			<ModalCart isOpen={isOpen} onClose={onClose} product={product}  setProduct={setProduct} initialProduct={initialProduct} />
		</Box>
	);
};

export default App;
