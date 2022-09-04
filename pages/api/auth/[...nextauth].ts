import axios from "axios";
import NextAuth, { Profile } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		async signIn({ user }) {
			try {
				await axios.post("http://localhost:3000/api/users", { ...user }); // TODO: Make it env driven
			} catch (error) {}
			return true;
		},
	},
});
