"use client";
import { useState } from "react";
import Button from "./Button";

const ThemeSwitcher = () => {
	const [isDark, setIsDark] = useState(true);

	const handleToggleDarkMode = () => {
		setIsDark(!isDark);

		const html = document.querySelector("html");
		if (html) html.classList.toggle("dark", !isDark);
	};

	return (
		<Button onClick={handleToggleDarkMode}>
			Switch to {isDark ? "light" : "dark"}
		</Button>
	);
};

export default ThemeSwitcher;
