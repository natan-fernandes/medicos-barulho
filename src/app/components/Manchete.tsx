interface MancheteProps {
  title: string;
  description: string;
}

export const Manchete = (props: MancheteProps) => {
  return (
    <div className='flex flex-col'>
        <h2 className='text-amber-600'>{props.title}</h2>
        <h3 className='text-amber-600'>{props.description}</h3>
        <div className='flex gap-2'>
          <div className='bg-slate-500 rounded-md w-56 h-56'></div>
          <div className='bg-slate-500 rounded-md w-56 h-56'></div>
          <div className='bg-slate-500 rounded-md w-56 h-56'></div>
        </div>
      </div>
  )
}