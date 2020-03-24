/**
 * Loader Namespace
 * @namespace loader
 */
export const loader = {

    /**
     * load text from a url
     * @param {string} url - url to load text from
     * @return {Promise} - the Promise that resolves to a string
     */
    loadText: async function (url) {
        let response = await fetch(url);
        return await response.text();
    },

    /**
     * load HTML from a url
     * @param {string} url - url to the file to load html from
     * @return {Promise} - the Promise that resolves to a string
     */
    loadHTML: async function (url) {
        let response = await fetch(url);
        return await response.text();
    },

    /**
     * load JSON data from a url
     * @param {string} url - the url to load JSON data from
     * @return {Promise} - the Promsie that resolves to an Object
     */
    loadJSON: async function (url) {
        let response = await fetch(url);
        return await response.json();
    },

    /**
     * load a Blob from a url
     * @param {string} url - the url to load a Blob from
     * @return {Promise} - the Promise that resolves to a Blob
     */
    loadBlob: async function (url) {
        let response = await fetch(url);
        return await response.blob();
    },

    /**
     * load an ArrayBuffer from a url
     * @param {string} url - the url to load an ArrayBuffer from
     * @return {Promise} - the Promise that resolves to an ArrayBuffer
     */
    loadArrayBuffer: async function (url) {
        let response = await fetch(url);
        return await response.arrayBuffer();
    }
} 