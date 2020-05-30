(function (win, doc){
    'use strict'
    const cl = console.log;
    const $buttons = doc.querySelectorAll( '.button' );
    const $buttonX = doc.querySelectorAll('[data-js="buttonAction"]');
    var buttonValue;
    var lastButton;

    
    Array.prototype.forEach.call($buttons, (button)=>
    button.addEventListener('click', printValue)
    );

    Array.prototype.forEach.call($buttons, (button)=>
    button.addEventListener('click', campararValor)
    );
    
    Array.prototype.forEach.call($buttonX, (buttonAction)=>
    buttonAction.addEventListener('click', actualButton)
    );


    function actualButton() {
        if (this.value === 'rebut') {
            rebutArray($buttons);
        }
        buttonValue = this.value;
    }

    function printValue() {
        if(buttonValue === undefined || buttonValue === null) {
            alert('escolha "X" ou  "O" para ser sua peça')
            return;
        }
        this.innerText = buttonValue;
    }

    
    function rebutArray(arrayLike) {
        for(let array of arrayLike) {
        array.innerText = '';
        }
    }

    function valor(valor) {
        return doc.querySelector('[value=\"' + valor + '\"').innerText;
    }

    
    function lastPlayer(lastP){
        let lastPlayer;
        if( lastP === lastPlayer )
        return alert('O jogador não pode jogar duas vezes seguida')

        lastPlayer = buttonValue;
    }

    function campararValor() {

        lastPlayer( valor(this.value) )

        let button = valor(this.value);

        if (
            valor('1-1') !=='' && valor('1-1') === valor('1-2') && valor('1-2') === valor('1-3') ||
            valor('2-1') !=='' && valor('2-1') === valor('2-2') && valor('2-2') === valor('2-3') ||
            valor('3-1') !=='' && valor('3-1') === valor('3-2') && valor('3-2') === valor('3-3') ||
            
            valor('1-1') !=='' && valor('1-1') === valor('2-2') && valor('2-2') === valor('3-3') ||
            valor('1-3') !=='' && valor('1-3') === valor('2-2') && valor('2-2') === valor('3-1') ||

            valor('1-1') !=='' && valor('1-1') === valor('2-1') && valor('2-1') === valor('3-1') ||
            valor('1-2') !=='' && valor('1-2') === valor('2-2') && valor('2-2') === valor('3-2') ||
            valor('1-3') !=='' && valor('1-3') === valor('2-3') && valor('2-3') === valor('3-3')
            ) {
                switch (button) {
                    case "X":
                        alert("X venceu")
                        break;
                    case "O":
                        alert("O venceu")
                        break;
                    default:
                        alert('empate')
                        break;
                }
                rebutArray($buttons);
            }
    }

})(window, document);

(parte_que_nao_sei_o_que_fazer )=>{
    //const $html = doc.querySelector('html');

    /* const colorDiv = win.getComputedStyle($html).getPropertyValue('--color-divs');
    cl(colorDiv);
    $html.style.setProperty("--color-divs", "red");
    cl(colorDiv);
 */
}

