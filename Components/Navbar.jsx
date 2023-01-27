import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-gray-300'>
        <div className='max-w-[1240px] flex justify-between m-auto items-center p-4'>
            <h1 className='font-bold p-4 bg-red-600 text-white rounded-lg'>
                <Link href='/'>
                    CNC
                </Link>
            </h1>
            <ul className='hidden sm:flex'>
                <Link href='/Business'>
                    Business
                </Link>
            </ul>
            <ul>
                <Link href='/Science'>
                    Science
                </Link>
            </ul>
            <ul>
                <Link href='/Entertainment'>
                    Entertainment
                </Link>
            </ul>
            <ul>
                <Link href='/Technology'>
                    Tech
                </Link>
            </ul>
            <ul>
                <Link href='/Sports'>
                    Sports
                </Link>
            </ul>
            <ul>
                <Link href='/Health'>
                    Health
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar