const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_one = document.getElementById("amount-one");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// fetch exchange rate and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/12d734e28004075404f8101f/latest/${currency_one}`
  )
    .then((res) => res.json())
    .then((data) => {
      // console logging is important to get your required parameters by seeing fetched data
      console.log(data);
      const rate = data.conversion_rates[currency_two];
      console.log(rate);
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two} `;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

// event listeners
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  // swapping values of two variables using destructuring
  [currencyEl_one.value, currencyEl_two.value] = [
    currencyEl_two.value,
    currencyEl_one.value,
  ];
});

calculate();

/*
Your API Key: 12d734e28004075404f8101f
Example Request: https://v6.exchangerate-api.com/v6/12d734e28004075404f8101f/latest/USD
*/
