import { Geist, Instrument_Serif } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
	weight: "400",
});

export { geist, instrumentSerif };
