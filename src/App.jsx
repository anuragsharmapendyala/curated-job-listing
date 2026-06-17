import React, { useState } from "react";
import dataJSON from "./data.json"; // 1. Direct import is usually already an object
import "./App.css";
import Card from "./components/Card";

const App = () => {
	const [data, setData] = useState(dataJSON);
	const [search, setSearch] = useState("");
	const handleInput = (e) => {
		setSearch(e.target.value);
		const matchedSearch = data.filter((job) => job.position.startsWith(search));
		setData(matchedSearch);
		if (e.target.value === "") setData(dataJSON);
	};
	return (
		<div className="App">
			<div className="App_Header">
				<input
					type="text"
					name="tag"
					id="tag"
					className="searchBox"
					value={search}
					onChange={(e) => handleInput(e)}
				/>
			</div>

			<div className="App_Container">
				<div className="App_Container__wrapper">
					<ul style={{ listStyleType: "none" }}>
						{data.map((job) => (
							<li key={job.company}>
								<Card
									{...job}
									key={job.company}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default App;
