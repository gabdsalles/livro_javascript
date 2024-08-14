/*  Capítulo 2 - exercício c
    Um supermercado está com uma promoção - Para aumentar suas vendas no setor de higiene, cada etiqueta
    de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra de três
    unidades do produto. Elaborar um programa que leia descrição e preço de um produto. Após, apresente
    as mensagens indicando a promoção.
*/

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const totalPromocao = preco * 2.5
    const custoTerceiroItem = preco / 2

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${totalPromocao.toFixed(2)}`
    resp2.innerText = `O 3º produto custa apenas R$: ${custoTerceiroItem.toFixed(2)}`

    e.preventDefault()
})