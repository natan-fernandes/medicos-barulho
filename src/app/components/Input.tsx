interface InputProps {
  text: string
  placeholder: string
}

export const Input = (props: InputProps) => {
  return (
    <div className='flex flex-col w-full'>
      <label className='font-medium text-zinc-500'>{props.text}</label>
      <input className='rounded-md bg-slate-300 p-2 focus:outline-none' placeholder={props.placeholder} />
    </div>
  )
}