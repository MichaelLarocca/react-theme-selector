import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem("theme");
		return savedTheme ? savedTheme : "light";
	});

	function getThemeFromLocalStorage() {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setTheme(savedTheme);
		}
	}

	function toggleTheme() {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === "light" ? "dark" : "light";
			localStorage.setItem("theme", newTheme);
			return newTheme;
		});
	}

	useEffect(() => {
		getThemeFromLocalStorage();
	}, [theme]);

	return (
		<div className={`ctn ${theme}`}>
			<div className={`app ${theme}`}>
				<h1>Current theme: {theme}</h1>
				<button onClick={toggleTheme}>Toggle Theme</button>
			</div>
		</div>
	);
}

export default App;
