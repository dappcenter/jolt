/* 
    Example of making an HTTP POST request
*/

/* make a post request to an endpoint and log the data */
async function makeRequest() {
    let response = await http.post("https://jsonplaceholder.typicode.com/posts", {
        title: "foo",
        body: "bar",
        userId: 1
    });
    console.log(response.data);
}

makeRequest();