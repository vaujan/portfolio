import { Geist, Instrument_Serif, EB_Garamond } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
	weight: "400",
});
const garamond = EB_Garamond({ subsets: ["latin"] });

export { geist, instrumentSerif, garamond };
