let stack = '';
let number = '';
let next = '';
let now = '';
let results = '';
let result = '';
let result_flag = 0;
let red_flag = 0;
$('.gray').on('click',function(e){
    if(red_flag){
        stack = '';
        red_flag = 0;
    }
    stack = stack + e.target.dataset.n
    document.querySelector('.display').innerHTML = stack;
})
$('.green').on('click',function(e){
    number = Number(stack);
    stack = '';
    document.querySelector('.display').innerHTML = stack;
    next = e.target.dataset.n;
})
$('.red').on('click',function(){
    now = Number(stack);
    if(next == '+'){
        result = number + now;
        document.querySelector('.display').innerHTML = result;
        stack = String(result);
    }
    else if(next == '-'){
        result = number - now;
        document.querySelector('.display').innerHTML = result;
        stack = String(result);
    }
    else if(next == '*'){
        result = number * now;
        document.querySelector('.display').innerHTML = result;
        stack = String(result);
    }
    else if(next == '/'){
        result = number / now;
        document.querySelector('.display').innerHTML = result;
        stack = String(result);
    }
    else{
        result = now;
        next = '';
        document.querySelector('.display').innerHTML = result;
        stack = String(result);
    }
    red_flag = 1;
    if(result == 0){
        document.querySelector('.display').innerHTML = '';
    }
    results = `<div class = "result_display">${number} ${next} ${now} = ${result}</div>`;
    document.querySelector('.results').insertAdjacentHTML('beforeend',results);
    number = '';
    next = ''
})
$('.blue').on('click',function(){
    stack = ''
    document.querySelector('.display').innerHTML = stack;
})
$('.yellow').on('click',function(){
    number = '';
    stack = '';
    next = '';
    document.querySelector('.display').innerHTML = stack;
})
$('.pink').on('click',function(){
    if(result_flag){
        $('.results').addClass('remove');
        result_flag = 0;
    }
    else{
        $('.results').removeClass('remove');
        result_flag = 1;
    }
})
$('.orange').on('click',function(){
    document.querySelector('.results').innerHTML = '';
})