<script>
    import { colors } from './stores/store'
    import { fade } from 'svelte/transition'
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
    let hueBound = 22
    let satBound = 50
    let lightBound = 30
    $: steps = 4
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

    // Hide controls
    let showControls = true

    function toggleFilters(params) {
        showControls = !showControls
    }

</script>

<!-- {@debug palette} -->

<div    class="controls" 
        class:hide-controls={showControls} 
        transition:fade
>

    <div id="color-strip">
        {#each basePal as item}
            <div style={`background: ${item.hex};`}></div>
        {/each}
    </div>

    <Colorwave bind:selectedWave={satWave} />
    <InputRange bind:rngVal={satBound} rngMin={10} rngMax={45} rngLabel={'Sat'} />
    <InputRange bind:rngVal={hueBound} rngMin={10} rngMax={100} rngLabel={'Hue shift'} />
    <ColorWell bind:wellColor={baseColor} />
    <InputRange bind:rngVal={steps} rngMin={2} rngMax={5} rngLabel={'Steps'} customLabel={steps*2-1}/>
    <InputRange bind:rngVal={lightBound} rngMin={20} rngMax={50} rngLabel={'Light'} />
    <Colorwave bind:selectedWave={lightWave} />
    
    <button id="close" class="icon-button" on:click={toggleFilters}>
        <i class="far fa-times"></i>
    </button>
</div>

<section>

    {#each basePal as item}
        <PalColor colorObj={item} />
    {/each}

</section>

<button id="filters" class="icon-button" on:click={toggleFilters}>
    <i class="far fa-sliders-h"></i>
</button>

<button id="random-color" class="icon-button" on:click={randBaseColor} >
        <i class="far fa-random"></i>
</button>



<style>
    section {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        height: 100%;
        /* background: var(--base-color); */
        background: black;
    }

    .controls {
        width: 100%;
        background: white;
    }

    #color-strip {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        width: 100vw;
        height: 16px;
    }

    #color-strip div {
        flex: 1;
    }

    #random-color {
        position: fixed;
        bottom: 96px;
        right: 1em;
        background: black;
        color: white;
    }

    #filters {
        background: white;
        color: black;
        position: fixed;
        bottom: 24px;
        right: 1em;
    }

    #filters:active {
        background: white;
        color: black;
    }

    .controls #close {
        background: black;
        color: white;
        position: fixed;
        align-self: center;
        margin-bottom: 0;
        bottom: 1em;
    }

    .hide-controls {
        display: none !important;
    }

    /* Tiny */
    @media only screen and (min-width : 320px) {
        .controls {
            display: flex;
            position: fixed;
            top: 0;
            flex-direction: column;
            padding: 2em 1em;
            align-items: stretch;
            justify-content: flex-start;
            z-index: 1000;
            /* min-height: 900px; */
            /* height: auto; */
            height: 100%;
            overflow-y: scroll;
        }

        

        :global(.controls > *)  {
            width: 100%;
            /* background: lightpink; */
            height: 56px;
            margin-bottom: 2em;
        }

        section {
            display: flex;
            overflow-y: scroll;
            justify-content: flex-start;
            /* padding-bottom: 25%; */
            flex-direction: column;
            flex: 1;
        }
    }

    /* Extra Small Devices, Phones */ 
    @media only screen and (min-width : 480px) {
        
    }

    /* Tablets */
    @media only screen and (min-width : 768px) {

        .controls {
            display: flex !important;
            overflow-y: unset;
            position: sticky;
            top: 79px;
            padding: 1em 1em;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            z-index: 99;
            /* flex-shrink: 0; */
            min-height: unset;
            height: 100px;
        }

        :global(.controls > *)  {
            margin-bottom: 0;
            margin-right: 1em;
        }

        :global(.controls > *:nth-last-child(1))  {
            margin-right: 0;
        }

        #random-color {
            bottom: 2vh;
            right: unset;
        }

        #filters, #close, #color-strip {
            display: none;
        }

        section {
            justify-content: center;
            flex-wrap: wrap;
            flex: 1 0 auto;
            padding-bottom: 0;
            flex-direction: row;
            align-items: stretch;
            height: auto;
        }

    }

    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {

    }

    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {

    }

    .icon-button {
        padding: 0.5em;
        border-radius: 100%;
        min-width: 44px;
        min-height: 44px;
        font-size: 1.5em;
        width: auto !important;
        height: auto !important;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.5;
    }

    .icon-button:active {
        opacity: 1;
    }

</style>