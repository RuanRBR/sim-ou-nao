// Declarar as variáveis para armazenar a posição do meu botão "no"
let topMod = 0;
let leftMod = 0;

/* Adicionando eventos ao corpo da página (body) para que
a função do botão (handler) seja chamada quando o mouse se mover ou quando houver toque */
$("body").on("mousemove touchmove", handler);

// Criar a função handler para lidar com eventos de mouse e toque
function handler(event) {
    event.preventDefault(); // Prevenir comportamento padrão em dispositivos móveis
    let pageX, pageY;

    if (event.type === "touchmove") {
        pageX = event.originalEvent.touches[0].pageX;
        pageY = event.originalEvent.touches[0].pageY;
    } else {
        pageX = event.pageX;
        pageY = event.pageY;
    }

    // Definindo posição inicial do botão
    let button = $('#no').position();
    // Calculando o centro do botão
    let buttonCenter = {
        x: button.left + 30,
        y: button.top + 10
    };

    // Calcular a distância entre o cursor do mouse ou toque e o centro do botão
    let distance = Math.sqrt(Math.pow(pageX - buttonCenter.x, 2) + Math.pow(pageY - buttonCenter.y, 2));

    // Verificar se o mouse ou toque está a menos de 80 px do botão
    if (distance < 80) {
        var angle = calculateAngle({ pageX: pageX, pageY: pageY }, buttonCenter, distance);
        // Se o mouse ou toque está próximo do botão, a função calculateAngle é chamada para calcular
        // o seno e cosseno baseado na posição do mouse ou toque em relação ao botão
        // para que ele saia de perto
        leftMod += 10 * angle.cos * (pageX < buttonCenter.x ? 1 : -1);
        topMod += 10 * angle.sin * (pageY < buttonCenter.y ? 1 : -1);

        // Colocar uma nova posição no botão a partir de CSS com os valores definidos pelas funções
        $('#no').css({ top: topMod, left: leftMod, position: 'relative' });
    }
}

// Criando função que vai calcular de fato o seno e o cosseno
function calculateAngle(mouse, center, distance) {
    // Math.abs retorna um valor absoluto, garantindo que não tenha valores negativos
    let sin = Math.abs(mouse.pageY - center.y) / distance;
    let cos = Math.abs(mouse.pageX - center.x) / distance;
    return { sin: sin, cos: cos };
}
