/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function EwmLogonSuccess(clientAPI) {
    let pageProxy = clientAPI.getPageProxy();
    pageProxy.setActionBinding({
        "Message": "Successfull call!"
    });
    return pageProxy.executeAction("/Test/Actions/EwmLogon/SuccessfullToastMessage.action");
}
