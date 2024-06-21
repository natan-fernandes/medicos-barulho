import { GameItem } from "../components/GameItem";

export default function Page() {
  return (
    <section>
      <h1 className='text-amber-600'>Jogos do barulho</h1>
      <h2 className='text-amber-600'>Se divirta jogando os jogos do barulho</h2>
      <div className='flex items-center justify-evenly gap-8'>
        <GameItem
          name="Harry Potter: A Batalha contra os Dementadores"
          description="Voe como Harry Potter, enfrente Dementadores e lance feitiços do Patrono para proteger Hogwarts neste emocionante jogo de ação mágica!"
          to="https://resplendent-maamoul-dd44c8.netlify.app/"
        />
        <GameItem
          name="Detona Ralph: Aventura Quebradeira"
          description="Jogue como Ralph, quebre obstáculos e derrote inimigos para provar que é um herói neste divertido jogo de ação!"
          to="https://thiagocotta.github.io/Detona/"
        />
        <GameItem
          name="Mario Jump"
          description="Pule com Mario, desvie de obstáculos e colete moedas para alcançar novas alturas neste emocionante jogo de plataforma!"
          to="https://caiodutra1412.github.io/Mario-Jump/"
        />
      </div>
    </section>
  )
}
