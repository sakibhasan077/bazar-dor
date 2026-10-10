"use client"
import { NavbarType } from '@/type';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Navbar =  () => {
  const[data, setData] = useState<NavbarType[]>([])
  useEffect(()=>{
    fetch("https://api.api-store.workers.dev/api/bazardor/categories")
    .then(res=>res.json())
    .then(resData=> setData(resData))
    .catch(error=> console.log(error))
  })

  const pathName = usePathname();
  return (
    <nav className='px-4 py-2'>
      <ul className='flex gap-1'>
        {
          data.map(item=><li key={item.id}><Link href={`/category/${item.slug}`} className={`btn ${pathName === `/category/${item.slug}` ? "bg-[#047F39] text-white":"hover:bg-gray-300 border-0 bg-transparent"} `}> <span>{item.icon}</span> <span>{item.nameBn}</span></Link></li>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;