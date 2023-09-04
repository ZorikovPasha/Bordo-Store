import { Header, Footer } from "../index"

export const Layout = ({ children }) => {

    return (
        <div className="wrapper">
            <Header />
                {children}
            <Footer />
        </div>
    )
}