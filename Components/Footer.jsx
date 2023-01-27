import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-gray-300'>
        <div className='flex flex-row justify-between text-center mx-10 pt-5 pb-2 border border-b-black'>
            <ul>
                <Link href='/Science'>
                    About
                </Link>
            </ul>
            <ul>
                <Link href='/Entertainment'>
                    Est. 2023
                </Link>
            </ul>
            <ul>
                <Link href='/TermsOfUse'>
                    Terms of Use
                </Link>
            </ul>
        </div>
        <div className='flex flex-row justify-between text-center mx-16 pt-2 pb-5'>
            <ul>
                <Link href='/Business'>
                    Privacy Policy
                </Link>
            </ul>
            <ul>
                <Link href='/Science'>
                    License Footage
                </Link>
            </ul>
            <ul>
                <Link href='/Entertainment'>
                    Ad Choices
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Footer