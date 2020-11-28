var quote = []
quote [0] = '"Si los novios de mis hijas las hacen llorar dos o tres veces, van a tener un accidente."';
quote [1] = '"Ganarle a River es como que tu mamá te venga a despertar con un beso por la mañana."';
quote [2] = '"Yo me equivoqué y pagué, pero la pelota no se mancha."';
quote [3] = '"Si voy al banco es para sacar plata, fiera."';
quote [4] = '"Si a Sampaoli le lanzas la pelota, te la devuelve con la mano."';
quote [5] = '"Me había propuesto hacerle dos goles a Gatti, pero ahora que me dijo "gordito" le voy a meter cuatro."';
quote [6] = '"Si Pelé es Beethoven, yo soy el Ron Wood, Keith Richards y Bono del fútbol, todos juntos. Porque yo era la pasión del fútbol."'
quote [7] = '"Llegar al área y no poder patear al arco es como bailar con tu hermana."'
quote [8] = '"Fui, soy y seré drogadicto."'
quote [9] = '"Quedar afuera de un Mundial sólo es comparable a ver cómo le pegan a tu vieja y vos estás atado a una silla."'
quote [10] = '"Tampoco muerto encontraría paz. Me utilizan en vida, y encontrarán el momento de hacerlo estando muerto."'
quote [11] = '"Mis hijas legítimas son Dalma y Gianinna. Los demás son hijos de la plata o de la equivocación."'
quote [12] = '"Crecí en un barrio privado de Buenos Aires. Privado de luz, de agua, de teléfono."'
quote [13] = '"Con mi enfermedad yo di ventajas. ¿Sabes qué jugador hubiera sido yo de no haber tomado drogas?."'
quote [14] = '"Yo nunca quise ser un ejemplo."'
quote [15] = '"Con la cocaína no existo. Soy como Ruggeri que no sabe hacer dos jueguitos."'
quote [16] = '"Yo quería ir a Estados Unidos, pero el cabeza de termo de Clinton no me deja entrar."'
quote [17] = '"Te voy a contar un secreto Shilton: fue con la mano."'
quote [18] = '"Con perdón de las damas, que la sigan chupando."'
quote [19] = '"Que esquiusmi, ni esquiusmi. La próxima te meto una patada en los huevos."'
quote [20] = '"Blatter me quiere como un hijo. Sí... como un hijo de puta."'
quote [21] = '"Me gusta pegarle a la gente cuando tiene las dos manos arriba. Cuando las tiene bajas, me gusta ayudarla."'
quote [22] = '"La droga es un pacman que te va comiendo toda tu familia."'

window.onkeydown=teclado;

function maradonaQuotes() {
var quoteNumber = Math.floor(Math.random() * (quote.length));
document.getElementById("quote").innerHTML = quote[quoteNumber];
document.getElementById("diego").innerHTML = "Diego Armando Maradona";
}

function teclado(e){
    let codigo_tecla=e.keyCode;		
    if (codigo_tecla == 37 || codigo_tecla == 39) {
        maradonaQuotes();
    }
    else if (codigo_tecla == 13) {
        maradonaQuotes();
    }
}