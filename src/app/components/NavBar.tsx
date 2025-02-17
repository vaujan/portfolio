"use client";

// components/Nav.jsx

import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { geist } from "../fonts";
import clsx from "clsx";
import { usePathname } from "next/navigation";

function Nav() {
	const [isHidden, setIsHidden] = useState(false);
	const [lastScrollTop, setLastScrollTop] = useState(0);
	const path = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			const st = window.pageYOffset || document.documentElement.scrollTop;
			if (st > lastScrollTop) {
				// Scroll Down
				setIsHidden(true);
			} else {
				// Scroll Up
				setIsHidden(false);
			}
			setLastScrollTop(st <= 0 ? 0 : st); // For Mobile or negative scrolling
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollTop]);

	const navigations = [
		{ href: "/", page: "Home" },
		{ href: "/about", page: "About" },
		{ href: "/blog", page: "Blog" },
	];

	return (
		<nav
			className={`${
				geist.className
			} fixed top-0 w-full border-b border-secondary-100 z-50 transition-transform duration-300 ${
				isHidden ? "-translate-y-full" : "translate-y-0"
			}`}
		>
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex justify-between h-9">
					<div className="flex">
						<div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
							{/* Static Links */}
							{navigations.map((link) => (
								<a
									href={link.href}
									className={clsx(
										"inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-secondary-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-secondary-700 hover:border-secondary-500 focus:outline-none focus:text-secondary-700 focus:border-secondary-300",
										path == link.href &&
											"border-secondary-500 text-neutral-700 "
									)}
									key={link.href}
								>
									{link.page}
								</a>
							))}
						</div>
					</div>

					<div className="hidden sm:ml-6 sm:flex sm:items-center">
						<ThemeSwitcher />{" "}
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
