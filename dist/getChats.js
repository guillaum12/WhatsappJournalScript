"use strict";
function getChats() {
    const apiSuffix = "client/getChats/HELLO";
    const method = "get";
    const chatsData = getDataFromWhatsapp(apiSuffix, method);
    const chats = chatsData.chats;
    const parsedChats = [];
    chats.forEach((chat) => {
        var _a;
        const name = chat.name || "(Sans nom)";
        const chatId = ((_a = chat.id) === null || _a === void 0 ? void 0 : _a._serialized) || "N/A";
        parsedChats.push({
            name,
            chatId,
        });
    });
    return parsedChats;
}
