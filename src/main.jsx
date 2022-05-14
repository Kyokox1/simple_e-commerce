import React, { StrictMode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";

import { theme } from "./sources/theme/theme";

import App from "./components/App";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</StrictMode>
);
