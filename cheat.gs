function chat(){

// 紐づいているSpreadSheetの操作
var ss = SpreadsheetApp.getActiveSpreadsheet();

/** 紐づいていないSpreadSheetの操作
 *  キーはhttps://docs.google.com/spreadsheets/d/xx/editのxx
 */
var ss2 = SpreadsheetApp.openById(‘キー’)

var sheet = ss.getActiveSheet(); // アクティブなシートを指定

var sheet = spreadsheet.getSheetByName('<シート名>'); // シートを名前で指定して取得する

var name = sheet.getRange(2,2).getValue(); // B2セルの値を取得
sheet.getRange(2,3).setValue(‘Hello’); // C2セルの値にHelloを埋める


}
