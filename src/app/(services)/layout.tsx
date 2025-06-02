import { Header } from "@/common/Header";
import { Footer } from "@/common/Footer";

export default function ServicesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <>
                <Header />
                {children}
                <Footer />
            </>
        </html>
    );
}

