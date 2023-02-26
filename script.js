const {ethers}=require("ethers")
async function connect() {
    if(typeof window.ethereum !=="undefined"){
        await window.ethereum.request({method:"eth_requestAcconts"})
        document.getElementById("connectButton").innerHTML="connected!"
    }
    else{
        document.getElementById("connectButton").innerHTML="please install metamask!"
    }
    
}
