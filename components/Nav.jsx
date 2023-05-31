'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {

    const isUserLoggedIn = true;
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setProviders();
    }, [])

  return (
    <nav className="flex-between w-full mb-5 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            <p className="logo_text">
                FIT4LYFE
            </p>
        </Link>
        <div className="sm:flex hidden">
            {isUserLoggedIn ? (
                <div className="flex gap-3 md:gap-5">
                    <Link href="/user" className='black_btn'>
                        User Profile
                    </Link>
                    <button type='button' onClick={signOut} className='outline_btn'>
                        Sign Out
                    </button>

                    <Link href="/user">
                        
                    </Link>
                </div>
            ): (
                <>
                    {providers && Object.values(providers).map((provider) => (
                        <button
                            type="button"
                            key={provider.name}
                            onClick={() => signIn(provider.id)}
                            className='black_btn'
                        >
                            Sign In
                        </button>
                    ))}
                </>
            )}
        </div>
{/* mobile */}
        {/* <div>
            <div className='sm:hidden flex relative'>
                {isUserLoggedIn ? (

                )}
            </div>
        </div> */}

    </nav>
  )
}

export default Nav