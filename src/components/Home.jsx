import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<h1 className="text-4xl font-bold mb-8">
				Welcome to My Website!
			</h1>
			<Link to={"/signup"}>
				<button className="bg-primary text-white py-3 px-6 rounded-lg shadow-lg font-bold text-xl">
					Sign Up
				</button>
			</Link>
		</div>
	);
};

export default Home;
