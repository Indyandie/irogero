<script>
import { onMount, beforeUpdate } from 'svelte'
import { crossfade } from 'svelte/transition'
import generate from '../js/color-gen'
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
let hueBound = 22
let satBound = 50
let lightBound = 75
let steps = 7
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
$: palette = []
$: paletteDark = []




function createPal(stps, hueSt, hueEn, satSt, satEn, lumSt, lumEn ) {
    let colorInput = {
        specs: {

            // Number of colors
            steps: stps || 4,

            // # HUE
            // Hue Start Value (0 - 359)
            hue_start: hueSt,
            // Hue End Value (0 - 359)
            hue_end: hueEn,


            // Hue Curve (See Curves Section)
            hue_curve: "easeInQuad",


            // Saturation Start Value (0 - 100)
            sat_start: satSt,
            // Saturation End Value (0 - 100)
            sat_end: satEn,

            // Saturation Curve (See Curves Section)
            sat_curve: "easeOutQuad",
            // Saturation Rate (0 - 200)
            sat_rate: 75,


            // Luminosity Start Value (0 - 100)
            lum_start: lumSt,
            // Luminosity End Value (0 - 100)
            lum_end: lumEn,

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

    return generate(colorInput)

    console.log(palette)
}

// onMount( async() => {
//     createPal(4)
// })

beforeUpdate( async () => {
    console.log(`
    ####### Light Palette ###### \n
    ${lightColorHue}
    ${baseColorHue}
    `)
    // paletteDark = createPal(3, hueSt, hueEn, satSt, satEn, lumSt, lumEn )
    palette = createPal(
        steps, lightColorHue, baseColorHue, 
        lightColorSat, baseColorSat, 
        lightColorLight, baseColorLight 
    )

    paletteDark = createPal(
        steps, baseColorHue, darkColorHue, 
        baseColorSat, darkColorSat, 
        baseColorLight, darkColorLight 
    )
    
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
    
        {#each paletteDark as item}
        <div class="colorSamples" style="background:{item.hex}">
            <div class="colour" style={`color: ${item.displayColor}`} >
                {item.label} <br>
                <strong>{item.hex}</strong>
            </div>
        </div>
        {/each}
    </section>
    
{/if}



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
        transition: background-color 300ms linear;
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