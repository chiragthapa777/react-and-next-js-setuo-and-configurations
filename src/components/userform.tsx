import { TextField } from '@mui/material';
import React, { useEffect } from 'react'

export default function Userform() {
	useEffect(() => {
	  
		console.log("user form created")
	  return () => {
		console.log("user form destroyed")
	  }
	}, [])
	
  return (
		<div className="bg-slate-200 p-5">
			<div className="m-3">
				<TextField
					id="outlined-basic"
					label="Name"
					variant="outlined"
					className='bg-white '

				/>
			</div>
			<div className="m-3">
				<TextField
					id="outlined-basic"
					label="Outlined"
					variant="outlined"
				/>
			</div>
		</div>
  );
}
