import TCPListen from "./TCPListen.js";
import TCPState from "./TCPState.js";

class TCPEstablished extends TCPState {
    name = 'established'
    
    close(tcpConnection) {
        this.changeState(tcpConnection, new TCPListen())
    }
}

export default TCPEstablished