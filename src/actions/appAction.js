  
const types = {
    INIT_WEB_SOCKETS_CHANNEL: 'INIT_WEB_SOCKETS_CHANNEL',
    WEBSOCKETS_MESSAGE_RECEIVED: 'WEBSOCKETS_MESSAGE_RECEIVED'
};
const actions = {
    initWebsocketsChannel: (levelValue) => ({
        type: types.INIT_WEB_SOCKETS_CHANNEL,
        payload: levelValue
    }),
    webSocketsMessageReceived: (payload) => ({
        type: types.WEBSOCKETS_MESSAGE_RECEIVED,
        payload,
    })
}
export { types };
export default actions;