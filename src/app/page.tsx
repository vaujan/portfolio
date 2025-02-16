"use client";

import React from "react";
import Button from "./components/Button";

const Home: React.FC = () => {
	return (
		<section className="flex flex-col items-center justify-center h-fit">
			<h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
			<p className="text-lg mb-6">
				This is a simple starting point for your portfolio.
			</p>
			<Button onClick={() => alert("Hello world")}>Click Me</Button>
		</section>
	);
};

export default Home;
