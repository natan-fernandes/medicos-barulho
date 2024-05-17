import { Input } from "../components/Input";

export default function Page() {
  return (
    <section className='prose max-w-none mx-auto rounded-md p-8 w-4/5 ring-sky-400 ring-2 bg-slate-50'>
    <h1 className='text-amber-600'>Seja um médico do barulho!</h1>
    <h2 className='text-amber-600'>
      Junte-se a nós para espalhar sorrisos! Torne-se um Médico do Barulho e faça a diferença na vida de pacientes hospitalares. 
      Juntos, podemos levar alegria onde ela é mais necessária. 
    </h2>
    <form className='w-1/2'>
      <div className='flex gap-4'>
        <Input text='Nome'/>
        <Input text='Telefone'/>
      </div>
      <Input text='Email'/>
      <div className='w-full mt-4'>
        <button className='bg-sky-400 text-lg font-bold text-slate-50 p-4 rounded-md w-1/2'>
          Enviar
        </button>
      </div>
    </form>
  </section>
  )
}
