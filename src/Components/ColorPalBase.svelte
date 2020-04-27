<script>

    import { beforeUpdate } from 'svelte'
    import InputRange from './InputRange'
    import PalColor from './PalColor'
    import { generate, createPal } from '../js/color-gen'
    import chm from 'chroma-js'

    function convertColor(color) {
        if (color > 359) {
            return (color - 359)
        } else if (color < 0) {
            return (color + 359)
        }
        return color
    }

    function convertSatVal(satval) {
        if (satval > 100) {
            return 100
        } else if (satval < 0) {
            return 0
        }
        return satval
    }

    export let baseColor = '#ff0000'
    export let steps = 3
    let hueBound = 22
    let satBound = 50
    let lightBound = 75
    $: baseColorHue = chm(baseColor).hsv()[0]
    $: baseColorSat = chm(baseColor).hsv()[1] * 100
    $: baseColorLight = chm(baseColor).hsv()[2] * 100
    $: baseColorHSV = chm(baseColor).hsv()
    $: lightColorHue = convertColor(baseColorHue - hueBound)
    $: lightColorSat = convertSatVal(baseColorSat - satBound )
    $: lightColorLight = convertSatVal(baseColorLight + lightBound)
    $: darkColorHue = convertColor(baseColorHue + hueBound)
    $: darkColorSat = convertSatVal(baseColorSat + satBound )
    $: darkColorLight = convertSatVal(baseColorLight - lightBound)
    $: basePal = []


// onMount( async() => {
//     createPal(4)
// })

beforeUpdate( async () => {
    
    let palLt = createPal(
        steps, lightColorHue, baseColorHue, 
        lightColorSat, baseColorSat, 
        lightColorLight, baseColorLight 
    )

    palLt.pop()

    let palDk = createPal(
        steps, baseColorHue, darkColorHue, 
        baseColorSat, darkColorSat, 
        baseColorLight, darkColorLight 
    )
    
    basePal = [].concat(palLt, palDk);

})


</script>

<!-- {@debug palette} -->

<section>

    <h2>Base Palette</h2>

    <InputRange bind:rngVal={steps} rngMin={2} rngMax={32} rngLabel={'Steps'} margin/>
    
{#each basePal as item}
    <PalColor textColor={item.displayColor} colorName={item.label} colorHex={item.hex}/>

{/each}

</section>


<style>
    section {
        width: 100%;
    }
</style>
