import TCPEstablished from "./TCPEstablished.js";
import TCPState from "./TCPState.js";

class TCPListen extends TCPState {
    name = 'listen'
    send(tcpConnection) {
        this.changeState(tcpConnection, new TCPEstablished())
    }
}

export default TCPListen