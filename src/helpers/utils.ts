export const numberForMoney = (number: number): string => {
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency:'BRL'}).format(number);
}