//set up an http request
var xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
xhr.send();

// setup a listner where server listen our request
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    var data = JSON.parse(xhr.response);
    console.log(data);

    // question-a)Get all the countries from Asia continent /region using Filter function

    const filteredRegion = data.filter((country) => country.region === "Asia");
    console.log(filteredRegion);

    // question-b)Get all the countries with a population of less than 2 lakhs using Filter function
    const filteredPopulation = data.filter((country) => country.population <200000);
    console.log(filteredPopulation);

    // question-c)Print the following details name, capital, flag using forEach function
    data.forEach(country=>console.log(country.name,country.flag,country.capital))
  
    
    


// question-d)Print the country which uses US Dollars as currency.
const filteredCurrency = data.filter((country) => country.currencies[0].name=== "United States dollar");
    console.log(filteredCurrency);

  } else {
    //you should print the error
    console.log("Data is not available");
  }
};
