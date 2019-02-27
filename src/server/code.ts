import * as publicFunctions from "./sheets-utilities";


// Expose public functions

// @ts-ignore
global.onOpen = publicFunctions.onOpen;
// @ts-ignore
global.openDialog = publicFunctions.openDialog;
// @ts-ignore
global.getSheetsData = publicFunctions.getSheetsData;
// @ts-ignore
global.addSheet = publicFunctions.addSheet;
// @ts-ignore
global.deleteSheet = publicFunctions.deleteSheet;
// @ts-ignore
global.setActiveSheet = publicFunctions.setActiveSheet;

// Maybe someday....
// https://github.com/Microsoft/TypeScript/issues/19573#issuecomment-447889066
