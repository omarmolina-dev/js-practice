import fetch from "node-fetch"; // Imports the 'fetch' function from the 'node-fetch' library to make HTTP requests

const getBitcoinPrince = async () => {
    try {
       const response = await fetch("https://api.frankfurter.app/latest?from=USD&to=MXN");
const data = await response.json();
console.log(`1 USD = ${data.rates.MXN} MXN`);
    } catch (error) {
        console.error("Error:", error.message); // Logs any errors that occur during the fetch operation    
    }
};

getBitcoinPrince(); // Calls the function to fetch and display the Bitcoin price