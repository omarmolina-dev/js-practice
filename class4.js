try {
    const result = null;
    console.log(result.name); // This will throw an error since result is null
} catch (error) {
    console.error("An error occurred:", error.message); // Logs the error message
}

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Omar", role: "developer" }); // Simulates fetching data and resolves with an object
        }, 1000);
    });
};

const showData = async () => {
    try {
        const data = await getData(); // Waits for the promise to resolve and gets the data
        console.log(data); // Logs the fetched data
    } catch (error) {
        console.error("Error:", error.message); // Logs any errors that occur during the async operation    
    }
}

showData(); // Calls the async function to fetch and display data