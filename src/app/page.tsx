"use client";

import React from "react";
import Button from "./components/Button";
import { garamond } from "./fonts";

const Home: React.FC = () => {
	return (
		<section
			className={`
				flex flex-col gap-6 items-center justify-center h-fit`}
		>
			<h1 className={`${garamond.className} text-5xl font-semibold`}>
				Welcome to My Portfolio
			</h1>
			<p className="text-lg font-medium text-secondary-700 dark:text-secondary-300 mb-6">
				This is a simple starting point for your portfolio.
			</p>
			<Button onClick={() => alert("Hello world")}>Click Me</Button>
		</section>
	);
};

export default Home;
