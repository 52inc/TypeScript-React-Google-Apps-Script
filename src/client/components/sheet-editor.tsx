import React from "react";
import FormInput from "./form-input";
import SheetButton from "./sheet-button";

interface ISheetEditorProps {
	state?: {
		names: any
	}
}

export default class SheetEditor extends React.Component<ISheetEditorProps> {
	public state: { names: never[]; };

	constructor(props) {
		super(props);
		this.state = { names: [] };
		this.deleteButtonHandler = this.deleteButtonHandler.bind(this);
		this.clickSheetNameHandler = this.clickSheetNameHandler.bind(this);
		this.newSheetFormHandler = this.newSheetFormHandler.bind(this);
	}

	public componentDidMount() {
		// @ts-ignore
		google.script.run
			.withSuccessHandler((data) => this.setState({ names: data }))
			.withFailureHandler((error) => alert(error))
			.getSheetsData();
	}

	public deleteButtonHandler(e, sheetIndex) {
		// @ts-ignore
		return google.script.run
			.withSuccessHandler((data) => this.setState({ names: data }))
			.withFailureHandler((error) => alert(error))
			.deleteSheet(sheetIndex);
	}

	public clickSheetNameHandler(e, sheetName) {
		// @ts-ignore
		return google.script.run
			.withSuccessHandler((data) => this.setState({ names: data }))
			.withFailureHandler((error) => alert(error))
			.setActiveSheet(sheetName);
	}

	public newSheetFormHandler(e, newSheetTitle) {
		// @ts-ignore
		return google.script.run
			.withSuccessHandler((data) => this.setState({ names: data }))
			.withFailureHandler((error) => alert(error))
			.addSheet(newSheetTitle);
	}

	public render() {
		let names = this.state.names;
		return (
			<div>
				<FormInput newSheetFormHandler={this.newSheetFormHandler} />
				{names.length ? names.map((name: any) => {
						return <SheetButton
							name={name}
							deleteButtonHandler={this.deleteButtonHandler}
							clickSheetNameHandler={this.clickSheetNameHandler}
							key={name.sheetName}
						/>;
					})
					: null}
			</div>
		);
	}
}
