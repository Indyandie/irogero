<script>
    import { colors } from './stores/store'
    import { beforeUpdate } from 'svelte'
    import ColorWell from './ColorWell'
    import InputRange from './InputRange'
    import PalColor from './PalColor'
    import Colorwave from './Colorwave'
    import { generate, createPal } from '../js/color-gen'
    import chm from 'chroma-js'

    // keeps color value within bounds of 0 360 
    function convertColor(color) {
        if (color > 359) {
            return (color - 359)
        } else if (color < 0) {
            return (color + 359)
        }
        return color
    }

    // keeps saturation and value in the bounds of 0 and 100
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
    $: baseColorHSV     = chm(baseColor).hsv()
    $: baseColorHue     = baseColorHSV[0]
    $: baseColorSat     = baseColorHSV[1] * 100
    $: baseColorLight   = baseColorHSV[2] * 100

    $: lightColorHue    = convertColor(baseColorHue - hueBound)
    $: lightColorSat    = convertSatVal(baseColorSat - satBound )
    $: lightColorLight  = convertSatVal(baseColorLight + lightBound)

    $: darkColorHue     = convertColor(baseColorHue + hueBound)
    $: darkColorSat     = convertSatVal(baseColorSat + satBound )
    $: darkColorLight   = convertSatVal(baseColorLight - lightBound)
    
    let hueWave     = 'linear'
    $: satWave      = 'easeInSine'
    $: lightWave    = 'easeOutSine'

    $: basePal = []

// onMount( async() => {
//     createPal(4)
// })

    function updateColors() {
        colors.update(n => {
            n = []
            basePal.forEach(color => {
                n.push(color.hex)
            });
            return n
        })
    }

    

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

        // colors.set([basePal[0].hex])
        updateColors()

    })

    function randBaseColor() {
        baseColor = chm.random()    
    }

    document.addEventListener('keydown', event => {
        if (event.code === 'Space') {
            randBaseColor()
        }
    })

</script>

<!-- {@debug palette} -->

<div class="controls"  >
    <Colorwave bind:selectedWave={satWave} />
    <InputRange bind:rngVal={satBound} rngMin={10} rngMax={45} rngLabel={'Sat'} />
    <InputRange bind:rngVal={hueBound} rngMin={10} rngMax={100} rngLabel={'Hue shift'} />
    <ColorWell bind:wellColor={baseColor} />
    <InputRange bind:rngVal={steps} rngMin={2} rngMax={5} rngLabel={'Steps'} customLabel={steps*2-1}/>
    <InputRange bind:rngVal={lightBound} rngMin={20} rngMax={50} rngLabel={'Light'} />
    <Colorwave bind:selectedWave={lightWave} />
</div>

<section>
    
{#each basePal as item}
    <PalColor textColor={item.displayColor} colorHex={item.hex}/>
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
        position: absolute;
        top: 69px;
        width: 100%;
        padding: 1em 1em;
        display: flex;
        background: white;
        /* flex-direction: column; */
        justify-content: space-between;
        align-items: center;
    }

</style>
