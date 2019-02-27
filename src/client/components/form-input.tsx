import React from "react";
import "../styles.css"; // tslint:disable-line


interface IFormInputProps {
	newSheetFormHandler: any
}


export default class FormInput extends React.Component<IFormInputProps> {
	public state: { text: string };

	constructor(props) {
		super(props);
		this.state = { text: "" };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	public handleChange(e) {
		this.setState({ text: e.target.value });
	}

	public handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.text.length) {
			this.props.newSheetFormHandler(e, this.state.text);
			this.setState({ text: "" });
		}
	};

	public render() {
		return (
			<div className="formBlock">
				<span>Add a sheet: </span>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange} value={this.state.text} />
				</form>
			</div>
		);
	}
}
