/* 
    Example of loading an ArrayBuffer from a url
*/

/* load an ArrayBuffer from a url and log the data */
async function load() {
    let data = await loader.loadBlob("https://example.com/buffers/1");
    console.log(data);
}

load();