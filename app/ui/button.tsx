"use client";

import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
	return (
		<button
			{...rest}
			className={clsx(
				"text-center font-serif border border-solid border-black bg-black text-white w-32 text-base bold sm:text-lg disabled:bg-slate-300 disabled:border-slate-300 disabled:text-slate-900",
				className
			)}
		>
			{children}
		</button>
	);
}

import { useFormStatus } from "react-dom";

interface SubmitButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	resolvedText: string;
	pendingText: string;
}

export function SubmitButton({
	resolvedText,
	pendingText,
	className,
}: SubmitButtonProps) {
	const { pending } = useFormStatus();

	return (
		<Button
			type='submit'
			className={clsx("w-full mt-8", className)}
			disabled={pending}
		>
			{pending ? pendingText : resolvedText}
		</Button>
	);
}
