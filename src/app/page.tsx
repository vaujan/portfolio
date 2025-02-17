"use client";

import React from "react";
import Button from "./components/Button";

const Home: React.FC = () => {
	return (
		<>
			<section
				className={`
				flex flex-col gap-6 items-center justify-center h-fit w-full`}
			>
				<div className="flex flex-col">
					<h1 className={`text-3xl mb-4 text-secondary-800 font-medium`}>
						We believe that aggressive{" "}
						<span className="font-semibold ">self-education</span> eats{" "}
						<span className="font-semibold">university degree</span> for
						breakfast.
					</h1>
					<p className="w-full mb-8 font-medium text-secondary-700">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
						nobis debitis distinctio error molestias reiciendis velit dolorem
						tenetur incidunt provident vitae ratione neque ullam ab quis, quo,
						maxime dolorum veniam?
					</p>
					<Button className="w-fit" onClick={() => alert("Hello world")}>
						Click Me
					</Button>
				</div>
			</section>
			<section></section>
		</>
	);
};

export default Home;
