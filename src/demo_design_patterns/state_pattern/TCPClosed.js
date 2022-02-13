import TCPEstablished from "./TCPEstablished.js";
import TCPState from "./TCPState.js";

class TCPClosed extends TCPState {
    name = 'closed'
    
    activeOpen(tcpConnection) {
        this.changeState(tcpConnection, new TCPEstablished())
    }
}

export default TCPClosed