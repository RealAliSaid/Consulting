import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weights: [400, 500, 600, 700, 800, 900] });

// To add a favicon replace the file src/app/favicon.ico
// Replace owner.png in public/owner.png with the image of the owner
// The LandingPage.jsx in components/LandingPage.jsx containtes everything
// Conact me for the rest of the files if there is a need

export const metadata = {
	title: "Kenia Traum Frauen Partnerinstitut", // Website Title
	description: "Wo deutsche Männer kenianische Traum Frauen kennenlernen", // Website Description
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${montserrat.variable}`}>{children}
			</body>
		</html>
	);
}
