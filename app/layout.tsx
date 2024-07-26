import "@/app/ui/global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "The Wedding Celebration of Kaho + Jade",
	description: "October 12, 2024 in Calgary, AB",
	appleWebApp: {
		capable: true,
		statusBarStyle: "black-translucent",
	},
	openGraph: {
		title: "The Wedding Celebration of Kaho + Jade",
		description: "October 12, 2024 in Calgary, AB",
		url: "https://kaho-and-jade-banquet-invitation.vercel.app/",
		siteName: "Invitation to Kaho and Jade's Banquet",
		images: [
			{
				url: "https://kaho-and-jade-banquet-invitation.vercel.app/_next/image?url=%2Fopengraph.png&w=3840&q=75", // Must be an absolute URL
				width: 1200,
				height: 630,
			},
		],
		locale: "en_US",
		type: "website",
	},
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
