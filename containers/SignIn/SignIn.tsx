import { useSession, signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import clsx from "clsx";

function SignIn() {
	const { data: session } = useSession();

	console.log(session, "@@@");

	return (
		<div
			className={clsx(
				"text-primary",
				"text-sm",
				"text-center",
				"font-bold",
				"p-2",
				"m-2",
				"rounded",
				"bg-stone-800",
				"hover:cursor-pointer"
			)}
		>
			{getAuthUI(session)}
		</div>
	);
}

function getAuthUI(session: Session) {
	if (session) {
		return (
			<>
				Signed in as {session.user.email} <br />
				<button onClick={() => signOut()}>Sign out</button>
			</>
		);
	}

	return (
		<>
			<button onClick={() => signIn()}>Sign in</button>
		</>
	);
}

export default SignIn;
