/**
 * Returns `true` if the value is either `undefined` or `null`, `false`
 * otherwise.
 * @param {any} value Some value.
 * @returns {Boolean}
 */
export function isNil(value: unknown): value is (undefined | null) {
    return typeof value === 'undefined' || value === null
}
