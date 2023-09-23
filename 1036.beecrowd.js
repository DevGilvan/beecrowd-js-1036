<script>
  //var prompt = function(texto) { return lines.shift();};
    var [A,B,C] = prompt('Digite:').split(' ').map(Number)

A = A.toFixed(1)

B = B.toFixed(1)

C = C.toFixed(1)


var DELTA = B**2-4*A*C
     var R1 = (-B + Math.sqrt(DELTA))/(2 * A)
    var R2 = (-B - Math.sqrt(DELTA))/(2 * A)


if (DELTA < 0 || A==0){

  console.log('Impossivel calcular')


}else{
          console.log('R1 = '+R1.toFixed(5))
    console.log('R2 = '+R2.toFixed(5))
 

}
</script>
