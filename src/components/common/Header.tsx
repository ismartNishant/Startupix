import { auth, signIn, signOut } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Header = async () => {
    const session = await auth()
    return (
        <header className='px-5 py-3 bg-background shadow-sm font-work-sans sticky top-0'>
            <nav className='flex justify-between items-center'>
                <Link href="/"><Image alt='logo' src="/images/logo/logo.png" width={180} height={5} /></Link>
                <div className='flex items-center gap-5'>
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>
                            <form action={async () => {
                                "use server";
                                await signOut()

                            }}>
                                < Button type='submit'>
                                    <span>LOGOUT</span>
                                </Button>

                            </form>

                            <Link href={`/user/${session?.id}`} >
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form action={async () => {
                            'use server';
                            await signIn('github')
                        }}>

                            <Button type='submit' >
                                <span>Login</span>
                            </Button>
                        </form>

                    )}

                </div>
            </nav >
        </header >
    )
}

export default Header