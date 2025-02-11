// Mapping of currency codes to country codes
const countryList = {
    EUR: "FR", USD: "US", JPY: "JP", BGN: "BG", CZK: "CZ", DKK: "DK", GBP: "GB",
    HUF: "HU", PLN: "PL", RON: "RO", SEK: "SE", CHF: "CH", ISK: "IS", NOK: "NO",
    HRK: "HR", RUB: "RU", TRY: "TR", AUD: "AU", BRL: "BR", CAD: "CA", CNY: "CN",
    HKD: "HK", IDR: "ID", ILS: "IL", INR: "IN", KRW: "KR", MXN: "MX", MYR: "MY",
    NZD: "NZ", PHP: "PH", SGD: "SG", THB: "TH", ZAR: "ZA"
};

// API key and base URL for currency conversion
const apiKey = "fca_live_GrAwgjqEE1EcccDfvaj5h2MctuiceZbSwmnRFoYj";
const BASE_URL = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`;

// Selecting DOM elements
const dropdownSelect = document.querySelectorAll(".dropdown select");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const amountInput = document.querySelector("#input-amount");
const convertButton = document.querySelector("form button");
const msg = document.querySelector(".msg");

// Populate dropdowns with currency options
for (let select of dropdownSelect) {
    for (let currency in countryList) {
        let option = document.createElement("option");
        option.innerText = currency;
        option.value = currency;
        
        // Default selections
        if (select.name === "from" && currency === "USD") {
            option.selected = true;
        } else if (select.name === "to" && currency === "INR") {
            option.selected = true;
        }
        
        select.append(option);
    }
    
    // Add event listener to update flag on currency change
    select.addEventListener("change", (event) => updateFlag(event.target));
}

// Function to update the flag based on selected currency
const updateFlag = (element) => {
    let currencyCode = element.value;
    let countryCode = countryList[currencyCode].toLowerCase();
    let flagImg = element.parentElement.querySelector("img");
    flagImg.src = `https://flagcdn.com/w80/${countryCode}.jpg`;
};

// Fetch and display the currency conversion
const convertCurrency = async () => {
    try {
        msg.innerText = "Converting...";
        
        let amountValue = amountInput.value.trim();
        if (amountValue === "" || amountValue < 1) {
            amountValue = 1;
            amountInput.value = "1";
        }
        
        let url = `${BASE_URL}&currencies=${toCurrency.value}&base_currency=${fromCurrency.value}`;
        let response = await fetch(url);
        let data = await response.json();
        let exchangeRate = data.data[toCurrency.value];
        
        let finalAmount = (amountValue * exchangeRate).toFixed(2);
        msg.innerText = `${amountValue} ${fromCurrency.value} = ${finalAmount} ${toCurrency.value}`;
    } catch (error) {
        console.error("Error fetching exchange rate:", error);
        msg.innerText = "An error occurred. Please try again.";
    }
};

// Convert currency on button click
convertButton.addEventListener("click", (event) => {
    event.preventDefault();
    convertCurrency();
});

// Convert currency on page load
document.addEventListener("DOMContentLoaded", convertCurrency);
