const { networkInterfaces } = require(`os`)
let nets = networkInterfaces()
let network = nets
// console.log(nets)

// Devices arranged from most likely to least likely to be using, then from least ideal to most ideal connection
if(nets.en0) {
    console.log("Connection detected: Jordan's MacBook wifi")
    network = nets.en0[1].address
}
if(nets.en4) {
    console.log("Connection detected: Jordan's MacBook ethernet")
    network = nets.en4[1].address
}
if(nets.wlp2s0) {
    console.log("Connection detected: Jordan's Ubuntu laptop wifi")
    network = nets.wlp2s0[0].address
}
if(nets.enx000ec677bfae) {
    console.log("Connection detected: Jordan's Ubuntu laptop ethernet")
    network = nets.enx000ec677bfae[0].address
}
if(nets.Ethernet) {
    console.log("Connection detected: Jordan's Windows desktop ethernet")
    network = nets.Ethernet[1].address
}
if(nets.en0) {
    console.log("Connection detected: Natalie's MacBook wifi")
    network = nets.en0[0].address
}

module.exports = network