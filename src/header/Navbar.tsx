import Link from 'next/link';
import React from 'react';

const Navbar = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories",{next: {revalidate: 100}});
  const data: NavbarType[] = await res.json();
  return (
    <nav className='px-4 py-2'>
      <ul className='flex gap-1'>
        {
          data.map(item=><li key={item.id}><Link href={"/"} className='btn hover:bg-gray-300 border-0 bg-transparent'> <span>{item.icon}</span> <span>{item.nameBn}</span></Link></li>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;