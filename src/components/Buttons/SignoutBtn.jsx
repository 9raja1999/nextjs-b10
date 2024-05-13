'use client'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'

function SignoutBtn() {
    const { data, status } = useSession()
    //status --> loading, authenticated, unauthenticated

    const handleSignOut = () => signOut({ callbackUrl: '/login' })
   
    if (status === 'authenticated') {
        return (
            <button
                onClick={handleSignOut}
            >
                Signout
            </button>
        )
    }

    return null
}

export default SignoutBtn