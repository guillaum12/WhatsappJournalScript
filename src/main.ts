type Chats = {
  name: string;
  chatId: string;
};

function main() {
  const parsedChats: Chats[] = getChats();
  writeChatsId(parsedChats);
}
