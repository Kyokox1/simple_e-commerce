import React from "react";
import { Box, Image, Stack } from "@chakra-ui/react";

export const ProductCarousel = ({
	carousel,
	openModalProduct,
	slideCarousel,
	setCarousel
}) => {
	return (
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
				top="50%"
				transform="translate(0,-50%)"
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
				top="50%"
				transform="translate(0,-50%)"
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
							_hover={carousel !== num && { filter: "grayScale(60%)" }}
						/>
					</Box>
				))}
			</Stack>
		</Box>
	);
};
