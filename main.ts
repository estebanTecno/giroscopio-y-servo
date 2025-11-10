let x = 0
let angulo = 0
basic.forever(function () {
    // Leer inclinación en eje X (izquierda/derecha)
    x = input.rotation(Rotation.Roll)
    // "x" varía aprox. entre -90 (izquierda) y 90 (derecha)
    // Convertimos ese rango a 0–180 grados para el servo
    angulo = Math.map(x, -90, 90, 0, 180)
    // Limitamos el valor por seguridad
    angulo = Math.constrain(angulo, 0, 180)
    // Movemos el servo al ángulo calculado
    pins.servoWritePin(AnalogPin.P1, angulo)
    // Pequeña pausa para suavizar el movimiento
    basic.pause(50)
})
