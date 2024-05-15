import { LogoWithLink } from "./LogoWithLink"

export const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full h-12 flex items-center justify-center gap-8 bg-black'>
      <LogoWithLink href="https://api.whatsapp.com/send/?phone=5532998321203&text&type=phone_number&app_absent=0" iconPath="/whatsapp.svg" alt="WhatsApp"/>
      <LogoWithLink href="https://www.facebook.com/medicosdo.barulho?locale=pt_BR" iconPath="/facebook.svg" alt="Facebook"/>
      <LogoWithLink href="https://www.instagram.com/medicosdobarulho/" iconPath="/instagram.svg" alt="Instagram"/>
    </footer>
  )
}
