let nome = document.getElementById("nome");
let btn = document.getElementById("btn-form");

btn.addEventListener('click', function(){
    window.alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
})
