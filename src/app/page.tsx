import { Footer } from "./components/Footer";
import { GameItem } from "./components/GameItem";
import { ImageCarousel } from "./components/ImageCarousel";
import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <ImageCarousel/>
      
      <section className='mx-auto prose mt-4'>
        <h1 id='quem-somos'>Quem somos</h1>
        <p>A Associação Médicos do Barulho é uma iniciativa dedicada a levar alegria aos pacientes hospitalares por meio da arte dos palhaços. 
          Com um time de profissionais dedicados, eles visitam hospitais, levando sorrisos e momentos de descontração aos que mais precisam. 
          Além disso, a associação também atua como um canal para doações, apoiando casos específicos e contribuindo para tornar o ambiente 
          hospitalar mais leve e acolhedor.</p>
      </section>

      <section className='mx-auto prose mt-8'>
        <h1 id='atuacoes'>Atuações</h1>
        <h2>Visita à pediatria</h2>
        <p>Os Médicos do Barulho trouxeram sua magia à ala de pediatria, transformando o ambiente hospitalar 
          em um cenário de diversão e risadas. Com narizes vermelhos e trajes coloridos, os palhaços encantaram as crianças 
          com suas brincadeiras e truques. Cada momento foi preenchido com a alegria contagiosa dos Médicos do Barulho, 
          deixando um rastro de sorrisos e lembranças felizes para as crianças e suas famílias.</p>
      </section>
      
      

      <p className='mt-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolores quisquam nesciunt, distinctio ex aut deleniti cum alias possimus similique praesentium adipisci eum veniam a inventore obcaecati dolorum beatae quo!
      In natus quisquam cum error numquam voluptatum, enim eum? Omnis et odio at ut iure deleniti accusantium voluptatum. Commodi minima pariatur qui quaerat officia et impedit nemo, similique nostrum possimus?
      Vero voluptatem dignissimos tempore est iusto ea aspernatur eaque libero minima. Exercitationem nobis minus earum. Fugiat eos blanditiis reprehenderit neque, impedit molestias, itaque excepturi dolores veniam eaque nemo, repellat praesentium?
      Odio similique voluptatibus error aperiam ad fugit explicabo, voluptas iusto animi eaque commodi tenetur, vitae illum voluptates inventore quae magni ex pariatur quam eum nulla repellendus dolorem? Asperiores, ea sapiente?
      Cumque voluptatum deleniti dolor recusandae, quis suscipit nostrum laudantium in, ab alias laboriosam molestias consequuntur vel optio quas numquam porro sequi nemo, tenetur iure voluptate voluptates accusamus atque non. Ut.</p>
    </main>
  )
}
