import {
	Box,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	Stack
} from "@chakra-ui/react";
import React, { useState } from "react";

export const ModalProduct = ({ isOpen, closeModalProduct }) => {
    
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
				<ModalBody color="secondary.DarkGrayishBlue" bgColor="transparent">
					<Box pos="relative" h={{ base: "50vh", lg: "60vh" }} w="100%">
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
							top="50%"
							transform="translate(0,-50%)"
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
							top="50%"
							transform="translate(0,-50%)"
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
	);
};
