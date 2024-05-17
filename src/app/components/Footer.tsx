import { LogoWithLink } from "./LogoWithLink"

export const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full gap-8 bg-slate-50 border-t-4 border-amber-600 py-10 px-5'>
      <div className="flex items-center justify-center md:justify-between max-w-screen-xl mx-auto">
        <section className='prose hidden md:block'>
          <h2 className='mb-0 text-amber-600'>Gostou da ideia? Venha fazer parte</h2>
          <h3 className='text-amber-600'>Médicos do Barulho © 2024</h3>
        </section>
        <div className='flex gap-4 w-15'>
          <LogoWithLink href="https://api.whatsapp.com/send/?phone=5532998321203&text&type=phone_number&app_absent=0" iconPath="/whatsapp.svg" alt="WhatsApp" />
          <LogoWithLink href="https://www.facebook.com/medicosdo.barulho?locale=pt_BR" iconPath="/facebook.svg" alt="Facebook" />
          <LogoWithLink href="https://www.instagram.com/medicosdobarulho/" iconPath="/instagram.svg" alt="Instagram" />
        </div>
      </div>
    </footer>
  )
}
