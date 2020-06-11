
import { takeLatest, call, put, take } from 'redux-saga/effects';
import {URL} from '../Constants'
import { eventChannel } from 'redux-saga';

function createEventChannel(mySocket) {
    return eventChannel(emit => {
        mySocket.onmessage = (message) => {
            return emit(JSON.parse(message.data))
        };
        return () => {
            mySocket.close();
        };
    });
    }
function* initializeWebSocketsChannel(payload) {
  const mySocket = new WebSocket(URL);
  const level = payload.payload;
  mySocket.onopen = () => {
        mySocket.send(JSON.stringify({ 
            method: "subscribe", 
            topic: "marketDepth", 
            symbols: ["BNB_BTCB-1DE"],
        }))
    }
    mySocket.onerror = (error) => {
        console.log('WebSocket error ' + error)
        console.dir(error)
    }
  const channel = yield call(createEventChannel, mySocket);
  while (true) {
    const {data} = yield take(channel);
    yield put({type: 'WEBSOCKETS_MESSAGE_RECEIVED', data});
  }
}
export default function* rootSaga(){
    yield takeLatest('INIT_WEB_SOCKETS_CHANNEL', initializeWebSocketsChannel);
}