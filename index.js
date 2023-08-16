// For BOLD//
document.getElementById('btn-bold').addEventListener('click', function () {
    const textAreaField = document.getElementById('text-area-field');

    if (textAreaField.style.fontWeight === 'bold') {
        textAreaField.style.fontWeight = 'normal';
    }
    else {
        textAreaField.style.fontWeight = 'bold';
    }
});

//For Italic//
document.getElementById('btn-italic').addEventListener('click', function () {
    const textAreaField = document.getElementById('text-area-field');

    if (textAreaField.style.fontStyle === 'italic') {
        textAreaField.style.fontStyle = 'normal';
    }
    else {
        textAreaField.style.fontStyle = 'italic';
    }
});

//For UnderLine//
document.getElementById('btn-underline').addEventListener('click', function () {
    const textAreaField = document.getElementById('text-area-field');

    if (textAreaField.style.textDecoration === 'underline') {
        textAreaField.style.textDecoration = 'none';
    }
    else {
        textAreaField.style.textDecoration = 'underline';
    }
});

//For leftAlign//
document.getElementById('btn-left').addEventListener('click', function () {
    const textAreaField = document.getElementById('text-area-field');

    if (textAreaField.style.textAlign === 'left') {
        textAreaField.style.textAlign = 'initial';
    }
    else {
        textAreaField.style.textAlign = 'left';
    }
});

//For centerAlign//
document.getElementById('btn-center').addEventListener('click', function () {
    const textAreaField = document.getElementById('text-area-field');

    if (textAreaField.style.textAlign === 'center') {
        textAreaField.style.textAlign = 'initial';
    }
    else {
        textAreaField.style.textAlign = 'center';
    }
});

//For justifyAlign//
document.getElementById('btn-justify').addEventListener('click', function () {
    const textAreaField = document.getElementById('text-area-field');

    if (textAreaField.style.textAlign === 'justify') {
        textAreaField.style.textAlign = 'initial';
    }
    else {
        textAreaField.style.textAlign = 'justify';
    }
});

//For rightyAlign//
document.getElementById('btn-right').addEventListener('click', function () {
    const textAreaField = document.getElementById('text-area-field');

    if (textAreaField.style.textAlign === 'right') {
        textAreaField.style.textAlign = 'initial';
    }
    else {
        textAreaField.style.textAlign = 'right';
    }
});

//for fontIncrease

let beforeIncreaseFontSize = 16;

document.getElementById('btn-font-up').addEventListener('click', function () {
    const textAreaField = document.getElementById('text-area-field');

    if (beforeIncreaseFontSize < 30) {
        beforeIncreaseFontSize += 2;
        textAreaField.style.fontSize = beforeIncreaseFontSize + 'px';
    }
});

// For fontDecrease

document.getElementById('btn-font-down').addEventListener('click', function () {
    const textAreaField = document.getElementById('text-area-field');


    if (beforeIncreaseFontSize > 16) {
        beforeIncreaseFontSize -= 2;
        textAreaField.style.fontSize = beforeIncreaseFontSize + 'px';
    }
});

//For deleteText

document.getElementById('btn-delete').addEventListener('click',function(){
    const textAreaField = document.getElementById('text-area-field');
    textAreaField.value = '';
});

// For inputColor 
document.getElementById('btn-apply').addEventListener('click',function(){
    const textAreaField = document.getElementById('text-area-field');
    const colorPicker = document.getElementById('input-color');
    const selectedColor = colorPicker.value;

    textAreaField.style.color = selectedColor;
});
