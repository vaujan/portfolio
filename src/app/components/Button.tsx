import React from "react";
import clsx from "clsx";

interface ButtonProps {
	children?: React.ReactNode;
	onClick?: () => void;
	variant?: "variant" | "secondary" | "tertiary";
	size?: "sm" | "md";
	disabled?: "sm" | "md";
}

const baseStyle =
	"inline-flex text-lg bg-primary-600 rounded-lg py-2 px-3 hover:bg-primary-700 active:bg-primary-800 transition-all text-primary-50";

const skeumorphicStyle =
	"shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06),0px_1px_3px_0px_rgba(0,0,0,0.1),inset_0px_-1px_0px_1px_rgba(0,0,0,0.1),inset_0px_1px_0px_1px_rgba(255,255,255,0.1),inset_0px_0px_0px_1px_rgba(0,0,0,0.1)] [text-shadow:_0_1px_1_rgb(0_0_0_/_10%)]";

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<button className={clsx(baseStyle, skeumorphicStyle)} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
