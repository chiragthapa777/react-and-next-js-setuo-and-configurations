import React, { useEffect, useState } from "react";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Backdrop, CircularProgress } from "@mui/material";
import _ from 'lodash';

const phoneNumberRegEx = new RegExp(/(\+977)?[9][6-9]\d{8}/gm);
const passwordRegEx = new RegExp(
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/gm
);
const pwErrorMsg =
	"Minimum 6 and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character";

const signUpSchema = Yup.object({
	name: Yup.string()
		.min(2, "must be at least 2 characters long")
		.max(25)
		.required("Please enter your name"),
	email: Yup.string()
		.email("invalid email")
		.required("Please enter your email"),
	password: Yup.string()
		.matches(passwordRegEx, pwErrorMsg)
		.required("Please enter your password"),
	confirm_password: Yup.string()
		.required()
		.oneOf([Yup.ref("password")], "Password must match"),
	age: Yup.number().min(18, "you should be aboove 18"),
    contact: Yup.string().matches(phoneNumberRegEx,'invalid number').required(),
    notes: Yup.array().of(
        Yup.object({
            title : Yup.string().required('title is required'),
            desc : Yup.string()
        })
    ).min(1, "Atleast on note should be provided")

});

interface Note {
	title: string;
	desc: string;
}

interface Values {
	name: string;
	email: string;
	password: string;
	confirm_password: string;
	age: number | undefined | null;
	contact: null | string;
	notes: Note[];
}

const initialValues: Values = {
	name: "",
	email: "",
	password: "",
	confirm_password: "",
	age: 0,
	contact: "",
	notes: [],
};

export default function index() {
	const [open, setOpen] = useState(false)
	const formik = useFormik({
		initialValues,
		validationSchema: signUpSchema,
		onSubmit: async (values: Values, action) => {
			console.log(values);
			action.resetForm();
		},
	});
	const {values, errors, touched, dirty, handleBlur, handleChange, handleSubmit, setErrors, setTouched} = formik as {
	values: Values;
	errors: Record<string, any>;
	touched: Record<string, any>;
	dirty: boolean;
	handleBlur: (event: React.FocusEvent<any>) => void;
	handleChange: (event: React.ChangeEvent<any>) => void;
	handleSubmit: (event?: React.FormEvent<HTMLFormElement> | undefined) => void;
	setErrors: (errors: any) => void;
	setTouched: (touched: any, shouldValidate?: boolean | undefined) => void;
}
	useEffect(()=>{
		console.log("Created!!!!")
	},[])
	console.log(formik)

	return (
		<FormikProvider value={formik}>
			<div className="">
				<Backdrop
					sx={{
						color: "#fff",
						zIndex: (theme) => theme.zIndex.drawer + 1,
					}}
					open={open}
					onClick={() => {
						setOpen(!open);
					}}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
				<h1>Form</h1>
				<form action="" onSubmit={handleSubmit}>
					<TextField
						className="my-3"
						fullWidth
						id="email"
						name="name"
						label="Name"
						value={values.name}
						onChange={handleChange}
						error={touched.name && Boolean(errors.name)}
						helperText={touched.name && errors.email}
						onBlur={handleBlur}
					/>
					<TextField
						className="my-3"
						fullWidth
						id="email"
						name="email"
						label="Email"
						value={values.email}
						onChange={handleChange}
						error={touched.email && Boolean(errors.email)}
						helperText={touched.email && errors.email}
						onBlur={handleBlur}
					/>
					<TextField
						className="my-3"
						fullWidth
						id="password"
						name="password"
						label="Password"
						value={values.password}
						onChange={handleChange}
						error={touched.password && Boolean(errors.password)}
						helperText={touched.password && errors.password}
						onBlur={handleBlur}
					/>
					<TextField
						className="my-3"
						fullWidth
						id="confirm_password"
						name="confirm_password"
						label="Confirm_password"
						value={values.confirm_password}
						onChange={handleChange}
						error={
							touched.confirm_password &&
							Boolean(errors.confirm_password)
						}
						helperText={
							touched.confirm_password && errors.confirm_password
						}
						onBlur={handleBlur}
					/>
					<TextField
						className="my-3"
						fullWidth
						id="contact"
						name="contact"
						label="Contact"
						value={values.contact}
						onChange={handleChange}
						error={touched.contact && Boolean(errors.contact)}
						helperText={touched.contact && errors.contact}
						onBlur={handleBlur}
					/>
					<TextField
						className="my-3"
						fullWidth
						id="age"
						name="age"
						label="Age"
						type="number"
						value={values.age}
						onChange={handleChange}
						error={touched.age && Boolean(errors.age)}
						helperText={touched.age && errors.age}
						onBlur={handleBlur}
					/>
					<h1>Notes</h1>
					{touched.notes &&
						errors.notes &&
						!_.isArray(errors.notes) &&
						_.isString(errors.notes) && (
							<span className="text-xs text-red">
								{errors.notes}
							</span>
						)}
					<FieldArray
						name="notes"
						render={(arrayHelpers) => (
							<div className="border m-2 p-2">
								{values.notes &&
									values.notes.length > 0 &&
									values.notes.map((note, index) => (
										<div key={index}>
											{/** both these conventions do the same  */}
											<TextField
												name={`notes[${index}].title`}
												label="Title"
												value={
													values.notes[index].title
												}
												onChange={handleChange}
												onBlur={handleBlur}
												className="m-2"
												error={
													touched &&
													touched.notes &&
													touched.notes[index] &&
													touched.notes[index]
														.title &&
													errors &&
													errors.notes &&
													errors.notes[index] &&
													errors.notes[index]?.title
												}
												helperText={
													touched &&
													touched.notes &&
													touched.notes[index] &&
													touched.notes[index]
														.title &&
													errors &&
													errors.notes &&
													errors.notes[index] &&
													errors.notes[index]?.title
												}
											/>
											<TextField
												name={`notes[${index}].desc`}
												label="Desc"
												value={values.notes[index].desc}
												onChange={handleChange}
												className="m-2"
												onBlur={handleBlur}
												error={
													touched &&
													touched.notes &&
													touched.notes[index] &&
													touched.notes[index].desc &&
													errors &&
													errors.notes &&
													errors.notes[index] &&
													errors.notes[index]?.desc
												}
												helperText={
													touched &&
													touched.notes &&
													touched.notes[index] &&
													touched.notes[index].desc &&
													errors &&
													errors.notes &&
													errors.notes[index] &&
													errors.notes[index]?.desc
												}
											/>
											<button
												type="button"
												className="text-xl my-auto"
												onClick={() =>
													arrayHelpers.remove(index)
												}
											>
												-
											</button>
										</div>
									))}
								<button
									type="button"
									className="text-xl my-auto"
									onClick={() =>
										arrayHelpers.push({
											title: "",
											desc: "",
										})
									}
								>
									+
								</button>
							</div>
						)}
					/>
					<Button variant="outlined" type="submit">
						Submit
					</Button>
					<Button
						variant="outlined"
						onClick={() => {
							setOpen(!open);
						}}
					>
						Loader
					</Button>
				</form>
			</div>
		</FormikProvider>
	);
}
