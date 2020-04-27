<script>
    export let wellColor = '#ff0000'
    export let margin = false
</script>
    
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
        width: 4em;
        height: 4em;
        border: none;
        border-radius: 40px;
        background: none;
        transition: background-color 300ms linear;
    }

    input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
    }
    input[type="color"]::-webkit-color-swatch {
        border: solid 1px #000; /*change color of the swatch border here*/
        border-radius: 40px;
    }

    .margin {
        margin-bottom: 2em;
    }
        
</style>

