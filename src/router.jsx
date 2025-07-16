import { createBrowserRouter } from "react-router-dom";
import { Signup, Signin, Dashboard } from "./components/index"
import App from "./App";

export const router = createBrowserRouter([
    { path: "/", element: <App />},
    { path: "/signup", element: <Signup />},
    { path: "/signin", element: <Signin />},
    { path: "/dashboard", element: <Dashboard />},
]);