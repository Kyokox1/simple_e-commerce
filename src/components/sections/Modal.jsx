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
	Text
} from "@chakra-ui/react";
import React from "react";

export const ModalCart = ({
	isOpen,
	onClose,
	product,
	setProduct,
	initialProduct
}) => {
	const handleDelete = () => {
		setProduct(initialProduct);
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent py="15px">
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
		</>
	);
};
