'use client'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function LoginForm() {
    const router = useRouter()
    const [data, setData] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            // console.log("DATA", data, process.env.NEXTAUTH_URL);
            // return
            const res = await signIn('credentials', {
                username: data.username,
                password: data.password,
                redirect: false,
            })

            if (res.status === 200) {
                alert('Login success')
                router.replace('/')
                return
            }

            alert("Invalid creds")

        } catch (error) {
            console.error("err", error);

        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Name</label>
                <input type='text' name='username' placeholder='jsmith' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' placeholder='enter pasword' onChange={handleChange} />
            </div>
            <button type='submit'>Login</button>
        </form>
    )
}

export default LoginForm