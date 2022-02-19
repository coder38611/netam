import NextAuth from 'next-auth'
// import GithubProvider from 'next-auth/providers/github'
import Auth0Provider from 'next-auth/providers/auth0'
import protectAPI from '@/lib/apiProtection'

export default protectAPI(
    NextAuth({
        providers: [
            Auth0Provider({
                clientId: process.env.AUTH_CLIENT_ID!,
                clientSecret: process.env.AUTH_CLIENT_SECRET!,
            }),
        ],
        secret: process.env.NEXTAUTH_SECRET,
        jwt: {
            maxAge: 1 * (24 * 60 * 60), // Token has a max age of 1 Day
        },
        theme: {
            colorScheme: 'auto', // "auto" | "dark" | "light"
            logo: '/icons/LOGO.png', // Absolute URL to image
        },
        callbacks: {
            async jwt({ token, user, isNewUser }) {
                /* Prevent new user signups except owner + extra check with Github's unique username policy */
                if (isNewUser && token.name !== process.env.SITE_OWNER_NAME) {
                    return { token: null }
                }
                if (user) return token
                return { token: null }
            },
        },
    })
)
