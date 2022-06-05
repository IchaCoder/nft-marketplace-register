/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Register/Login";
import Register from "./Pages/Register/Register";
import Signup from "./Pages/Register/Signup";
import Connect from "./Components/Connect";
import { useState } from "react";
import Recoverpassword from "./Pages/Register/RecoverPassword";
import RecoveryPin from "./Pages/Register/RecoveryPin";
import ResetPassword from "./Pages/Register/ResetPassword";

function App() {
	const [showConnect, setShowConnect] = useState(false);

	return (
		<Router>
			<Connect showConnect={showConnect} setShowConnect={setShowConnect} />
			<Routes>
				<Route path="/" element={<Register />}>
					<Route index element={<Login setShowConnect={setShowConnect} />} />
					<Route
						path="signup"
						element={<Signup setShowConnect={setShowConnect} />}
					/>
					<Route path="recovery-email" element={<Recoverpassword />} />
					<Route path="recovery-pin" element={<RecoveryPin />} />
					<Route path="reset-password" element={<ResetPassword />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
