class Retangulo{
	constructor(largura, altura)
  {
		this.altura = altura;
		this.largura = largura;
	}
  
  mostrarAtributos()
  {
    return "Altura: " + this.altura + " Largura: " + this.largura;
  }
  
	calcularArea()
  {
		return this.altura * this.largura;
	}

	area()
  {
		return this.calcularArea();
	}
}
class Quadrado extends Retangulo
{
  constructor(lado)
  {
    super(lado, lado);
  }
}

let quadrado = new Quadrado("15");
console.log(quadrado.mostrarAtributos());
console.log(quadrado.area());
console.log(quadrado.altura);
console.log(quadrado.largura);