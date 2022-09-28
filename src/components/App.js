import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App() {
	const [notes, setNotes] = useState([]);

	function addNotes(inputArea) {
		setNotes((prevNotes) => {
			return [...prevNotes, inputArea];
		});
	}

	return (
		<div className="App">
			<Header />
			<CreateArea onAdd={addNotes} />
			{notes.map((note, index) => {
				return (
					<Note
						key={index}
						id={index}
						title={note.title}
						content={note.content}
					/>
				);
			})}

			<Footer />
		</div>
	);
}

export default App;
