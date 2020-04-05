/**
 * @typedef {Object} HttpResponse
 * @property {Object} headers
 * @property {number} statusCode
 * @property {string} responseType
 * @property {string} responseUrl
 * @property {string} data
 */


/**
 * Request Namespace
 * @namespace request
 * @description A collection of functions to handle CRUD operations.
 */
export const request = {

    /**
     * Makes an HTTP GET request on the specified endpoint.
     * @param {string} url - The url to make the request on.
     * @param {Object} [headers] - The headers to use for the request.
     * @return {Promise.<HttpResponse>} A {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise Promise} that resolves to a {@link HttpResponse}.
     */
    get: async function (url, headers = {}) {
        const response = await fetch(url, { headers });

        return {
            headers: response.headers,
            statusCode: response.status,
            responseType: response.type,
            responseUrl: response.url,
            data: await response.json()
        };
    },

    /**
     * Makes an HTTP POST request on the specified endpoint.
     * @param {string} url - The url to make the request on.
     * @param {Object} data - The data to send to the url endpoint.
     * @param {Object} [headers] - The headers to use for the request.
     * @return {Promise.<HttpResponse>} A {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise Promise} that resolves to a {@link HttpResponse}.
     */
    post: async function (url, data, headers = {}) {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: Object.assign({
                "Content-type": "application/json; charset=UTF-8"
            }, headers)
        });

        return {
            headers: response.headers,
            statusCode: response.status,
            responseType: response.type,
            responseUrl: response.url,
            data: await response.json()
        };
    },

    /**
     * Makes an HTTP PUT request on the specified endpoint.
     * @param {string} url - The url to make the request on.
     * @param {Object} data - The data to send to the url endpoint.
     * @param {Object} [headers] - The headers to use for the request.
     * @return {Promise.<HttpResponse>} A {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise Promise} that resolves to a {@link HttpResponse}.
     */
    put: async function (url, data, headers = {}) {
        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: Object.assign({
                "Content-type": "application/json; charset=UTF-8"
            }, headers)
        });

        return {
            headers: response.headers,
            statusCode: response.status,
            responseType: response.type,
            responseUrl: response.url,
            data: await response.json()
        };
    },

    /**
     * Makes an HTTP PATCH request on the specified endpoint.
     * @param {string} url - The url to make the request on.
     * @param {Object} data - The data to send to the url endpoint.
     * @param {Object} [headers] - The headers to use for the request.
     * @return {Promise.<HttpResponse>} A {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise Promise} that resolves to a {@link HttpResponse}.
     */
    patch: async function (url, data, headers = {}) {
        const response = await fetch(url, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: Object.assign({
                "Content-type": "application/json; charset=UTF-8"
            }, headers)
        });

        return {
            headers: response.headers,
            statusCode: response.status,
            responseType: response.type,
            responseUrl: response.url,
            data: await response.json()
        };
    },

    /**
     * Makes an HTTP DELETE request on the specified endpoint.
     * @param {string} url - The url to make the request on.
     * @param {Object} [headers] - The headers to use for the request.
     * @return {Promise.<HttpResponse>} A {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise Promise} that resolves to a {@link HttpResponse}.
     */
    delete: async function (url, headers = {}) {
        const response = await fetch(url, {
            method: "DELETE",
            headers
        });

        return {
            headers: response.headers,
            statusCode: response.status,
            responseType: response.type,
            responseUrl: response.url,
            data: await response.json()
        };
    }
};