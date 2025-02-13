import { inter, instrumentSerif } from "./fonts";
import PrelineScript from "./PrelineScript";
import { NavBar } from "./components/NavBar";
import "./globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
			>
				<NavBar />
				<main className="w-full max-w-[960px] mx-auto py-2 px-4 sm:flex sm:items-center sm:justify-between bg-white/5 min-h-screen">
					{children}
				</main>
			</body>
			<PrelineScript />
		</html>
	);
}
