import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

const CreateArea = ({ onAdd }) => {
	const [inputArea, setInputArea] = useState({ title: "", content: "" });
	const [isExtended, setIsExtended] = useState(false);

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

	function extendArea() {
		setIsExtended(true);
	}
	return (
		<div>
			<form className="create-note">
				{isExtended && (
					<input
						value={inputArea.title}
						onChange={handleChange}
						name="title"
						placeholder="Title"
					/>
				)}

				<textarea
					onClick={extendArea}
					value={inputArea.content}
					onChange={handleChange}
					name="content"
					placeholder="Take a note..."
					rows={isExtended ? 3 : 1}
				/>
				<Zoom in={isExtended}>
					<Fab onClick={submitInput}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
};

export default CreateArea;
