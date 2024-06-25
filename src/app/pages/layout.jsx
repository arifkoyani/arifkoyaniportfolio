import Navbar from  "../Landing/Navbar/page"
import Footer from "./Footer/page"
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