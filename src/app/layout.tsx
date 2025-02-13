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
				<main className="flex items-center justify-items-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-inter)]"></main>
				{children}
			</body>
			<PrelineScript />
		</html>
	);
}
