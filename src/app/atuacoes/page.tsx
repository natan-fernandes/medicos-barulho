import Link from "next/link";
import { Manchete } from "../components/Manchete";

export default function Page() {
  return (
    <article>
      <h1 className='text-amber-600'>Atuações Recentes</h1>
      <div className='flex gap-4 flex-wrap'>
        <Manchete title='Visitas' description='Algumas visitas realizadas' />
        <div className='bg-sky-400 w-1 rounded-md mt-8'>&nbsp;</div>
        <Manchete title='Campanhas' description='Algumas doações recebidas' />
      </div>
      <p className='text-amber-600'>
        Seja um ‎
        <Link href='/participar' className="text-sky-400 font-bold">participante</Link>
        ‎ de visitas ou doações. Essas e mais publicações você pode acompanhar através do nosso ‎
        <a href='https://www.instagram.com/medicosdobarulho/' target="_blank" rel="noopener noreferrer" className="text-sky-400 font-bold">Instagram</a>
        ‎ !
      </p>
    </article>
  )
}
