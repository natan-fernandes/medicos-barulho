import Link from "next/link";
import { Manchete } from "../components/Manchete";

export default function Page() {
  return (
    <article className='prose max-w-none mx-auto rounded-md p-8 w-4/5 ring-sky-400 ring-2 bg-slate-50'>
    <h1 className='text-amber-600'>Atuações recentes</h1>
    <div className='flex gap-4 justify-evenly'>
      <Manchete title='Visitas' description='Algumas visitas realizadas'/>
      <div className='bg-sky-400 w-1 rounded-md mt-8'>&nbsp;</div>
      <Manchete title='Campanhas' description='Algumas doações recebidas'/>
    </div>
    <p className='text-amber-600'>
      Seja um 
      <Link href='/participar'> participante </Link>
      de visitas ou doações. Essas e mais publicações você pode acompanhar através do nosso 
      <a href='https://www.instagram.com/medicosdobarulho/' target="_blank" rel="noopener noreferrer"> Instagram </a>
      !
    </p>
  </article>
  )
}
