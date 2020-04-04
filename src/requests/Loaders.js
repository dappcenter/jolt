/**
 * Loader Namespace
 * @namespace loader
 * @description A collection of functions to handle loading data.
 */
export const loader = {

    /**
     * Loads a text from the specified url. 
     * @param {string} url - The url to load the text from.
     * @return {Promise.<string>} - The {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise Promise} that resolves to a string.
     */
    loadText: async function (url) {
        const response = await fetch(url);
        return await response.text();
    },

    /**
     * Loads HTML code from the specified url.
     * @param {string} url - The url to load the html code from.
     * @return {Promise.<string>} - The {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise Promise} that resolves to a string.
     */
    loadHTML: async function (url) {
        const response = await fetch(url);
        return await response.text();
    },

    /**
     * Loads JSON data from the specified url.
     * @param {string} url - The url to load the JSON data from.
     * @return {Promise.<Object>} - The {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise Promise} that resolves to a Object.
     */
    loadJSON: async function (url) {
        const response = await fetch(url);
        return await response.json();
    },

    /**
     * Loads a Blob from the specified url.
     * @param {string} url - The url to load a Blob from.
     * @return {Promise.<Blob>} - The {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise Promise} that resolves to a Blob.
     */
    loadBlob: async function (url) {
        const response = await fetch(url);
        return await response.blob();
    },

    /**
     * Loads an ArrayBuffer from the specified url.
     * @param {string} url - The url to load an ArrayBuffer from.
     * @return {Promise.<Blob>} - The {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise Promise} that resolves to an ArrayBuffer.
     */
    loadArrayBuffer: async function (url) {
        const response = await fetch(url);
        return await response.arrayBuffer();
    }
} 