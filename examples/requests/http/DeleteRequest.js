/* 
    Example of making an HTTP DELETE request
*/

/* make a delete request to an endpoint and log the data */
async function makeRequest() {
    let response = await http.delete("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.data);
}

makeRequest();