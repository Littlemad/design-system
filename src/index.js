import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import RoutesLayout from "./components/navigation/RoutesLayout";
import "./styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		{
			<>
				<BrowserRouter>
					<RoutesLayout />
				</BrowserRouter>
			</>
		}
	</React.StrictMode>
);
