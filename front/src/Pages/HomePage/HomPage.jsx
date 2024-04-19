import "./HomePage.scss";
import { Hero } from "./Hero/Hero";
import { Features } from "./Features/Features";
import { MainNav } from "../../Components/MainNav/MainNav";
import { Footer } from "../../Components/Footer/Footer";
export function HomePage() {
    return(
  <>
    <MainNav />
    <div className="mainHomePage">
      <Hero />
      <Features />
    </div>
    <Footer />
  </>
    )
  ;
}
