import SignIn from "@containers/SignIn";
import Modal from "@components/Modal/Modal";
import { SignInModalTypes } from "./SignInModal.types";

const TITLE = "Sign In";
const FOOTER =
	"I will only request access to your public Google profile information. You won’t be subscribed to anything.";

function SignInModal({
	title = TITLE,
	footer = FOOTER,
	show,
	onClose,
}: SignInModalTypes) {
	return (
		<Modal title={title} footer={footer} show={show} onClose={onClose}>
			<SignIn />
		</Modal>
	);
}

export default SignInModal;
