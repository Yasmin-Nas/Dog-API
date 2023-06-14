'use strict'

const pesquisaCachorro = async (raca) => {
    const url = `https://dog.ceo/api/breed/${raca}/images`

    //Fetch é uma API
    const response = await fetch(url)

    const listaCachorros = await response.json()

   return listaCachorros.message
}

export{
    pesquisaCachorro
}