import Layout from "@/components/Layout";

import { siteConfig } from "@/config/siteconfig";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: siteConfig.title,
		template: `%s | ${siteConfig.title}`,
	},
	description: siteConfig.description,
	icons: [
		{
			url: "/logo.svg",
			href: "/logo.svg",
		},
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ToastProvider />
				<ModalProvider />
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
