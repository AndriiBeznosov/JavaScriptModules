import transaction from "./transaction.js";
{
  /* <tr>
    <td>ID транзакция</td>
    <td>Сумма</td>
    <td>Дата</td>
    <td>Кто</td>
    <td>Тип транзакции</td>
    <td>Имя счета</td>
    <td>Номер счета</td>
  </tr>; */
}
const makeTransactionTableRowMarcup = ({
  id,
  price,
  date,
  name,
  transaction,
  namePrice,
  numberPrice,
}) => {
  return `
  <tr>
    <td>${id}</td>
    <td>${price}</td>
    <td>${date}</td>
    <td>${name}</td>
    <td>${transaction}</td>
    <td>${namePrice}</td>
    <td>${numberPrice}</td>
</tr>`;
};
console.log(makeTransactionTableRowMarcup(transaction[0]));

const tableEl = document.querySelector(".js-table");
const makeTransactionTableRows = transaction
  .map(makeTransactionTableRowMarcup)
  .join("");
tableEl.insertAdjacentHTML("beforeend", makeTransactionTableRows);
console.log(makeTransactionTableRows);
