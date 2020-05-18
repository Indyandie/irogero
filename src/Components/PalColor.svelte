<script>
    import { fade } from 'svelte/transition'
    import copy from 'copy-to-clipboard'
    import { css, injectGlobal } from 'emotion'

    export let colorObj = {}
    
    $: textColor = colorObj.displayColor || '#ffffff'
    $: colorHex = colorObj.hex || '#00ff00'
    $: width = 100/((colorObj.steps * 2) - 1)

    let visible = false

    function copyToClip() {
        copy(colorHex)
        visible = true
        setTimeout(() => {
            visible = false
        }, 777)
    }

    $: notificationColor = css`
        background: ${textColor};
        color: ${(textColor === 'black') ? 'white' : 'black'};
    `

    $: color = css`
        background: ${colorHex};
        @media (min-width: 768px) {
            width: ${width}% !important;
        };
    `

</script>


<div  on:click={copyToClip} class={`colorSamples ${color}`}>

    <div class="colour" style={`color: ${textColor}`} >
        {colorHex.substr(1)}
    </div>

    {#if visible}
    <div transition:fade class={`notification ${notificationColor}`}>
        <i class="fas fa-hand-scissors"></i> copied
    </div>
    {/if}

</div>



<style>

    .colorSamples {
        font-family: 'Tofino', monospace;
        text-align: center;
        text-transform: uppercase;
        transition: background 700ms linear;
    }

    .colorSamples:active {
        background: rgba(0, 0, 0, .75) ;
        
    }

    .colour {
        transition: color 140ms linear;
    }

    .colorSamples:active .colour {
        color: white !important;
    }

    .notification {
        border-radius: 0.8em;
        padding: 0.8em;
        font-family: 'Tofino', Courier, monospace;
        font-size: 1em;
        text-transform: capitalize;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        z-index: 99;
    }

    .fas {
        margin-right: 8px;
    }

    /* TINY */
    @media only screen and (min-width : 320px) {

        .colorSamples {
            width: 100%;
            display: flex;
            align-content: flex-start;
            justify-content: space-between;
            padding: 0 1em;
            align-items: center;
            min-height: 100px;
        }

        .colour {
            font-size: 1.75em;
        }

    }

    /* Extra Small Devices, Phones */ 
    @media only screen and (min-width : 480px) {
        .colour {
            font-size: 1.8em;
        }
    }

    /* Small Devices, Tablets */
    @media only screen and (min-width : 768px) {

        .colorSamples {
            display: flex;
            padding: 0;
            align-items: center;
            justify-content: center;
        }

        .colour {
            font-size: 1.25em;
            display: flex;
            justify-content: start;
            flex-wrap: wrap;
        }

        .notification {
            position: absolute;
            bottom: 10vh;
            width: initial;
            padding: 1em;
        }

    }

    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {
        .colour {
            font-size: 1.8em;
        }
    }

    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {

    }

</style>