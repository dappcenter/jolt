/* 
    Example of making an HTTP PATCH request
*/

/* make a patch request to an endpoint and log the data */
async function makeRequest() {
    let response = await http.patch("https://jsonplaceholder.typicode.com/posts/1", {
        title: "foo",
    });
    console.log(response.data);
}

makeRequest();