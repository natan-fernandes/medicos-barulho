import Image from 'next/image'
import imageCarousel1 from "../../../public/static/images/image-carousel-1.jpg"

export const ImageCarousel = () => {

  const height = 400
  const width = 900

  return (
    <Image
      src={imageCarousel1}
      width={width}
      height={height}
      className='ring-sky-400 ring-2 rounded-md mb-0'
      alt="Ação do médicos do barulho"
    />
  );
}
