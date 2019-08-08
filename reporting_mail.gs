function makeMail(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();

  
  makeTitle();
  var title = sheet.getRange(3,2).getValue();
  var to = sheet.getRange(1, 2).getValue();
  var msg = sheet.getRange(4, 2).getValue();
  for (var i = 5; i <=ss.getLastRow();i++){
  msg = msg + '\n\n' +sheet.getRange(i, 2).getValue();
  }
  Logger.log(msg);
  
  GmailApp.createDraft(to, title, msg);
}


function makeTitle() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  var title = sheet.getRange(2, 2).getValue();
  var today = new Date();
  today = Utilities.formatDate(today,'Asia/Tokyo', 'MM/dd');
  title = title + today;
  
  sheet.getRange(3,2).setValue(title);
}
