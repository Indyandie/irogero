<script>
    import { fade, fly } from 'svelte/transition'
    import copy from 'copy-to-clipboard'
    import { css } from 'emotion'

    export let colorObj = {}

    console.log(colorObj)
    
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
        width: ${width}%;
        background: ${colorHex};
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
        height: 100%;
        /* flex-grow: 2;  */
        display: inline-flex;
        padding-top: 4em;
        font-family: 'Tofino', monospace;
        align-items: flex-start;
        justify-content: center;
        text-align: center;
        font-size: 2.5em;
        text-transform: uppercase;
        transition: background 700ms linear;
    }

    .colour {
        transition: color 140ms linear;
    }

    .colorSamples:active {
        background: rgba(0, 0, 0, .75) ;
        
    }

    .colorSamples:active .colour {
        color: white !important;
    }

    .colorPal {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
    }

    .notification {
        position: absolute;
        bottom: 10vh;
        border-radius: 1em;
        width: initial;
        padding: 1em;
        font-family: 'Tofino', Courier, monospace;
        font-size: 0.5em;
        text-transform: capitalize;
    }



</style>