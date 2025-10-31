fetch("olaMundo.json").then((response) => {
    response.json().then((olaMundo) => {
        console.log(olaMundo.notebook[0].Processador.Nucleo

        );
    })
})
