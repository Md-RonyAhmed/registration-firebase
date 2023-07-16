import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import App from "../App";
import RegistrationForm from "../components/auth/RegistrationForm";
import NotFound from "../components/NotFound";
import LoginForm from "../components/auth/LoginForm";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/signup",
				element: <RegistrationForm />,
			},
			{
				path: "/login",
				element: <LoginForm />,
			},
		],
	},

	{
		path: "*",
		element: <NotFound/>,
	},
]);

export default routes;
