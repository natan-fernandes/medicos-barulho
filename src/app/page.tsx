import { Footer } from "./components/Footer";
import { ImageCarousel } from "./components/ImageCarousel";
import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <NavBar/>
      <ImageCarousel/>
      <Footer/>
    </main>
  )
}
