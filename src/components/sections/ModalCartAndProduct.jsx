import {
	Box,
	Button,
	HStack,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	Stack
} from "@chakra-ui/react";
import React, { useState } from "react";

export const Modals = ({
	isOpen,
	onClose,
	product,
	setProduct,
	initialProduct,
	showModalProduct,
	setShowModalProduct
}) => {
	// ?Modal Cart
	const handleDelete = () => {
		setProduct(initialProduct);
	};

	// ?Modal Product
	const closeModalProduct = () => {
		setShowModalProduct(false);
		onClose();
	};

	const [carouselModal, setcarouselModal] = useState(1);

	// ?Funcion para que funcione el Carousel del Modal.

	const slideCarouselModal = (direction) => {
		if (direction === "next") {
			if (carouselModal < 4)
				return setcarouselModal((prevCarousel) => prevCarousel + 1);
			else return setcarouselModal(1);
		}

		if (direction === "back") {
			if (carouselModal > 1)
				return setcarouselModal((prevCarousel) => prevCarousel - 1);
			else return setcarouselModal(4);
		}
	};

	return (
		// ?Modal Product
		<>
			{showModalProduct ? (
				<Modal isOpen={isOpen} onClose={closeModalProduct} size={"3xl"}>
					<ModalOverlay />
					<ModalContent pt="40px" bgColor="transparent">
						<ModalCloseButton
							onClick={closeModalProduct}
							fontSize="2xl"
							_focus={{ border: "none" }}
							color="white"
							_hover={{ color: "orange" }}
						/>
						<ModalBody
							color="secondary.DarkGrayishBlue"
							bgColor="transparent"
						>
							<Box
								pos="relative"
								h={{ base: "50vh", lg: "60vh" }}
								w="100%"
							>
								<Image
									src={`./assets/images/image-product-${carouselModal}.jpg`}
									alt="Shoes"
									h="100%"
									w="100%"
									borderRadius={{ lg: "2xl" }}
									objectFit="cover"
									cursor="pointer"
								/>
								<Box
									as="button"
									onClick={() => slideCarouselModal("next")}
									pos="absolute"
									boxSize="45px"
									p="15px"
									zIndex="10"
									bgImage="./assets/images/icon-next.svg"
									bgColor="secondary.LightGrayishBlue"
									bgPos="center center"
									borderRadius="50%"
									bgRepeat="no-repeat"
									bgSize="auto"
									top="calc(50% - 22px)"
									right="-5%"
									_hover={{
										bgColor: "#FFBF0090",
										border: "2px orange solid"
									}}
								></Box>
								<Box
									as="button"
									onClick={() => slideCarouselModal("back")}
									pos="absolute"
									boxSize="45px"
									p="15px"
									zIndex="10"
									bgImage="/assets/images/icon-previous.svg"
									bgColor="secondary.LightGrayishBlue"
									bgPos="center center"
									borderRadius="50%"
									bgRepeat="no-repeat"
									bgSize="auto"
									top="calc(50% - 22px)"
									left="-5%"
									_hover={{
										bgColor: "#FFBF0090",
										border: "2px orange solid"
									}}
								></Box>
							</Box>
						</ModalBody>
						<ModalFooter>
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
											carouselModal === num
												? "2px hsl(26, 100%, 55%) solid"
												: "2px transparent solid"
										}
									>
										<Image
											onClick={() => setcarouselModal(num)}
											src={`./assets/images/image-product-${num}-thumbnail.jpg`}
											alt="Tumbnails"
											h="100%"
											w="100%"
											filter={carouselModal === num && "grayScale(60%)"}
											cursor="pointer"
											_hover={
												carouselModal !== num && {
													filter: "grayScale(25%)"
												}
											}
										/>
									</Box>
								))}
							</Stack>
						</ModalFooter>
					</ModalContent>
				</Modal>
			) : (
				// ? Modal Cart
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay display={{ base: "block", lg: "none" }} />
					<ModalContent
						py="15px"
						pos="absolute"
						top={{ lg: "15px", "2xl": "50px" }}
						right={{ lg: "10%", xl: "15%", "2xl": "20%" }}
						boxShadow="0px 5px 15px #00000060"
					>
						<ModalHeader
							pt="0"
							pb="20px"
							fontWeight="bold"
							fontSize="3xl"
							borderBottom="2px hsl(220, 14%, 90%) solid"
						>
							Cart
						</ModalHeader>
						<ModalCloseButton />

						{product.quantity === 0 ? (
							// ? Modal Cart Empty
							<ModalBody textAlign="center" py="50px">
								<Text
									fontSize="2xl"
									fontWeight="bold"
									color="secondary.DarkGrayishBlue"
								>
									Your Cart is empty.
								</Text>
							</ModalBody>
						) : (
							// ? Modal Cart with products
							<>
								<ModalBody color="secondary.DarkGrayishBlue">
									<HStack>
										<Box
											flex="1"
											h="50px"
											borderRadius="lg"
											overflow="hidden"
										>
											<Image
												src="./assets/images/image-product-1-thumbnail.jpg"
												alt="ShoesCart"
												h="100%"
											></Image>
										</Box>
										<Box flex="3" fontSize="xl">
											<Text as="h3">{product.name}</Text>
											<Text>
												{`$${product.price.toFixed(2)} x ${
													product.quantity
												}`}{" "}
												<Text
													as="span"
													fontWeight="bold"
													color="black"
												>{`$${(product.quantity * product.price).toFixed(
													2
												)}`}</Text>
											</Text>
										</Box>
										<Box
											as="button"
											onClick={handleDelete}
											flex="1"
											h="20px"
											bgImage="./assets/images/icon-delete.svg"
											bgRepeat="no-repeat"
											bgPos="center"
											cursor="pointer"
										></Box>
									</HStack>
								</ModalBody>

								<ModalFooter mt="10px">
									<Button
										colorScheme="orange"
										m="0 auto"
										py="20px"
										w="95%"
										fontSize="2xl"
										onClick={onClose}
									>
										Checkout
									</Button>
								</ModalFooter>
							</>
						)}
					</ModalContent>
				</Modal>
			)}
		</>
	);
};
