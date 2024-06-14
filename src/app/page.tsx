import { ImageCarousel } from "./components/ImageCarousel";
import { Button, Type } from "./components/Button";


export default function Home() {
  return (
    <section>
      <h1 id='quem-somos' className='text-amber-600'>Bem vindo ao MÉDICOS DO BARULHO!</h1>
      <ImageCarousel />
      <div className="md:absolute md:translate-x-[1rem] md:translate-y-[-13rem] bg-slate-50 rounded-md p-2 ring-sky-400 md:ring-2 md:w-[35rem] md:p-5">
        <p className='text-amber-600 m-0'>Veja nossa alegria transformadora! Explore projetos, participe, e sinta a magia nas imagens.</p>
        <div className="flex flex-col md:flex-row md:gap-2 items-center md:items-start">
          <Button text="Participar" link="/participar" type={Type.Main} />
          <Button text="Saiba Mais" link="/quem-somos" type={Type.Sec} />
        </div>
      </div>
    </section>
  )
}
