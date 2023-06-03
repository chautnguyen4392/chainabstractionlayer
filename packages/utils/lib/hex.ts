/**
 * Appends 0x if missing from hex string
 */
export function ensure0x(hash: string) {
    if (hash) {
        return hash.startsWith('0x') ? hash : `0x${hash}`;
    }
}

/**
 * Removes 0x if it exists in hex string
 */
export function remove0x(hash: string) {
    if (hash) {
        if (typeof hash !== 'string') {
            hash = String(hash)
        }
        return hash.startsWith('0x') ? hash.slice(2) : hash;
    }
}
