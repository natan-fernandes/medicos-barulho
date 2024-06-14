'use client'
import { NavItem } from "./NavItem";
import { Collapse } from 'flowbite';
import { useEffect } from "react";
import Image from "next/image";

export const NavBar = () => {
  useEffect(() => {
    const $targetEl: HTMLElement = document.getElementById('navbar-default')!;
    const $triggerEl: HTMLElement = document.getElementById('abrir-menu')!;

    new Collapse(
      $targetEl,
      $triggerEl,
    );
  }, []);

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-4 md:px-0">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/static/images/logo.png" height={40} width={80} alt="Logo médicos do barulho" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap uppercase text-sky-400">Médicos do Barulho</span>
        </a>
        <button id='abrir-menu' data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-600 dark:text-amber-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Abrir menu principal</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <NavItem href='/' text='Home' />
            <NavItem href='/quem-somos' text='Quem somos' />
            <NavItem href='/atuacoes' text='Atuações' />
            <NavItem href='/jogos' text='Jogos' />
            <NavItem href='/participar' text='Participar' />
          </ul>
        </div>
      </div>
    </nav>
  );
}
