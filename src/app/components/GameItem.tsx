import { Button, Type } from "./Button"

interface GameItemProps {
  name: string;
  description: string;
  to: string;
}

export const GameItem = (props: GameItemProps) => {
  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='flex gap-8 items-center'>
        <div className='bg-slate-500 rounded-full w-52 h-24'>
        </div>
        <div>
          <h3 className="text-amber-600">{props.name}</h3>
          <p className="text-amber-600 text-left">{props.description}</p>
        </div>
      </div>
      <Button text="Jogar" link={props.to} type={Type.Sec} />
    </div>
  )
}