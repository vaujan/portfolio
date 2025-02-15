import { geist, instrumentSerif } from "./fonts";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import NavBar from "./components/NavBar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body className="flex flex-col items-center justify-center text-neutral-900 bg-blue-50 dark:bg-blue-800 dark:text-neutral-100 ">
				<NavBar />
				<div className={`${geist.className} antialiased flex justify-center`}>
					<div className="flex max-w-5xl items-center justify-items-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-inter)]">
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
