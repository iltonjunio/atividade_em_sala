function fibonacci() {
    let penultimo = 0
    let ultimo = 1

    while (ultimo <= 500) {
        let proximo = penultimo + ultimo
        if (proximo <= 500) {
            console.log(proximo)
        }
        penultimo = ultimo
        ultimo = proximo
    }
}

fibonacci();
