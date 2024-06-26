import { Input } from "../components/Input";
import { Button, Type } from "../components/Button";

export default function Page() {
  return (
    <section>
      <h1 className='text-amber-600'>Seja um Médico do Barulho!</h1>
      <h2 className='text-amber-600'>
        Junte-se a nós para espalhar sorrisos! Torne-se um Médico do Barulho e faça a diferença na vida de pacientes hospitalares.
        Juntos, podemos levar alegria onde ela é mais necessária.
      </h2>
      <form className='w-1/2'>
        <div className='flex gap-4'>
          <Input text='Seu nome' placeholder="Piolhin" />
          <Input text='Seu telefone' placeholder="(32) 90000-0000" />
        </div>
        <Input text='Seu email' placeholder="piolhin@gmail.com" />
        <div className='w-full mt-4'>
          <Button text="Enviar" link="/" type={Type.Main} />
        </div>
      </form>
    </section>
  )
}
