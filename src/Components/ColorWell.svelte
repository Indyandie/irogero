<script>
    export let wellColor = '#ff0000'
    export let margin = false
</script>


<!-- <code>{wellColor}</code>     -->
<input class:margin type="color" bind:value={wellColor} name="selectedColor" id="colorWell">
<!-- <label for="colorWell">HEX Color</label><br> -->

<style>

    label {
        margin-bottom: 2em;
    }

    input[type="color"] {
        -webkit-appearance: none;
        outline: none;
        border: none;
        min-width: 32px;
        height: 3em;
        /* width: 7em;
        height: 7em; */
        /* border: 4px solid #444;
        border-radius: 100%; */
        background: none;
        transition: background-color 300ms linear;
    }

    /* input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
    } */
    /* input[type="color"]::-webkit-color-swatch {
        border: solid 1px #000; 
        border-radius: 40px;
        } */

    .margin {
        /* margin-bottom: 2em; */
    }
        
</style>

