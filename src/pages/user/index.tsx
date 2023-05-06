import React, { useState } from "react";
import Userform from "../../components/userform";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function index() {
	const [open, setOpen] = useState(false);
	const toggleOpen = () => {
		setOpen(!open);
	};
	return (
		<div>
			<Button onClick={toggleOpen}>Open</Button>
			<Dialog onClose={toggleOpen} open={open} className="">
				<DialogTitle className="p-0">
					<div className="w-full flex justify-between bg-slate-100 p-2">
						user form
						<IconButton aria-label="delete" onClick={toggleOpen}>
							<CloseIcon />
						</IconButton>
					</div>
				</DialogTitle>
				<DialogContent className="p-0">
					<Userform />
				</DialogContent>
				<DialogActions className="p-1 items-start">
                    <button className="bg-green-400 px-3 py-1 rounded-md">save</button>
                </DialogActions>
			</Dialog>
		</div>
	);
}
