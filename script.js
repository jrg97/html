let cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];
const formulario = document.getElementeById("formulario");
const fotoInput = document.getElementById("foto");
const previewFoto = document.getElementById("previewFoto");

let fotoSelecionada = "";
const mensagem = document.getElementById("mensagem");
const pessoa = {
    id: Date.now(),
    nome: nome,
    endereco: endereco,
    telefone: telefone,
    email: email,
    nacionalidade: nacionalidade,
    naturalidade: naturalidade,
    foto: fotoSelecionada
};

fotoInput.addEventListener("change", function(){
    const arquivo = fotoInput.files[0];

    if(arquivo){
        const leitor = new FileReader();

        leitor.onload = function(evento){
            fotoSelecionada = evento.target.result;
            previewFoto.src = fotoSelecionada;
            previewFoto.style.display = "inline-block";
        };
        leitor.readAsDataURL(arquivo);
    }
});

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const nome = document.getElementeById("nome").value;
    const endereco = document.getElementeById("endereco").value;
    const telefone = document.getElementeById("telefone").value;
    const email = document.getElementeById("email").value;
    const nacionalidade = document.getElementeById("nacionalidade").value;
    const naturalidade = document.getElementeById("naturalidade").value;

    mensagem.innerHTML = "Cadastro realizado com sucesso, " + nome + "!";
});

function limparFormulario(){
    formulario.reset();
    previewFoto.style.display = "none";
    fotoSelecionada = "";
    document.getElementeById("formulario").reset();
    document.getElementeById("mensagem").innerHTML = "";
}

cadastros.push(pessoa);
localStorage.setItem(
    "cadastros",
    JSON.stringify(cadastros)
)

document.getElementById("mensagem").innerHTML=
"Cadastro realizado com sucesso!";

formulario.reset();
previewFoto.style.display = "none";
fotoSelecionada = "";

mostrarCadastros();

function mostrarCadastros(){
    const lista = document.getElementById("listaCadastros");
    lista.innerHTML = "";

    cadastros.forEach(function(pessoa){
        const div = document.createElement("div");
        div.className = "cadastro";
        lista.appendChild(div);
    });
}

function excluiCadastro(id){
    cadastros = cadastros.filter(function(pessoa){
        return pessoa.id !== id;
    });
    localStorage.setItem(
        "cadastros",
        JSON.stringify(cadastros)
    );
    
    mostrarCadastros();
}
