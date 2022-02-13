import TCPConnection from "./TCPConnection.js";

let tcp = new TCPConnection()

console.log(1, 'init state', tcp.getState())

tcp.activeOpen()
console.log(2, 'after active', tcp.getState())

tcp.close()
console.log(3, 'after close', tcp.getState())

tcp.send()
console.log(4, 'after send', tcp.getState())