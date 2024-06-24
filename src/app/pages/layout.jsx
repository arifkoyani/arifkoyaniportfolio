import Navbar from  "../Landing/navbar/page"
import Footer from "../pages/footer/page"
const Layout=({children})=>{
    return(
        <>
        <Navbar/>
        {
            children
        }

        <Footer/>
        </>
    )
}

export default Layout;