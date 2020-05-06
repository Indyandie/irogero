<script>
    import { fade } from 'svelte/transition'

    export let textColor = '#ffffff'
    export let colorName = 'name'
    export let colorHex = '#00ff00'
</script>


<div transition:fade class="colorSamples" style="background:{colorHex}">
    <div class="colour" style={`color: ${textColor}`} >
        {colorName} <br>
        <strong>{colorHex}</strong>
    </div>
</div>


<style>

    .colour {
        
    }

    .colorSamples {
        height: 7em;
        width: 7em;
        box-sizing: content-box;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 1.5em 0;
        border: 4px solid #444;
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

</style>