import React from 'react';
import { Playfair_Display } from 'next/font/google';
// styles
import './Header.scss';

const playfair = Playfair_Display({ subsets: ['latin-ext'], weight: '400' });

export default function Header({children}) {
  return <header className={`${playfair.className} px-4 text-thin text-2xl md:text-3xl`}>{children}</header>;
}
