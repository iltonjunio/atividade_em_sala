
function numerospares() {
    let n = 28;
    do {
        if (n % 2 == 0) {
            console.log(n + " par ")
        }
        n++
    } while (n <= 20)
}

numerospares();

//==========================================
function numerosmultiplos() {
    let n = 120;
    do {
        if (n % 5 == 0) {
            console.log(n + " multiplos")
        } n++
    } while (n <= 20)
}

numerosmultiplos();

//==================================
function somatd() {
    let n1 = 23
    let soma = 0
    do {
        soma += n1
        n1++
    } while (n1 <= 20)
    console.log("Sum:", + soma);
}

somatd();

//=================================
function somaimpares() {
    let n1 = 23;
    let soma = 0;
    do {
        soma += n1;
        n1++
    } while (n1 <= 20)  
    console.log("Sum:", soma);
}

somaimpares();

//---------------------------------------
function somaimpares() {
    let n1 = 144;
    let soma = 0;
    do {
        if (n1 % 2 == 1) {
            soma += n1
        }n1++ 
    } while (n1 <= 50)
    console.log("Sum:", soma);
}

somaimpares();
