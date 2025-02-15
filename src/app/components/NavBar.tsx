"use client";

// components/Nav.jsx

import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Image from "next/image";
import { geist, instrumentSerif } from "../fonts";

function Nav() {
	const [isHidden, setIsHidden] = useState(false);
	const [lastScrollTop, setLastScrollTop] = useState(0);

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

	return (
		<nav
			className={`${
				geist.className
			} fixed top-0 w-full z-50 transition-transform duration-300 ${
				isHidden ? "-translate-y-full" : "translate-y-0"
			}`}
		>
			<div className="bg-neutral-100">
				<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="flex justify-between h-9">
						<div className="flex">
							{/* Your Logo or Brand Name */}
							<div className="flex items-center flex-shrink-0">
								<Image
									width={32}
									height={32}
									src={"naval.svg"}
									alt="Naval Ravikant's avatar"
								/>
							</div>
							<div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
								{/* Static Links */}
								<a
									href="#"
									className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
								>
									Home
								</a>
								<a
									href="#"
									className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
								>
									About
								</a>
							</div>
						</div>

						<div className="hidden sm:ml-6 sm:flex sm:items-center">
							<ThemeSwitcher />{" "}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
