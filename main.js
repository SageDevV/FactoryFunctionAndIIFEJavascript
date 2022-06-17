// Immediately Invoked Function Expression
(function (idade, genero, musica) {

    const textIdade = 'idade:';
    const textGenero = 'gênero:';
    const textMusica = 'musica:';

    function printer(idade, genero, musica) {
        const textResult = `${textIdade} ${idade} ${textGenero} ${genero} ${textMusica} ${musica}`;
        console.log(textResult);
        return textResult;
    }
    function modifierPrinter() {
        let expressionResult = printer(idade, genero, musica);
        expressionResult = 'Expressão mudada';
        console.log(expressionResult);
    }
    modifierPrinter();
})(25, 'Hard Rock', 'System of Down');

//Factory Function
function createPerson(name, age, weight) {
    return {
        name,
        age,
        weight,
        saySomething(something) {
            return `My name is ${this.name} and my age is ${this.age} ${something} `;
        }
    };
}
const pedro = createPerson('Pedro', 23, '76kg');
console.log(pedro.saySomething('and i like to play games.'))

function createSomething(a, b, c) {
    return {
        a,
        b,
        c,

        createD() {
            return 'd';
        },

        get createE() {
            return 'e';
        },

        set createF(fValor) {
            console.log(fValor);
        }
    }
}

const x = createSomething();
x.a = 'a';
console.log(x.a);
x.b = 'b';
console.log(x.b);
x.c = 'c';
console.log(x.c);

console.log(x.createD());

console.log(x.createE);

x.createF = 'f';