import React from "react";

import { ModalCart } from "./ModalCart";
import { ModalProduct } from "./ModalProduct";

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

	return (
		// ?Modal Product
		<>
			{showModalProduct ? (
				<ModalProduct
					isOpen={isOpen}
					closeModalProduct={closeModalProduct}
				/>
			) : (
				// ? Modal Cart
				<ModalCart
					isOpen={isOpen}
					onClose={onClose}
					handleDelete={handleDelete}
					product={product}
				/>
			)}
		</>
	);
};
