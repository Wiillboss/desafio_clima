async document.querySelector('.busca').addEventListener('submit', (event) =>{
    event.preventDefault();

    let input =document.querySelector('#searchInput').value; // pegando o valor digitado

    if (input !== ""){
        showWarning('Carregando...');

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=08074f76b5a42159f707bf49687f079c&units=metric`;

            let result = await  fetch(url);
            let json = await result.jason();

            console.log(json);
    }

});

function showWarning(mgs){
    document.querySelector('.aviso').innerHTML = mgs;
}