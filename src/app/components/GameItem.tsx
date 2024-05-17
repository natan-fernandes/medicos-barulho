import { Button, Type } from "./Button"

interface GameItemProps {
  name: string;
  description: string;
}

export const GameItem = (props: GameItemProps) => {
  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='flex gap-8 items-center'>
        <div className='bg-slate-500 rounded-full w-52 h-24'>
        </div>
        <div>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
      </div>
      <Button text="Jogar" link="/" type={Type.Sec} />
    </div>
  )
}