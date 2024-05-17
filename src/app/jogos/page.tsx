import { GameItem } from "../components/GameItem";

export default function Page() {
  return (
    <section>
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
