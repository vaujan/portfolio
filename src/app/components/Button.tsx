import { clsx } from "clsx";
import React from "react";

function Button({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<button
			className={clsx(
				"flex hover:bg-gray-700 transition-all ease-out w-fit py-2 px-3 rounded-md bg-gray-900 border-2 text-white text-sm font-medium border-gray-900"
			)}
		>
			{children}
		</button>
	);
}

export default Button;
