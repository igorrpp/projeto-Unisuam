// teste para trocar o que estiver scrito no id perfil
// novoTexto = document.getElementById('perfil')
// novoTexto.textContent = 'Mudou'


//  Pegar as informações do localStorage
nome_completo = localStorage.getItem('usuario')
recuperar_nome = JSON.parse(nome_completo);

// Pegar/selecionar os valores dentro de cada id para substituir
nome = document.getElementById('inputNome')
email = document.getElementById('inputEmail')
data_nascimento = document.getElementById('inputNascimento')
genero = document.getElementById('inputGenero')
senha = document.getElementById('inputSenha')


console.log(recuperar_nome.nome)

// substitui os valores selecionado acima para o que vem do localStorage
/*Descomentar aqui e descomentar a ul da página verPerfil.html
nome.textContent = recuperar_nome.nome
email.textContent = recuperar_nome.email
data_nascimento.textContent = recuperar_nome.data_nascimento
genero.textContent = recuperar_nome.genero*/


// .textContent serve para trocar os valores dentro de pelo id/class 
// nome.textContent = recuperar_nome.nome

// .value serve para pegar/trocar os valores a partir da propiedade "value" em um input exemplo
// <input value="" vai substituir o que estiver dentro do value
// nome.value = 'este é o novo conteúdo'


nome.value = recuperar_nome.nome
email.value = recuperar_nome.email
data_nascimento.value = recuperar_nome.data_nascimento
genero.value = recuperar_nome.genero

senha.value = recuperar_nome.senha
console.log(senha.value)
console.log(typeof senha.value)


function editar() {
    // event.preventDefault();
  

    let v_nome = document.getElementById('inputNome').value
    let v_email = document.getElementById('inputEmail').value
    let v_nascimento = document.getElementById('inputNascimento').value
    let v_genero = document.getElementById('inputGenero').value
    let v_senha = document.getElementById('inputSenha').value
    let v_confirmarSenha = document.getElementById('inputConfirmarSenha').value

    if (v_senha === v_confirmarSenha) {

        let usuario = {
            nome: v_nome,
            email: v_email,
            data_nascimento: v_nascimento,
            genero: v_genero,
            senha: v_senha,
        }

        localStorage.setItem('usuario', JSON.stringify(usuario));
        
        alert('Perfil foi editado com sucesso!')
        // window.location.href = "login.html";


    } else {
        alert('Senhas não são iguais, digite novamente!')
    }






}









