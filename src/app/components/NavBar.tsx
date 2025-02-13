"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export function NavBar() {
	const path = usePathname();

	const navigation = [
		{ page: "home", href: "/" },
		{ page: "blog", href: "/blog" },
		{ page: "projects", href: "/projects" },
		{ page: "contacts", href: "/contacts" },
	];

	const nav = navigation.map((link) => {
		const selected = path === link.href;
		return (
			<a
				className={
					"font-semibold hover:underline " +
					(selected ? "text-blue-500 underline underline-offset-[22px]" : "")
				}
				key={link.href + link.page}
				href={link.href}
				aria-selected={selected}
			>
				{link.page}
			</a>
		);
	});

	return (
		<header className="w-full max-w-[960px] mx-auto py-2 px-4 sm:flex sm:items-center sm:justify-between">
			{/* Logo, left side */}
			<a
				className="font-[family-name:var(--font-instrument-serif)] text-2xl font-semibold"
				href="#"
				aria-label="Brand"
			>
				Head
			</a>

			{/* Nav Items, right sides */}
			<div className="flex font-[family-name:var(--font-inter)] flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
				{nav}

				{/* Get path */}
				<button
					className="p-2 border hover:font-semibold "
					onClick={() => {
						console.log(path);
					}}
				>
					get pathname
				</button>
			</div>
		</header>
	);
}
