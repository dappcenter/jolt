/* 
    Example of loading JSON data from a file
*/

/* load JSON data from a file and log the data */
async function load() {
    let data = await loader.loadJSON("data.json");
    console.log(data);
}

load();