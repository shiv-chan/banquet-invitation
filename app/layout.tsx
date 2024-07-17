import "@/app/ui/global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Save the Date! | Kaho + Jade",
	description: "The Wedding Cerebration of Kaho and Jade",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
