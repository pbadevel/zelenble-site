import Link from 'next/link';
import React from 'react';

export default function Custom404() {
  return (
    <div className='pt-20 items-center text-primary'>
    <div className="py-20 flex flex-col justify-center gap-10 rounded-3xl">
      <h1 className="text-4xl text-center">Упс, тут ничего нет ;)</h1>
      <div className="flex justify-center">
        <Link href='/' className='p-5 text-xl rounded-xl flex gap-3 bg-card hover:scale-115 hover:bg-[var(--bg-card-hover)] duration-500'>
            На главную
        </Link>
      </div>
    </div>
    </div>
  );
}