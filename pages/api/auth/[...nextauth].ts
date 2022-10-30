import axios from "axios";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	secret: process.env.SECRET,
	callbacks: {
		async signIn({ user }) {
			try {
				await axios.post(`${process.env.NEXTAUTH_URL}/api/users`, { ...user });
			} catch (error) {}
			return true;
		},
	},
});
