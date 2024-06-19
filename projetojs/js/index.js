//declarar as variaveis para armzenar o meu botao "no"
let topMod = 0;
let leftMod = 0;

/*adicionando um evento ao corpo da pagina (body) para que a funcao do botao seja chamada o mouse se mover*/
$("body").on("mousemove", webHandler);

//criar a funcao webHandler (botao no desktop)
function webHandler(event){
    //definindo posicao inicial do botao
    let button = $('#no').position();
    let buttonCenter = {
        //colocando uma margem extra de 100px de largura e 40px de altura
        x: button.left + 50,
        y: button.top + 15
    }
    //calcular a distancia entre o cursor do mouse e o centro do botao
    let distance = Math.sqrt(Math.pow(event.pageX - buttonCenter.z, 2))

}