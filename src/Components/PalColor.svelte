<script>
    import { fade, fly } from 'svelte/transition'
    import copy from 'copy-to-clipboard'

    export let textColor = '#ffffff'
    export let colorName = 'name'
    export let colorHex = '#00ff00'

    let visible = false

    function testing() {
        copy(colorHex)
        visible = true
        setTimeout(() => {
            visible = false
        }, 777)
    }
    
</script>


<div on:click={testing} class="colorSamples" style="background:{colorHex}">
    <div class="colour" style={`color: ${textColor}`} >
        {colorHex.substr(1)}
    </div>

    {#if visible}
    <div transition:fly id="notification">
        <i class="fas fa-hand-scissors"></i> copied
    </div>
    {/if}

</div>



<style>

    .colour {
        
    }

    .colorSamples {
        min-height: 10em;
        height: 100%;
        flex-grow: 1; 
        min-width: 10%;
        box-sizing: content-box;
        box-sizing: border-box;
        display: inline-flex;
        padding-top: 1em;
        font-family: 'Tofino', monospace;
        align-items: flex-start;
        justify-content: center;
        text-align: center;
        font-size: 2.5em;
        text-transform: uppercase;
        transition: all 300ms linear;
    }

    .colorSamples:active {
        background: black !important;
        
    }

    .colour:active {
        color: white !important;
    }

    .colorPal {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
    }

    #notification {
        position: absolute;
        bottom: 1vh;
        border-radius: 1em;
        width: initial;
        padding: 1em;
        background: black;
        color: white;
        font-family: 'Tofino', Courier, monospace;
        font-size: 0.5em;
        text-transform: capitalize;
    }

</style>