import { css, injectGlobal } from 'emotion'
import { writable, derived } from 'svelte/store'

export let colors = writable(
    [
        'red', 'green', 'blue'
    ]
)

export let style = derived(
    colors, 
    $css => css`
        color: ${$css[$css.length-1]};
        background: ${$css[$css.length/2]};
    `
)