import Header from "@/layouts/Header";
import Main from "@/layouts/Main";
import Footer from "@/layouts/Footer";
import { ScrollShadow } from "@nextui-org/react";
1
const Layout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <ScrollShadow className="w-screen h-screen">
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </ScrollShadow>
    )
}
export default Layout;
