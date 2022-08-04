document.querySelector('.tugma').addEventListener('click', function(){
    let ekran = document.querySelector('.ekran');
    let ekranValue = ekran.value = parseInt(ekran.value) + 1;
    let hisob = document.querySelector('.soni')
    if (ekranValue === 33){
        document.querySelector('.ekran').value = 0;
        hisob.value = parseInt(hisob.value) + 1;
    }
});

document.querySelector('.clear').addEventListener('click', function(){
    document.querySelector('.ekran').value = 0;
});

document.querySelector('.clear1').addEventListener('click', function(){
    document.querySelector('.soni').value = 0;
    document.querySelector('.ekran').value = 0;
});
`1`
