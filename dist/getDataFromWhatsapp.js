"use strict";
function getDataFromWhatsapp(apiSuffix, method) {
    const WHATSAPP_API = "QlF2mCqBGpnbsmKFYvUMqQwQFOHdSI2LbQnNtVTgDP08O5ZpJ6UCBZuMemAmCiP0e5NlDPUUqpa6T6C3mdVPKWcwM5347nFTiMhyt2t40uiOsbIl2BN4Zliy7kcYLCGx";
    // client/getChats/HELLO
    const API_URL = `http://srv818040.hstgr.cloud/${apiSuffix}`;
    const options = {
        method,
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
            return null; // Return null on GraphQL error
        }
        return jsonResponse;
    }
}
