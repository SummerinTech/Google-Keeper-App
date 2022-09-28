import React, { useState } from "react";

const CreateArea = () => {
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
	return (
		<div>
			<form>
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
