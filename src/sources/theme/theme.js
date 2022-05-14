import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	colors: {
		primary: {
			orange: "hsl(26, 100%, 55%)",
			paleOrange: "hsl(25, 100%, 94%)"
		},
		secondary: {
			VeryDarkBlue: "hsl(220, 13%, 13%)",
			DarkGrayishBlue: "hsl(219, 9%, 45%)",
			GrayishBlue: "hsl(220, 14%, 75%)",
			LightGrayishBlue: "hsl(223, 64%, 98%)",
			White: "hsl(0, 0%, 100%)",
			Black_75: "hsl(0, 0%, 0%)"
		}
	},
	breakpoints: {
		sm: "320px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
		"2xl": "1536px"
	}
});

// export const theme = extendTheme({ colors });
