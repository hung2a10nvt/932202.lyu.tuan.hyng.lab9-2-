a = '';
let b = '';
c = true;
znak = true;
viv = document.querySelector('#field');
vtorviv = document.querySelector('#vvod')
vtorviv.value = 0;

Clik = (event) => {
    content = event.target.textContent;
    switch (content) {
        case '/':
            if (znak) {
                a = div(a);
                viv.value = b;
                vtorviv.value = a;
                a = '';
                b += ' ';
                break;
            }
            else break;
        case '*':
            if (znak) {
                a = mnog(a);
                viv.value = b;
                vtorviv.value = a;
                a = '';
                b += ' ';
                break;
            }
            else break;
        case '+':
            if (znak) {
                a = sum(a);
                viv.value = b;
                vtorviv.value = a;
                a = '';
                b += ' ';
                break;
            }
            else break;
        case '-':
            if (znak) {
                a = minus(a);
                viv.value = b;
                vtorviv.value = a;
                a = '';
                b += ' ';
                break;
            }
            else break;
        case 'C':
            a = clear(a);
            vtorviv.value = a;
            viv.value = a;
            a = '';
            break;
        case '←':
            a = remElem(a);
            vtorviv.value = a;
            viv.value = b + a;
            break;
        case '=':
            a = calc(a);
            vtorviv.value = a;
            viv.value = '';
            b = '';
            a = '';
            break;
        case '.':
            a = dot(a);
            vtorviv.value = a;
            viv.value = b + a;
            break;
        default:
            znak = true;
            a += event.target.textContent;
            viv.value = b + a;
            vtorviv.value = a;
    }
};


calc = (a) => {
    a = eval(b + a);
    c = true;
    znak = true;
    return a;
}

clear = (a) => {
    a = '0';
    b = '';
    c = true;
    znak = true;
    return a;
}

function remElem() {
    if (a) { 
        a = a.slice(0, -1); 
        if (!a.includes('.')) canEnterDot = true; 
        vtorviv.value = a || '0';
        viv.value = b + a; 
    } else if (b) { 
        b = b.trim().slice(0, -1).trim(); 
        lastOperator = ''; 
        viv.value = b; // 
    }
    return a;
}

dot = (a) => {
    if (c) {
        a += '.';
        c = false;
        return a;
    }
    else return a;
}

mnog = (a) => {
    if (znak) {
        b += a + ' *';
        a = '* ';
        c = true;
        znak = false;
        return a;
    } else return a;
}

div = (a) => {
    if (znak) {
        b += a + ' /';
        a = '/ ';
        c = true;
        znak = false;
        return a;
    } else return a;
}
minus = (a) => {
    if (znak) {
        b += a + ' -';
        a = '- ';
        c = true;
        znak = false;
        return a;
    } else return a;
}

sum = (a) => {
    if (znak) {
        b += a + ' +'
        a = '+';
        c = true;
        znak = false;
        return a;
    } else return a;
}

document.querySelectorAll("td").forEach(element => {
    element.addEventListener("click", Clik);
}) 