import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-work-sans">
            <Header></Header>
            {children}
            <Footer></Footer>
        </main>
    )
}