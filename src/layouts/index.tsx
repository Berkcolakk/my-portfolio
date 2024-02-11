import Header from "@/layouts/Header";
import Main from "@/layouts/Main";
import Footer from "@/layouts/Footer";
1
const Layout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}
export default Layout;
