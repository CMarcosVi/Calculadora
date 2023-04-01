var resultado = document.getElementById('resultado');
const inserir = (num) => resultado.innerHTML += num;
const limpar = () => resultado.innerHTML = "";
const atras = () => resultado.innerHTML = resultado.innerHTML.slice(0, -1);
const calcular = ()=> resultado.innerHTML = resultado.innerHTML ? eval(resultado.innerHTML) : "Nada...";