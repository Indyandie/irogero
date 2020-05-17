<script>
    export let rngVal = 4
    export let rngMin = 0
    export let rngMax = 100
    export let rngLabel = 'Label'
    export let margin = false
    export let customLabel = false
</script>

<div class:margin >
    <label for="range">{rngLabel}</label> <br>
    <input type="range" name="range" bind:value={rngVal} min={rngMin} max={rngMax} />
    <span>{customLabel || rngVal}</span>
</div>

<style>
    .margin {
        /* margin-bottom: 2em; */
        width: auto;
    }
</style>