const { networkInterfaces } = require(`os`)
let nets = networkInterfaces()
let network = nets
// console.log(nets)

if(nets.en0) {
    if(nets.en0[0]) {
        if(nets.en0[0].address) {
            if(nets.en0[0].address[0] === `1` && nets.en0[0].address[1] === `9` && nets.en0[0].address[2] === `2`) {
                console.log("Connection detected: Natalie's MacBook wifi")
                network = nets.en0[0].address
            }
        }
    }
    if(nets.en0[1]) {
        if(nets.en0[1].address) {
            if(nets.en0[1].address[0] === `1` && nets.en0[1].address[1] === `9` && nets.en0[1].address[2] === `2`) {
                console.log("Connection detected: Jordan's MacBook wifi")
                network = nets.en0[1].address
            }
        }
    }
    if(nets.en0[3]) {
        if(nets.en0[3].address) {
            if(nets.en0[3].address[0] === `1` && nets.en0[3].address[1] === `9` && nets.en0[3].address[2] === `2`) {
                console.log("Connection detected: Mary's MacBook wifi")
                network = nets.en0[3].address
            }
        }
    }
}
if(nets.en4) {
    if(nets.en4[1]) {
        if(nets.en4[1].address) {
            if(nets.en4[1].address[0] === `1` && nets.en4[1].address[1] === `9` && nets.en4[1].address[2] === `2`) {
                console.log("Connection detected: Jordan's MacBook ethernet")
                network = nets.en4[1].address
            }
        }
    }
}
if(nets.wlp2s0) {
    if(nets.wlp2s0[0]) {
        if(nets.wlp2s0[0].address) {
            if(nets.wlp2s0[0].address[0] === `1` && nets.wlp2s0[0].address[1] === `9` && nets.wlp2s0[0].address[2] === `2`) {
                console.log("Connection detected: Jordan's Ubuntu laptop wifi")
                network = nets.wlp2s0[0].address
            }
        }
    }
}
if(nets.enx000ec677bfae) {
    if(nets.enx000ec677bfae[0]) {
        if(nets.enx000ec677bfae[0].address) {
            if(nets.enx000ec677bfae[0].address[0] === `1` && nets.enx000ec677bfae[0].address[1] === `9` && nets.enx000ec677bfae[0].address[2] === `2`) {
                console.log("Connection detected: Jordan's Ubuntu laptop ethernet")
                network = nets.enx000ec677bfae[0].address
            }
        }
    }
}
if(nets.Ethernet) {
    if(nets.Ethernet[1]) {
        if(nets.Ethernet[1].address) {
            if(nets.Ethernet[1].address[0] === `1` && nets.Ethernet[1].address[1] === `9` && nets.Ethernet[1].address[2] === `2`) {
                console.log("Connection detected: Jordan's Windows desktop ethernet")
                network = nets.Ethernet[1].address
            }
        }
    }
}

module.exports = network