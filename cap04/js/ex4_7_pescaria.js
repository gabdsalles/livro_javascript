/* A entrada para um clube de pesca custa R$ 20,00 por pessoa e cada pessoa tem direito a levar um peixe. 
Peixes extras custam 12,00. Elabore um programa que leia o número de pessoas de uma família que foram ao
clube e o número de peixes obtidos na pescaria. */

const prompt = require("prompt-sync")()

const pessoas = Number(prompt("Quantas pessoas? "))
const peixes = Number(prompt("Quantos peixes? "))

let custo

if (pessoas > peixes) {
    custo = 20 * pessoas
} else {
    custo = (20 * pessoas) + (12 * (peixes - pessoas))
}

console.log(`Custo final: R$ ${custo.toFixed(2)}`)