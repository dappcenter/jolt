/* 
    Example of making an HTTP GET request
*/

/* make a get request to an endpoint and log the data */
async function makeRequest() {
    let response = await http.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.data);
}

makeRequest();