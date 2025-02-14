import { inter, instrumentSerif } from "./fonts";
import "./globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body className={`${inter.className} antialiased flex justify-center`}>
				<div className="flex max-w-5xl items-center justify-items-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-inter)]">
					{children}
				</div>
			</body>
		</html>
	);
}
