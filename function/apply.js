function arrayx(x,y,z) {
    return x + y + z;
}

let like = [1, 1, 1] 

console.log(arrayx.apply(null, like))

// Apply funciona da mesma forma que call, porém a diferença entre eles é a forma que os argumentos são passados. Enquanto em call os argumentos são passados individualmente. Em apply passamos como um array. O uso de apply não é mais tão comum ultimante, por causa do spread operador.