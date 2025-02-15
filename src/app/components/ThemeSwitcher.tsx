"use client";
import { Button, Theme } from "@radix-ui/themes";
import { useState } from "react";

const ThemeSwitcher = () => {
	const [isDark, setIsDark] = useState(true);

	const handleToggleDarkMode = () => {
		setIsDark(!isDark);

		const html = document.querySelector("html");
		if (html) html.classList.toggle("dark", !isDark);
	};

	return (
		<Button variant="soft" size="1" onClick={handleToggleDarkMode}>
			Switch to {isDark ? "light" : "dark"}
		</Button>
	);
};

export default ThemeSwitcher;
