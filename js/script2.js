function numerospares() {
    let n = 2;
    while (n <= 20) {
        console.log(n);
        n += 2;
    }
}

//----------------------------------
function numerospares() {
    let n = 1;
    while (n <= 20) {
        if (n % 2 == 0) {
            console.log(n + " par ")
        }
        n++
    }
}

numerospares();

function numerosmultiplos() {
    let n = 1;
    while (n <= 20) {
        if (n % 5 == 0) {
            console.log(n + " multiplos")
        }
        n++
    }
}

numerosmultiplos();

function somatd() {
    let n1 = 1
    let soma = 0

    while (n1 <= 20) {
        soma += n1
        n1++
    }

    console.log("Sum:", + soma);
}

somatd();

function somaimpares() {
    let n1 = 1;
    let soma = 0;

    while (n1 <= 20) {
        soma += n1;
        n1 += 2;
    }

    console.log("Sum:", soma);
}

somaimpares();
//---------------------------------------
function somaimpares() {
    let n1 = 1;
    let soma = 0;

    while (n1 <= 20) {
        if (n1 % 2 == 1) {
            soma += n1
        }
        n1++
    }

    console.log("Sum:", soma);
}

somaimpares();