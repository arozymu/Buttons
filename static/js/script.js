var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i=0; i<all_buttons.length; i++) {
    copyAllButtons.push(all_buttons);
}

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonsRed();
    } else if (buttonThingy.value === 'green') {
        buttonsGreen();
    } else if (buttonThingy.value === 'reset') {
        buttonColorReset();
    }
}