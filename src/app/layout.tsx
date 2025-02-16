import { geist } from "./fonts";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import NavBar from "./components/NavBar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body className="flex flex-col items-center justify-center text-secondary-900 bg-secondary-50 dark:bg-secondary-900 dark:text-secondary-100 ">
				<NavBar />
				<div className={`${geist.className} antialiased flex justify-center`}>
					<main className="flex max-w-5xl items-center justify-items-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-inter)]">
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}
