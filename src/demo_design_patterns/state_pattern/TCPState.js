class TCPState {
    name = undefined
    
    activeOpen(tcpConnection) {}
    changeState(tcpConnection, tcpState){
        tcpConnection.changeState(tcpState)
    }
    close(tcpConnection){}
    send(tcpConnection){}
}

export default TCPState