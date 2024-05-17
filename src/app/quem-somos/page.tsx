import React from 'react'
import { Button, Type } from '../components/Button'

export default function page() {
    return (
        <section>
            <h1 id='quem-somos' className='text-amber-600'>Quem somos</h1>
            <h2 className='text-amber-600'>A Associação Médicos do Barulho é uma iniciativa dedicada a levar alegria aos pacientes hospitalares por meio da arte dos palhaços.
                Com um time de profissionais dedicados, eles visitam hospitais, levando sorrisos e momentos de descontração aos que mais precisam.
                Além disso, a associação também atua como um canal para doações, apoiando casos específicos e contribuindo para tornar o ambiente
                hospitalar mais leve e acolhedor.</h2>

            <div className="flex flex-wrap gap-2">
                <Button text="Participar" link="/participar" type={Type.Main} />
                <Button text="Saiba Mais" link="/atuacoes" type={Type.Sec} />
            </div>
        </section>
    )
}
