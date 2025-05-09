function writeChatsId(parsedChats: Chats[]) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const sheet = ss.getSheetByName("Whatsapp Chat IDs")!;

  const listChats = parsedChats.map((parsedChat) => {
    return [parsedChat.name, parsedChat.chatId];
  });

  sheet
    .getRange(2, 1, listChats.length, listChats[0].length)
    .setValues(listChats);
}
