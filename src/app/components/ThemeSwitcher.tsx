"use client";
import clsx from "clsx";
import { useState } from "react";

const ThemeSwitcher = () => {
	const [isDark, setIsDark] = useState(false);

	const handleToggleDarkMode = () => {
		setIsDark(!isDark);

		const html = document.querySelector("html");
		if (html) html.classList.toggle("dark", !isDark);
	};

	return (
		<button
			onClick={handleToggleDarkMode}
			className={clsx(
				"font-medium text-secondary-500 dark:text-secondary-400 text-sm"
			)}
		>
			Switch to {isDark ? "light" : "dark"}
		</button>
	);
};

export default ThemeSwitcher;
