<script>
    import { fade } from 'svelte/transition'

    export let textColor = '#ffffff'
    export let colorName = 'name'
    export let colorHex = '#00ff00'
</script>


<div  class="colorSamples" style="background:{colorHex}">
    <div class="colour" style={`color: ${textColor}`} >
        {colorHex.substr(1)}
    </div>
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

    .colorPal {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
    }

</style>