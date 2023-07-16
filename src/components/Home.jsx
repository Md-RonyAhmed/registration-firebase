import { Link } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {
	const [user] = useAuthState(auth);
	return (
		<div className="h-screen flex flex-col items-center justify-center">
			{user ? (
				<h1 className="text-4xl font-bold mb-8">
					Welcome to My Website {user?.displayName}!
				</h1>
			) : (
				<h1 className="text-4xl font-bold mb-8">
					Welcome to My Website! Please Sign up or Login
				</h1>
			)}
			{!user ? (
				<div className="flex gap-4 justify-center items-center">
					<Link to={"/signup"}>
						<button className="bg-primary text-white py-3 px-6 rounded-lg shadow-lg font-bold text-xl">
							Sign Up
						</button>
					</Link>
					<div>OR</div>
					<Link to={"/login"}>
						<button className="bg-primary text-white py-3 px-6 rounded-lg shadow-lg font-bold text-xl">
							Login
						</button>
					</Link>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Home;
