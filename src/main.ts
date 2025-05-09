type Chats = {
  name: string;
  chatId: string;
};

type Contact = {
  name: string;
  type: string;
  chatId: string;
  number: string;
};

// function main() {
//   //const chats: Chats[] = getChats();
//   // writeChatsId(chats);
// }

function main() {
  const contacts: Contact[] = getContacts();
  writeContacts(contacts);
}
