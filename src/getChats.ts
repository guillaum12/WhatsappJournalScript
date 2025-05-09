function getChats(): Chats[] {
  const apiSuffix = "client/getChats/HELLO";
  const method = "get";

  const chatsData = getDataFromWhatsapp(apiSuffix, method);

  const chats = chatsData.chats;

  const parsedChats: Chats[] = [];

  //Use less to change

  chats.forEach((chat: any) => {
    const name = chat.name || "(Sans nom)";
    const chatId = chat.id?._serialized || "N/A";

    parsedChats.push({
      name,
      chatId,
    });
  });

  return parsedChats;
}
