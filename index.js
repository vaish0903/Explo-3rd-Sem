let CalcBtn = document.getElementById('CalcBtn');
CalcBtn.addEventListener('click' , getUnknown);

let Pressure = document.getElementById('Pressure');
let Volume = document.getElementById('Volume');
let Moles = document.getElementById('Moles');
let Temp = document.getElementById('Temp');
let finalResult = document.getElementById('finalResult');
let p,v,n,t;
let R = 8.314;
let calculatedValue;

// disables the input for unknown value
var radios = document.querySelectorAll('input[type=radio][name="solvefor"]');
radios.forEach(radio => radio.addEventListener('change', () => {
    if(radio.value=='pressure'){
        Pressure.disabled=true;
        document.getElementById('pa').disabled=true;
        document.getElementById('atm').disabled=true;
        document.getElementById('bar').disabled=true;
        document.getElementById('mmhg').disabled=true;

        document.getElementById('l').disabled=false;
        document.getElementById('m').disabled=false;
        document.getElementById('cm').disabled=false;
        document.getElementById('ft').disabled=false;

        document.getElementById('C').disabled=false;
        document.getElementById('K').disabled=false;
        document.getElementById('F').disabled=false;
        document.getElementById('R').disabled=false;
    }
    else if(radio.value=='volume'){
        Volume.disabled=true;
        Temp.disabled=false;
        Moles.disabled=false;
        Pressure.disabled=false;
        document.getElementById('l').disabled=true;
        document.getElementById('m').disabled=true;
        document.getElementById('cm').disabled=true;
        document.getElementById('ft').disabled=true;

        document.getElementById('C').disabled=false;
        document.getElementById('K').disabled=false;
        document.getElementById('F').disabled=false;
        document.getElementById('R').disabled=false;

        document.getElementById('pa').disabled=false;
        document.getElementById('atm').disabled=false;
        document.getElementById('bar').disabled=false;
        document.getElementById('mmhg').disabled=false;
    }
    else if(radio.value=='moles'){
        Moles.disabled=true;
        Temp.disabled=false;
        Pressure.disabled=false;
        Volume.disabled=false;

        document.getElementById('C').disabled=false;
        document.getElementById('K').disabled=false;
        document.getElementById('F').disabled=false;
        document.getElementById('R').disabled=false;

        document.getElementById('pa').disabled=false;
        document.getElementById('atm').disabled=false;
        document.getElementById('bar').disabled=false;
        document.getElementById('mmhg').disabled=false;

        document.getElementById('l').disabled=false;
        document.getElementById('m').disabled=false;
        document.getElementById('cm').disabled=false;
        document.getElementById('ft').disabled=false;
    }
    else if(radio.value=='temperature'){
        Temp.disabled=true;
        Moles.disabled=false;
        Pressure.disabled=false;
        Volume.disabled=false;
        document.getElementById('C').disabled=true;
        document.getElementById('K').disabled=true;
        document.getElementById('F').disabled=true;
        document.getElementById('R').disabled=true;

        document.getElementById('pa').disabled=false;
        document.getElementById('atm').disabled=false;
        document.getElementById('bar').disabled=false;
        document.getElementById('mmhg').disabled=false;

        document.getElementById('l').disabled=false;
        document.getElementById('m').disabled=false;
        document.getElementById('cm').disabled=false;
        document.getElementById('ft').disabled=false;
    }
}));

//select unknown values 
function getUnknown(){
    if(document.getElementById('P').checked==true){
        if(Volume.value=="" || Temp.value=="" || Moles.value==""){
            alert("Please give proper input!");
        }
        else{
            v=Vvalue();
            t=Tvalue();
            n=Mvalue();
            calculatedValue = (n*R*t)/v;
            finalResult.innerHTML = `<h3>Calculated value for pressure is : ${calculatedValue} in si units</h3>`
        }
    }
    else if(document.getElementById('V').checked==true){
        if(Pressure.value=="" || Temp.value=="" || Moles.value==""){
            alert("Please give proper input!");
        }
        else{
            p=Pvalue();
            t=Tvalue();
            n=Mvalue();
            calculatedValue = (n*R*t)/p;
            finalResult.innerHTML = `<h3>Calculated value for volume is : ${calculatedValue} in si units</h3>`
        }
    }
    else if(document.getElementById('M').checked==true){
        if(Volume.value=="" || Temp.value=="" || Pressure.value==""){
            alert("Please give proper input!");
        }
        else{
            v=Vvalue();
            t=Tvalue();
            p=Pvalue();
            calculatedValue = (p*v)/R*t;
            finalResult.innerHTML = `<h3>Calculated value for moles is : ${calculatedValue}</h3>`
        }
    }
    else if(document.getElementById('T').checked==true){
        if(Volume.value=="" || Pressure.value=="" || Moles.value==""){
            alert("Please give proper input!");
        }
        else{
            v=Vvalue();
            p=Pvalue();
            n=Mvalue();
            calculatedValue = (p*v)/R*n;
            finalResult.innerHTML = `<h3>Calculated value for temperature is : ${calculatedValue} in si units</h3>`
        }
    }
}

// returns value of pressure
function Pvalue(){
    p=Number(Pressure.value);
    if(document.getElementById('pa').checked==true){
        p=p;
    }
    else if(document.getElementById('atm').checked==true){
        p=p*101325;
    }
    else if(document.getElementById('bar').checked==true){
        p=p*100000;
    }
    else if(document.getElementById('mmhg').checked==true){
        p=p*133.322;
    }

    return p;
}

//returns value of volume 
function Vvalue(){
    v=Number(Volume.value);
    if(document.getElementById('m').checked==true){
        v=v;
    }
    else if(document.getElementById('l').checked==true){
        v=v*0.0001;
    }
    else if(document.getElementById('cm').checked==true){
        v=v*0.000001;
    }
    else if(document.getElementById('ft').checked==true){
        v=v*0.0283;
    }

    return v;
}

// retruns value of temperature
function Tvalue(){
    t=Number(Temp.value);
    if(document.getElementById('K').checked==true){
        t=t;
    }
    else if(document.getElementById('C').checked==true){
        t=t+273.15;
    }
    else if(document.getElementById('F').checked==true){
        t=(t-32)*0.56+273.15;
    }
    else if(document.getElementById('R').checked==true){
       t=t*0.56;
    }

    return t;
}

// retruns value of moles
function Mvalue(){
    n=Number(Moles.value);
    return n;
}

// clear button
let ClrBtn = document.getElementById('ClrBtn');
ClrBtn.addEventListener('click' , ()=>{
    finalResult.innerHTML="";
})

