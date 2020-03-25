/* 
    Example of making an HTTP PUT request
*/

/* make a put request to an endpoint and log the data */
async function makeRequest() {
    let response = await http.put("https://jsonplaceholder.typicode.com/posts/1", {
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1
    });
    console.log(response.data);
}

makeRequest();