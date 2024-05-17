interface InputProps {
  text: string
}

export const Input = (props: InputProps) => {
  return (
    <div className='flex flex-col w-full'>
      <label className='font-medium'>{props.text}</label>
      <input className='rounded-md bg-slate-300 p-2' />
    </div>
  )
}