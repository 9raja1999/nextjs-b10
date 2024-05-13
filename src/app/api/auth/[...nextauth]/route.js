import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    pages: {
        signIn: '/login',
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: { label: "Name", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password", placeholder: 'enter password' }
            },
            authorize: async (credentials, _req) => {
                try {
                    if (!credentials.username || !credentials.password) return null

                    const response = await fetch('https://dummyjson.com/auth/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            username: credentials.username,
                            password: credentials.password,
                        })
                    })
                    const user = await response.json()
                    console.log(user);
                    if (response.ok) {
                        return user
                    }


                    return null
                } catch (error) {
                    console.log("eRROR", error);
                    throw new Error('Invalid login attempt')
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user

                return token
            }

            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user = token.user
                return session
            }

            return session
        }
    }
}


const handler = NextAuth(authOptions)
export default authOptions
export { handler as GET, handler as POST }
