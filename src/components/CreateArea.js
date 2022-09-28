import React, { useState } from "react";

const CreateArea = ({ onAdd }) => {
	const [inputArea, setInputArea] = useState({ title: "", content: "" });

	function handleChange(e) {
		const { name, value } = e.target;
		setInputArea((prevInput) => {
			return {
				...prevInput,
				[name]: value,
			};
		});
	}

	function submitInput(e) {
		e.preventDefault();
		onAdd(inputArea);
		setInputArea({ title: "", content: "" });
	}
	return (
		<div>
			<form onSubmit={submitInput}>
				<input
					value={inputArea.title}
					onChange={handleChange}
					name="title"
					placeholder="Title"
				/>
				<textarea
					value={inputArea.content}
					onChange={handleChange}
					name="content"
					placeholder="Take a note..."
					rows="3"
				/>
				<button>Add</button>
			</form>
		</div>
	);
};

export default CreateArea;
