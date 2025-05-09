function writeContacts(contacts: Contact[]) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const sheet = ss.getSheetByName("Whatsapp Chat IDs")!;

  const listChats = contacts.map((contact) => {
    return [contact.name, contact.chatId, contact.type, contact.number];
  });

  sheet.getRange(2, 1, listChats.length, listChats[0].length).clearContent();

  sheet
    .getRange(2, 1, listChats.length, listChats[0].length)
    .setValues(listChats);
}
