//Função: define uma lista de ações que serão executadas quando a função for chamada. Palavra reservada para criar uma função em java function
function insert(num){ //inicio da função
    //variável é um espaço na memória que armazena uma informação para uso posterior. ao nomeá-la evite: nºs e letras maiúsculas no início, espaço entre palavras (use _ ou camelCase) e acentuaçõa.
    //captura o conteúdo atual exibido no elemento com id 'resultado' e armazena na variável 'número'
    var numero = document.getElementById('resultado').innerHTML
    //atualiza o conteúdo do elemento 'resultado' concatenando o valor atual com o nº ou o operador (+,-,/,*) passando no paramêtro num
    document.getElementById('resultado').innerHTML = numero + num
} //fim da função
//função para limpar todo o conteúdo que aparece no visor (tag p[id=resultado])
function clean(){
    //define que o conteúdo do elemento 'resultado' como um elemento de texto vazio, limpando a tela
    document.getElementById('resultado').innerHTML = "";
}
//função para apagar o último digito
function del(){
    //variável para armazenar a info atual do valor (tag p)
    var resultado = document.getElementById('resultado').innerHTML;
    //usa o método subtring para remover o último caracter digitando na tela, atualizando o valor. o método length retornará o tamanho da string, ou seja quantos elementos aparecem na tela.
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length - 1);
}
//a função 'calcular' irá avaliar a expressão da tela e realizar o calculo exibindo-o na tela
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    //se o conteúdo da tela (tag p) não estiver vazio
    if(resultado){
        //use a função eval() para avaliar a função matemática e retornar o resultado da operação
        document.getElementById('resultado').innerHTML = eval(resultado);
    } //senão, caso não haja nenhum conteúdo no visor
    else{
        // exiba uma msg de erro
        document.getElementById('resultado').innerHTML = 'N/A';
    }
}
document.addEventListener('keydown',
    function(event){
    var tecla = event.key
    if(/[0-9+\-*/]/.test(tecla)){
        insert(tecla)
    }
    //verifica se a tecla press é o enter
    else if (tecla == 'Enter'){
        calcular();//chama a função calcular
    }
    //verifica se a tecla press é o backspace
    else if (tecla == 'Backspace'){
        del();//chama a função del
    }
    //verifica se a tecla press é o delete
    else if (tecla == 'Delete'){
        clean();// chama a função clean - apaga tudo
    }
}
)