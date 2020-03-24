/**
 * @typedef {Object} HttpResponse
 * @property {Object} headers
 * @property {number} statusCode
 * @property {string} responseType
 * @property {string} responseUrl
 * @property {string} data
 */


/**
 * Http Request Namespace
 * @namespace http
 */
export const http = {

    /**
     * make an HTTP get request
     * @param {string} url - the url to request data from
     * @return {Promise} - a promise that resolves to a {@link HttpResponse}
     */
    get: async function (url) {
        let response = await fetch(url);

        return {
            headers: response.headers,
            statusCode: response.status,
            responseType: response.type,
            responseUrl: response.url,
            data: await response.json()
        };
    },

    /**
     * make a HTTP POST request
     * @param {string} url - the url to request data from
     * @param {Object} data - the data to send to the url endpoint
     * @return {Promise} - a promise that resolves to a {@link HttpResponse}
     */
    post: async function (url, data) {
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
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
     * make a HTTP PUT request
     * @param {string} url - the url to request data from
     * @param {Object} data - the data to send to the url endpoint
     * @return {Promise} - a promise that resolves to a {@link HttpResponse}
     */
    put: async function (url, data) {
        let response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
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
     * make an HTTP PATCH request
     * @param {string} url - the url to request data from
     * @param {Object} data - the data to send to the url endpoint
     * @return {Promise} - a promise that resolves to a {@link HttpResponse}
     */
    patch: async function (url, data) {
        let response = await fetch(url, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
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
     * make an HTTP DELETE request
     * @param {string} url - the url to request data from
     * @return {Promise} - a promise that resolves to a {@link HttpResponse}
     */
    delete: async function (url) {
        let response = await fetch(url, {
            method: "DELETE"
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