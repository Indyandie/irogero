import { css, injectGlobal } from 'emotion'
import { colors } from './store'
import { writable } from 'svelte/store'

let colorval 

const unsubscribe = colors.subscribe(value => {
    colorval = value;
})

console.log(colorval[0])

const test = css`
        color: ${colorval[0]};
        background: ${colorval[2]};
`

let testing = writable(test)

export { testing }