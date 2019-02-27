import * as publicFunctions from "./sheets-utilities";


export interface IGlobals {
	onOpen: typeof publicFunctions.onOpen;
	openDialog: typeof publicFunctions.openDialog;
	getSheetsData: typeof publicFunctions.getSheetsData;
	addSheet: typeof publicFunctions.addSheet;
	deleteSheet: typeof publicFunctions.deleteSheet;
	setActiveSheet: typeof publicFunctions.setActiveSheet;
}


// Declare global object type to satisfy linter
const global = {} as IGlobals;


// Expose public functions
global.onOpen = publicFunctions.onOpen;
global.openDialog = publicFunctions.openDialog;
global.getSheetsData = publicFunctions.getSheetsData;
global.addSheet = publicFunctions.addSheet;
global.deleteSheet = publicFunctions.deleteSheet;
global.setActiveSheet = publicFunctions.setActiveSheet;
