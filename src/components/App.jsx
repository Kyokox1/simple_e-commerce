import React, { useEffect, useState } from "react";
import { Box, Stack, useDisclosure } from "@chakra-ui/react";

import cart from "../../public/assets/images/icon-cart.svg";

import { Header } from "./sections/Header";
import { ProductCarousel } from "./sections/ProductCarousel";
import { ProductDescription } from "./sections/ProductDescription";
import { Modals } from "./sections/ModalCartAndProduct";

import "../styles/reset.scss";

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

	// ? Contenido del Modal con almacenamiento en el LocalStorage
	const initialProduct = {
		name: "",
		quantity: 0,
		price: 0
	};

	const [product, setProduct] = useState(
		() => JSON.parse(localStorage.getItem("product")) || initialProduct
	);

	useEffect(() => {
		localStorage.setItem("product", JSON.stringify(product));
	}, [product]);

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
					<ProductCarousel
						carousel={carousel}
						setCarousel={setCarousel}
						slideCarousel={slideCarousel}
						openModalProduct={openModalProduct}
					/>

					{/* Description */}
					<ProductDescription
						cart={cart}
						countCart={countCart}
						count={count}
						onOpen={onOpen}
						setCount={setCount}
						setProduct={setProduct}
					/>
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
