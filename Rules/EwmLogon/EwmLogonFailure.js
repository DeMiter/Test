/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function EwmLogonFailure(clientAPI) {
    //let pageProxy = clientAPI.getPageProxy();
    let actionResult = clientAPI.getActionResult("EwmLogonActionResult");
    let errorString = actionResult.error.responseBody;
    let message = JSON.parse(errorString).error.message;
    clientAPI.setActionBinding({
        "Message": message
    });
    return clientAPI.executeAction("/Test/Actions/EwmLogon/EwmLogonFailureMessage.action");
}
