import { useSession, signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import clsx from "clsx";

function SignIn() {
	const { data: session } = useSession();

	return (
		<div
			className={clsx(
				"flex",
				"flex-col",
				"items-center",
				"text-primary",
				"text-sm",
				"font-bold",
				"p-2",
				"m-2",
				"rounded",
				"bg-stone-800"
			)}
		>
			{getAuthUI(session)}
		</div>
	);
}

function getAuthUI(session: Session) {
	if (session) {
		return (
			<div className="flex flex-col items-center">
				<span>Signed in as</span>
				<span className="truncate w-40">{session.user.email}</span>
				<button
					className={clsx(
						"text-primary",
						"text-sm",
						"text-center",
						"font-bold",
						"p-2",
						"mt-2",
						"rounded",
						"hover:cursor-pointer",
						"bg-blue-500 "
					)}
					onClick={() => signOut()}
				>
					Sign out
				</button>
			</div>
		);
	}

	return (
		<button
			className={clsx(
				"text-primary",
				"text-sm",
				"text-center",
				"font-bold",
				"p-2",
				"rounded",
				"hover:cursor-pointer",
				"bg-blue-500 "
			)}
			onClick={() => signIn()}
		>
			Sign in
		</button>
	);
}

export default SignIn;
