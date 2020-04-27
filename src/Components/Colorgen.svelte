<script>
import { onMount, beforeUpdate } from 'svelte'
import { crossfade } from 'svelte/transition'
import generate from '@elemental-design/coloralgorithm'
import chm from 'chroma-js'

export let baseColor = '#ff0000'
$: baseColorHue = chm(baseColor).hsv()[0]
$: baseColorSat = chm(baseColor).hsv()[1] * 100
$: baseColorLight = chm(baseColor).hsv()[2] * 100
$: baseColorHSV = chm(baseColor).hsv()
$: palette = []

function convertColor(color, maxColor) {
    if (color > maxColor) {
        return (color - maxColor)
    } else if (color < 0) {
        return (color + maxColor)
    }
    return color
}


function createPal() {
    let colorInput = {
        specs: {

            // Number of colors
            steps: 7,

            // # HUE
            // Hue Start Value (0 - 359)
            hue_start: baseColorHue,
            // Hue End Value (0 - 359)
            hue_end: convertColor((baseColorHue + 45), 359),


            // Hue Curve (See Curves Section)
            hue_curve: "easeInQuad",


            // Saturation Start Value (0 - 100)
            sat_start: baseColorSat,
            // Saturation End Value (0 - 100)
            sat_end: convertColor((baseColorSat + 33), 100),

            // Saturation Curve (See Curves Section)
            sat_curve: "easeOutQuad",
            // Saturation Rate (0 - 200)
            sat_rate: 75,


            // Luminosity Start Value (0 - 100)
            lum_start: baseColorLight,
            // Luminosity End Value (0 - 100)
            lum_end: convertColor((baseColorLight + 25), 100),

            // Luminosity Curve (See Curves Section)
            lum_curve: "easeOutQuad",
            // Modifier Scale
            // Every generated color gets a modifier (label) that
            // indicates its lightness. A value of 10 results in
            // two-digit modifiers. The lightest color will be 0 (e.g. Red 0)
            // and the darkest color will be 100 (e.g. Red 100), given
            // that you generate 11 colors
            modifier: 10
        }
    }

    palette = generate(colorInput)

    // console.log(palette)
}

onMount(() => {
    createPal()
})

beforeUpdate( async () => {
    createPal()
})


</script>

<!-- {@debug palette} -->

<section>

{#if true}
    <h3>Palette</h3>
    <section class="colorPal" >
        {#each palette as item}
        <div class="colorSamples" style="background:{item.hex}">
            <div class="colour" style={`color: ${item.displayColor}`} >
                {item.label} <br>
                <strong>{item.hex}</strong>
            </div>
        </div>
        {/each}
    </section>
{/if}

    <header>
        <h1>Color Generator</h1> 
        <!-- <h2>{colorInput.specs.hue_start} - {colorInput.specs.steps}</h2> -->
    </header>
    
    <ul>
        <li>color is {baseColor}</li>
        <li>HSL {baseColorHSV}</li>
        <li>Hue is {baseColorHue}</li>
        <li>Sat is {baseColorSat}</li>
        <li>Light is {baseColorLight}</li>
    </ul>



</section>



<style>

    .colour {
        
    }

    .colorSamples {
        height: 5em;
        width: 5em;
        box-sizing: content-box;
        box-sizing: border-box;
        display: inline-block;
        text-align: center;
        padding: 1.5em 0;
        border-radius: 100%;
        margin-right: 1em;
        margin-bottom: 1em;
        transition: background-color 700ms linear;
    }

    .colorPal {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
    }

    header {
        display: block
    }

</style>