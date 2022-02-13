import TCPClosed from "./TCPClosed.js"

class TCPConnection {
    tcpState = new TCPClosed()

    activeOpen() {
        this.tcpState.activeOpen(this)
    }
    changeState(tcpState){
        this.tcpState = tcpState
    }
    close(){
        this.tcpState.close(this)
    }
    send(){
        this.tcpState.send(this)
    }

    getState() {
        return this.tcpState
    }
}

export default TCPConnection