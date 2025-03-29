
import Logo from '@/assets/logosaas.png'
import MenuIcon from '@/assets/menu.svg'

import {Fragment} from "react";
import Image from "next/image";
import ArrowRight from '@/assets/arrow-right.svg';

export const Header = () => {
  return (
      <header className={"sticky top-0 backdrop-blur-sm z-20"}>
          <div className="flex justify-center items-center py-3 bg-black text-white text-small gap-3">
              <p className="text-white/60 hidden md:block">Streamline your workflow and boost productivity</p>
              <div className='inline-flex items-center gap-1'>
                  <p>Get started for free </p>
                  <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/>
              </div>
          </div>
          <div className='py-5'>
              <div className='container'>
                  <div className='flex justify-between items-center'>
                      <Image src={Logo} alt={'SaaS Logo'} height={40} width={40}/>
                      <MenuIcon className="h-5 w-5 md:hidden" icon={'menu'}/>
                      <nav className='hidden md:flex gap-6 text-black/60 items-center'>
                          <a href={"#"}>About</a>
                          <a href={"#"}>Features</a>
                          <a href={"#"}>Customers</a>
                          <a href={"#"}>Updates</a>
                          <a href={"#"}>Help</a>
                          <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-middle justify-center tracking-tight'>Get for Free</button>
                      </nav>
                  </div>
              </div>
          </div>
      </header>
  );
};
