var alunos = [
    {
        nome: "Leonardo Leopardo",
        idade: 25,
        email: "therealcodmaster1998@gmail.com"
    },
    {
        nome: "Bruninho Rei Delas",
        idade: 19,
        email: "bruniinhslipknot@gmail.com"
    },
    {
        nome: "João Peido Feijão",
        idade: 29,
        email: "joaoloks8bugre@gmail.com"
    },
    {
        nome: "Larissa Albuquerque",
        idade: 12,
        email: "larissinhassanhada@outlook.com.br"
    },
    {
        nome: "Dom Casporra",
        idade: 35,
        email: "flickmandoformiguinhasz@hotmail.com"
    },
    {
        nome: "Maicaca fia do Baitaca",
        idade: 40,
        email: "bostadevaca123@gmail.com"
    }
];

const body = window.document.getElementsByTagName("body")[0];

const ol = window.document.createElement("ol");


alunos.forEach((item)=>{
    const li = window.document.createElement("li");
    // li.innerHTML = "Nome: " + item.nome + " idade: " + item.idade + " email: " + item.email;
    li.innerHTML = `Nome:${item.nome} Idade:${item.idade} Email:${item.email}`
    ol.appendChild(li);
});

body.appendChild(ol);

console.log(alunos)

function AdicionaAluno(){
    const input = window.document.getElementById("cadastro");

    alunos.push(
        {
            nome: input.value,
            idade: 40,
            email: "bostadevaca123@gmail.com"
        }
    );

    console.log(alunos);
}