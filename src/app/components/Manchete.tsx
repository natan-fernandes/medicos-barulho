interface MancheteProps {
  title: string;
  description: string;
}

export const Manchete = (props: MancheteProps) => {
  return (
    <div className='flex flex-col flex-nowrap'>
      <h2 className='text-amber-600 uppercase'>{props.title}</h2>
      <h3 className='text-amber-600'>{props.description}</h3>
      <div className='flex gap-2'>
        <div className='bg-slate-500 rounded-md w-40 h-40'></div>
        <div className='bg-slate-500 rounded-md w-40 h-40'></div>
        <div className='bg-slate-500 rounded-md w-40 h-40'></div>
      </div>
    </div>
  )
}