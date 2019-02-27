import React from "react";
import "../styles.css"; // tslint:disable-line


interface ISheetButtonProps {
	name: any,
	deleteButtonHandler: any,
	clickSheetNameHandler: any,
}


const SheetButton = (props: ISheetButtonProps) => {
	const sheetIndex = props.name.sheetIndex;
	const sheetName = props.name.text;
	const isActiveSheet = props.name.isActive;

	const deleteSheet = (e) => props.deleteButtonHandler(e, sheetIndex);
	const submitSheet = (e) => props.clickSheetNameHandler(e, sheetName);

	return (
		<div className="sheetLine">
			<button onClick={deleteSheet}>
				X
			</button>
			<span
				onClick={submitSheet}
				className={"sheetNameText " + (isActiveSheet ? "active-sheet" : "")}
			>
				{sheetName}
      </span>
		</div>
	);
};

export default SheetButton;
