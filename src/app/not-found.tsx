import { Smile } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Custom404() {
  return (
    <div className='py-50 items-center text-primary h-screen'>
    <div className=" flex flex-col text-center justify-center gap-10 rounded-3xl">
    <div className="flex grid-1 justify-center">
        <h1 className="text-xl flex text-center justify-center lg:text-4xl">Упс, тут пока ничего нет</h1>  <Smile className='text-primary pl-4 w-12 h-12'/>
    </div>
      <div className="flex justify-center">
        <Link href='/' className='p-5 text-xl rounded-xl flex gap-3 bg-card hover:scale-115 hover:bg-[var(--bg-card-hover)] duration-500'>
            На главную
        </Link>
      </div>
    </div>
    </div>
  );
}