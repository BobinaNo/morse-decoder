const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    
    for(let i=0;i<expr.length;i+= 10){
        let decade = expr.slice(i,i+10);

        if(decade === '**********'){
            result+=' ';
        } else {
            let letter = '';
            for (let j=0;j<10;j+=2){
                let chair = decade.slice(j,j+2);
                if(chair==='10'){
                    letter+='.'
                } else if(chair==='11'){
                    letter+='-'
                }
            }
           result+=MORSE_TABLE[letter]
        }

    }

return result
    
    
}

module.exports = {
    decode
}