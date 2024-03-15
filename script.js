let textArea = document.querySelector('.textArea');
textArea.addEventListener('focus', function () {
    this.placeholder = '';
});
textArea.addEventListener('blur', function() {
    if (!this.value) {
        this.placeholder = 'Digite seu texto';
    }
});

let mensagem = document.querySelector('.mensagem');

function btnEncriptar() {
    let textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = '';
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]; 
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    let textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = '';
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]; 
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function verificaTextArea() {
    let textArea = document.querySelector('.textArea');
    let btnLimpar = document.querySelector('.botao-limpar');
    if (textArea.value !== '') {
        btnLimpar.style.display = 'block';
    } else {
        btnLimpar.style.display = 'none'
    }
}

let placeholderOriginal = textArea.placeholder;

function limpar() { 
    let textArea = document.querySelector('.textArea');
    textArea.value = '';
    textArea.placeholder = placeholderOriginal;
    verificaTextArea();
}


function copiar() {
    mensagem.select();
    navigator.clipboard.writeText(mensagem.value);
    alert('Texto copiado para a área de transferência.')
}

function someTexto() {
    let mensagem = document.querySelector('.mensagem');
    let texto = document.querySelector('.mensagem-nao-encontrado');
    if (mensagem.value === '') {
        texto.style.display = 'block';
    } else {
        texto.style.display = 'none';
    }
}