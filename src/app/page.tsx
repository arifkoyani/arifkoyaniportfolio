import Landing from "./Landing/page.js";
import Footer from "./pages/Footer/page.js";
import Navbar from "./Landing/Navbar/page.js";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Footer />
    </>
  );
}
