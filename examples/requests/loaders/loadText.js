/* 
    Example of loading text from a file
*/

/* load text from a file and log the data */
async function load() {
    let data = await loader.loadText("file.txt");
    console.log(data);
}

load();