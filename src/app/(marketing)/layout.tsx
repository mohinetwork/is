import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";
import type { ReactNode } from "react";

const MarketingLayout = ({
    children,
}: {
    children: ReactNode;
}) => {
    return (
        <main className="w-full relative">
            <Navbar />
            {children}
            <Footer />
        </main>
    );
};

export default MarketingLayout;
