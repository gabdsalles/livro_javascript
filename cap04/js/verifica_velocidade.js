/* Exercício 4.2
    Elaborar um programa que leia a velocidade máxima permitida em uma estrada e a velocidade de um
    condutor. Se a velocidade for inferior ou igual à permitida, exiba "Sem multa". Se a velocidade for
    de até 20% maior que a permitida, exiba "Multa Leve". Se for maior que 20%, exiba "Multa Grave".
*/

const prompt = require("prompt-sync")()

const velocidadePermitida = Number(prompt("Velocidade Permitida: "))
const velocidadeCondutor = Number(prompt("Velocidade do condutor: "))

if (velocidadeCondutor <= velocidadePermitida) {
    console.log("Sem multa.")
} else if (velocidadeCondutor <= 1.2 * velocidadePermitida) {
    console.log("Multa leve.")
} else {
    console.log("Multa grave.")
}