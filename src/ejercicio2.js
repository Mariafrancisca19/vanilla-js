class Contador {
valor= 0;
function () {
  return this.valor++
}
};

const instancia = new Contador(2);

export { instancia }


