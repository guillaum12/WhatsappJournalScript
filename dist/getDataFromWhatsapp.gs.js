"use strict";
function getChats() {
    const WHATSAPP_API = "QlF2mCqBGpnbsmKFYvUMqQwQFOHdSI2LbQnNtVTgDP08O5ZpJ6UCBZuMemAmCiP0e5NlDPUUqpa6T6C3mdVPKWcwM5347nFTiMhyt2t40uiOsbIl2BN4Zliy7kcYLCGx";
    const API_URL = "http://srv818040.hstgr.cloud/client/getChats/HELLO";
    const options = {
        method: "get",
        contentType: "application/json",
        headers: { "x-api-key": WHATSAPP_API },
        muteHttpExceptions: true,
    };
    Logger.log(`Sending Formatted Order request to: ${API_URL}`);
    const response = UrlFetchApp.fetch(API_URL, options);
    const responseCode = response.getResponseCode();
    const responseBody = response.getContentText();
    if (responseCode === 200) {
        const jsonResponse = JSON.parse(responseBody);
        if (jsonResponse.errors) {
            const error = `Error: ${JSON.stringify(jsonResponse.errors, null, 2)}`;
            Logger.log(error);
            errors.push(error);
            return null; // Return null on GraphQL error
        }
        return jsonResponse;
    }
}
