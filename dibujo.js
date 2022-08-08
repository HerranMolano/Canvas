var texto = document.getElementById("lineas_usuario");
var boton = document.getElementById("boton");
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
    {
      lienzo.beginPath();
      lienzo.strokeStyle = color;
      lienzo.moveTo(xinicial, yinicial);
      lienzo.lineTo(xfinal, yfinal);
      lienzo.stroke();
      lienzo.closePath();
    }

function dibujoPorClick()
{
var xxx = parseInt(texto.value);

var lineas = xxx;
var l = 0;
var yi, xf;
boton.addEventListener("click", dibujoPorClick );


  while (l < lineas)
  {
      yi = 10 * l;
      xf = 10 * (l + 1);
      dibujarLinea("blue", 0, yi, xf, 300);
      console.log("lineas" + l);
      l++;
  }

dibujarLinea("black", 0,0,300,0);
dibujarLinea("black", 300,0,300,300);
dibujarLinea("black", 0,300,300,300);
dibujarLinea("black", 0,0,0,300);
}
