/* 
    Example of loading a Blob from a url
*/

/* load a Blob from a url and log the data */
async function load() {
    let data = await loader.loadBlob("https://example.com/blobs/1");
    console.log(data);
}

load();