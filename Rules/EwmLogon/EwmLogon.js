/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function EwmLogon(clientAPI) {
    clientAPI.executeAction("/Test/Actions/EwmLogon/EwmLogonToResource.action");
}
