import { writable } from 'svelte/store'

let colors = writable(
    [
        'red', 'green', 'blue'
    ]
)

export {colors}