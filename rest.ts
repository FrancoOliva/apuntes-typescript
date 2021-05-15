const cartapostres = (postre:string, ...frutas:string[]):void => {
    console.log(`El postre es ${postre} y tiene ${frutas}`)
}

cartapostres('postre1', 'naranja','platanos','manzanas')
