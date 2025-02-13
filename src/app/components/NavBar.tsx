"use client";

import { usePathname } from "next/navigation";

export function NavBar() {
	const path = usePathname();

	const navigation = [
		{ page: "home", href: "/" },
		{ page: "blog", href: "/blog" },
		{ page: "projects", href: "/projects" },
		{ page: "contacts", href: "/contacts" },
	];

	const nav = navigation.map((link) => {
		return (
			<a
				className={
					"font-semibold hover:underline" + path == link.href
						? "text-blue-500"
						: ""
				}
				key={link.href + link.page}
				href={link.href}
			>
				{link.page}
			</a>
		);
	});
	return (
		<header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-3 ">
			<div className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
				<a
					className="font-[family-name:var(--font-instrument-serif)] text-2xl font-semibold"
					href="#"
					aria-label="Brand"
				>
					Head
				</a>
				<div className="flex  font-[family-name:var(--font-inter-serif)] flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
					{nav}
					<button
						className="p-2 border hover:font-semibold "
						onClick={() => {
							console.log(path);
						}}
					>
						get pathname
					</button>
				</div>
			</div>
		</header>
	);
}
