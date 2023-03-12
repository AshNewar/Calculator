console.log("Helllo");
let num=[];
let result="";
let index=0;
let operato=[];
let button=document.getElementsByClassName("part2");
let part=document.getElementById("part1");


function operator(ch){
    if(ch==="+"||ch==="-"||ch==="*"||ch==="%"){
        return true;
    }
    return false;
}
function progress(num,ope){
    let num1=num[0];
    for(var i=1;i<num.length;i++){
        num1=calculate(num1,ope[i-1],num[i]);
    }
    part.innerHTML=num1;
}


function calculate(num1,ope,num2){
    if(ope==="+"){
        return parseFloat(num1+num2);
    }
    else if(ope==="-"){
        return parseFloat(num1-num2);
    }
    else if(ope==="*"){
        return parseFloat(num1*num2);

    }
    else if(ope==="%"){
        return parseFloat(num1/num2);
    }
}
let display="";

Array.from(button).forEach(ele=>{
    ele.addEventListener("click",()=>{
        let ch=ele.innerHTML;
        display+=ele.innerHTML;
        part.innerHTML=display;
        if(operator(ch)){
            operato.push(ch);
            num.push(parseInt(result));
            result="";

        }
        else if(ch==="AC"){
            result="";
            part.innerHTML="";
            display="";
        }
        else if(ch==="="){
            num.push(parseInt(result));
            progress(num,operato);
            result=part.innerHTML;
            display=result;
            num=[];
            operato=[];
        }
        else{
         result+=ch;
        }
    });
});