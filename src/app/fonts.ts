import { Inter, Instrument_Serif } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const instrumentSerif = Instrument_Serif({
	weight: "400",
	variable: "--font-instrument-serif",
});

export { inter, instrumentSerif };
