const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

    const dropdowns = document.querySelectorAll(".dropdown select");
    const btn = document.querySelector("form button");
    const fromCurr = document.querySelector(".from select");
    const toCurr = document.querySelector(".to select");

for(let select of dropdowns){
    for(currencyCode in countryList)
    {
        let newOption = document.createElement("option");
        newOption.innerText = currencyCode;
        newOption.value = currencyCode;
        if(select.name == "from" && currencyCode == "USD")
        {
            newOption.selected = "selected";
        }
        else if(select.name == "to" && currencyCode == "INR")
        {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let currencyCode = element.value;
    
    let countryCode = countryList[currencyCode];
    let newSrc = 'https://flagsapi.com/${countryCode}/flat/64.png';
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amountValue = amount.value;
    if(amountValue == "" || amountValue <= 0)
    {
        amountValue = 1;
        amount.value = "1";
    }

    const URL = '${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json';
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
})