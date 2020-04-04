/**
 * State set operation callback
 * 
 * @callback StateSetCallback
 * @param {string} key - The state property name.
 * @param {*} value - The state property value.
 */


/**
 * Creates a State Object with functions for state management.
 * State should be wrapped in a Proxy for assignment overrides.
 * @class
 * 
 * @example <caption>Creating a state object that logs a message when a property is changed</caption>
 * 
 * const state = State.create(function() {
 *      console.log("state has been updated.");
 * });
 */
export class State {

    /**
     * Sets a new state. This method merges the previous state with the new state.
     * @param {Object} state - The new state.
     */
    set(state) {
        this.prototype = Object.assign(this, state);
    }

    /**
     * Creates a new state object and registers the handler for set events
     * @param {StateSetCallback} [setCallback] - The callback to run when a set event happens.
     * @return {State} The new state object.
     */
    static create(setCallback) {
        return new Proxy(new State(), {
            set: (state, key, value) => {
                if (key == "prototype" || state[key] == value) {
                    return true;
                }

                if(state[key]) {
                    state[key] = value;
                    if(setCallback) {
                        setCallback(key, value);
                    }
                    return true;
                }

                state[key] = value;
                return true;
            }
        });
    }
}