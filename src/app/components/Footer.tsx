import { LogoWithLink } from "./LogoWithLink"

export const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full h-12 flex items-center justify-center gap-8 bg-black'>
      <LogoWithLink href="#" iconPath="/whatsapp.svg" alt="WhatsApp"/>
      <LogoWithLink href="#" iconPath="/facebook.svg" alt="Facebook"/>
      <LogoWithLink href="#" iconPath="/instagram.svg" alt="Instagram"/>
    </footer>
  )
}
