export const anaylzeString = (Str) =>{
    let answer = {};
    const incoming = Str.trim();
    const lowerCase = incoming.toLowerCase();
    console.log(lowerCase);
    const length = incoming.length;
    if(length == 7){
        const arr = Str.split('');
        let logicString = '';
        for(let i = 0 ; i < length ; i++){
            logicString += arr[i];
            logicString += ` (${i+1}) `;
            if(i != length - 1){
                logicString += ' + '
            }
        }
        answer.message = 'Message is Clear!';
        answer.logic = logicString + ` = ${length}`;
        answer.decision =  true;
    }else if(lowerCase == 'thala' || lowerCase == 'dhoni' || lowerCase == 'mahendra singh dhoni' || lowerCase == 'mahi' || lowerCase == 'mahendra' || lowerCase == 'mahendrasingh' || lowerCase == 'mahendra singh'|| lowerCase == 'seven' || lowerCase == 7){
        answer.message = 'Message is Clear!';
        answer.logic = incoming + ` = DHONI(7)`;
        answer.decision =  true;
    }else if(incoming){
        answer.message = 'Message is Clear!';
        let logicString = createLogicforSeven(incoming);
        answer.logic = logicString + ` = DHONI(7)`;
        answer.decision = true;
    }else{
        answer.message = 'Message is Not Clear!';
        answer.decision = false;
    }

    return answer;
}

function createLogicforSeven (Str){
    const length = Str.length;
    let logicString = '';
    let decision = '';
    let arr = Str.split('');
    const digits = Str.replace(/\D/g, '');
    const digitSum = digits.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0); 
    const digitmultiply = digits.split('').reduce((mul,digit) => mul * parseInt(digit,10),1);


 
    if (Str.charAt(0) === '7') {
        logicString = `First character is '7'`;
        decision = true;
      }else if(digitSum === 7) {
     
        for(let i = 0 ; i < length ; i++){
            logicString += arr[i];
            if(i != length - 1){
                logicString += ' + '
            }
        }
        decision = true
    }else if(digitmultiply === 7){
        for(let i = 0 ; i < length ; i++){
            logicString += arr[i];
            if(i != length - 1){
                logicString += ' * '
            }
        }
        decision = true
    } else if (Str.includes('7')) {
        logicString = `Contains the digit '7'`;
        decision = true;
    }else{
        const difference =  7 - length;
        let normalString = '';
        if(difference > 0){
            for(let i = 0 ; i < length; i++){
                normalString += arr[i] + `(${i+1})`;
                if(i != length - 1){
                    normalString += ' , '
                }
            }
            
            logicString += `${normalString} , ${Str.length} + ${difference} `;
            decision = true;
        }else if(difference < 0 ){
            for(let i = length - 1 ; i >= 0; i--){
                normalString += arr[i] + `(${i+1})`;
                if(i != 0){
                    normalString += ' , '
                }

            }
    
            logicString += `${normalString} , ${Str.length}  ${difference} `;
            decision = true;
        }
        
    };

   

   if(decision){
    return logicString;
   }
}