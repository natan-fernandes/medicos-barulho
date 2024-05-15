import { Footer } from "./components/Footer";
import { ImageCarousel } from "./components/ImageCarousel";
import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar/>
      <ImageCarousel/>
      
      <section className='container mx-auto'>
        <h1>Quem somos</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa voluptatem quasi eligendi ad neque voluptatum nam officia, reiciendis, soluta ut voluptate facere, distinctio ea hic consequatur! Vitae quasi enim dolorum!
        Perferendis culpa quas esse animi beatae sapiente quasi, tempore laudantium dolor odio totam molestiae assumenda. Odio numquam placeat, ullam vitae nesciunt iure? Culpa labore obcaecati sequi reiciendis ratione minima dolor!</p>
      </section>
      
      <Footer/>
    </main>
  )
}
