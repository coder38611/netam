import Link from 'next/link'
import { useState, useEffect } from 'react'
import LOGO from '@/components/LOGO'
import { GoMarkGithub } from 'react-icons/go'
import Search from '@/components/Search'

export default function Nav() {
    const [toggleMenu, setToggleMenu] = useState(false)
    useEffect(() => {
        if (window.matchMedia('(max-width: 1024px)').matches) {
            setToggleMenu(false)
        } else {
            setToggleMenu(true)
        }
        window.addEventListener('resize', function () {
            if (window.matchMedia('(min-width: 1025px)').matches) {
                setToggleMenu(true)
            } else {
                setToggleMenu(false)
            }
        })
    }, [])

    return (
        <nav className='nav'>
            <a href='#skip' className='sr-only focus:not-sr-only'>
                Skip to content
            </a>
            <button
                className='lg:hidden nav-btn'
                onClick={() => setToggleMenu(!toggleMenu)}
            >
                <LOGO customClass={'w-10 h-10'} />
            </button>
            {toggleMenu && (
                <div className='lg:sticky lg:top-0 flex flex-col font-bold p-2 gap-y-2 bg-light dark:bg-dark z-50'>
                    <div className='flex flex-col justify-center items-center'>
                        <Link href='/'>
                            <a className='p-1 text-bluePrime dark:text-white hover:text-opacity-30'>
                                <h1 className='text-black dark:text-white'>
                                    VESOC
                                </h1>
                            </a>
                        </Link>
                        <a
                            href='https://www.github.com/VESOC'
                            target='_blank'
                            rel='noreferrer noopener'
                            className='text-black dark:text-white'
                        >
                            <GoMarkGithub />
                        </a>
                    </div>
                    <Search />
                    <div className='item'>
                        <Link href='/blog'>
                            <a className='p-1 text-bluePrime dark:text-white hover:text-opacity-30'>
                                Blog
                            </a>
                        </Link>
                    </div>
                    <div className='item'>
                        <Link href='/about'>
                            <a className='p-1 text-bluePrime dark:text-white hover:text-opacity-30'>
                                About
                            </a>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
