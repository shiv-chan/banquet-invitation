import "@/app/ui/global.css";
import type { Metadata } from "next";
import type { Viewport } from "next";

export const metadata: Metadata = {
	title: "The Wedding Celebration of Kaho + Jade",
	description: "The Wedding Cerebration of Kaho and Jade",
};

export const viewport: Viewport = {
	width: "device-width",
	interactiveWidget: "overlays-content",
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
