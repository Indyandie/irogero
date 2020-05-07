<script>

    import { beforeUpdate } from 'svelte'
    import ColorWell from './ColorWell'
    import InputRange from './InputRange'
    import PalColor from './PalColor'
    import Colorwave from './Colorwave'
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
    export let steps = 4
    let hueBound = 22
    let satBound = 50
    let lightBound = 30
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
    let hueWave = 'easeInQuad'
    $: satWave = 'easeInSine'
    $: lightWave = 'easeOutSine'


// onMount( async() => {
//     createPal(4)
// })

beforeUpdate( async () => {
    
    let palLt = createPal(
        steps, 
        lightColorHue, baseColorHue, 
        lightColorSat, baseColorSat, 
        lightColorLight, baseColorLight,
        hueWave, satWave,  
    )

    palLt.pop()

    let palDk = createPal(
        steps, 
        baseColorHue, darkColorHue, 
        baseColorSat, darkColorSat, 
        baseColorLight, darkColorLight, 
        hueWave, undefined, lightWave
    )
    
    basePal = [].concat(palLt, palDk);

})


</script>

<!-- {@debug palette} -->

<div class="controls">
    <Colorwave bind:selectedWave={satWave} />
    <InputRange bind:rngVal={satBound} rngMin={10} rngMax={45} rngLabel={'Sat'} margin/>
    <InputRange bind:rngVal={hueBound} rngMin={10} rngMax={100} rngLabel={'Hue shift'} margin/>
    <ColorWell bind:wellColor={baseColor} margin/>
    <InputRange bind:rngVal={steps} rngMin={2} rngMax={5} rngLabel={'Steps'} margin/>
    <InputRange bind:rngVal={lightBound} rngMin={20} rngMax={50} rngLabel={'Light'} margin/>
    <Colorwave bind:selectedWave={lightWave} />
</div>

<section>
    
{#each basePal as item}
    <PalColor textColor={item.displayColor} colorName={item.label} colorHex={item.hex}/>

{/each}

</section>


<style>
    section {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        height: 100%;
    }

    .controls {
        width: 100%;
        padding: 0 2em;
        display: flex;
        /* flex-direction: column; */
        justify-content: space-between;
        align-items: center;
    }

</style>
