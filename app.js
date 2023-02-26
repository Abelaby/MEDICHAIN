document.addEventListener('DOMContentLoaded', async () => {

    if(typeof window.ethereum != 'undefined'){
        console.log('MetaMask is installed!')

        var accounts = await ethereum.request({ method: 'eth_requestAccounts'})
        console.log(accounts);
    }
    else{
        alert('please install metamask !')
    }
})