function getContacts() {
  const apiSuffix = "client/getContacts/HELLO";
  const method = "get";

  const data = getDataFromWhatsapp(apiSuffix, method);

  const contacts = data.contacts;

  const parsedContacts: Contact[] = [];

  //Use less to change

  contacts.forEach((contact: any) => {
    const chatId = contact.id?._serialized || "N/A";
    const server = contact.id?.server;

    // Theses contacts are hide profil for community functionality
    if (server === "lid") {
      return;
    }

    const name = contact.name || "";
    const number = contact.number || "";
    const type = contact.isGroup ? "Group" : "User";

    parsedContacts.push({
      number,
      name,
      type,
      chatId,
    });
  });

  return parsedContacts;
}
