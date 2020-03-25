/* 
    Example of loading html from a file
*/

/* load html from a file and log the data */
async function load() {
    let data = await loader.loadHTML("file.html");
    console.log(data);
}

load();