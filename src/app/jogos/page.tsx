import { GameItem } from "../components/GameItem";

export default function Page() {
  return (
    <section className='prose max-w-none mx-auto rounded-md p-8 w-4/5 ring-sky-400 ring-2 bg-slate-50'>
    <h1 className='text-amber-600'>Jogos do barulho</h1>
    <h2 className='text-amber-600'>Se divirta jogando os jogos do barulho</h2>
    <div className='flex items-center justify-evenly gap-8'>
      <GameItem name='Jogo 1' description='É um jogo de aventura e exploração onde os jogadores desvendam segredos em um reino perdido' />
      <GameItem name='Jogo 2' description='É um jogo de aventura e exploração onde os jogadores desvendam segredos em um reino perdido' />
      <GameItem name='Jogo 3' description='É um jogo de aventura e exploração onde os jogadores desvendam segredos em um reino perdido' />
    </div>
  </section>
  )
}
