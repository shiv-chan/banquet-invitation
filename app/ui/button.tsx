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
