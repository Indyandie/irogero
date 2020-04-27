<script>
    export let rngVal = 10
    export let rngMin = 0
    export let rngMax = 100
    export let rngLabel = 'Label'
    export let margin = false
</script>

<div class:margin >
    <label for="range">{rngLabel}</label> <br>
    <input type="range" name="range" bind:value={rngVal} min={rngMin} max={rngMax} />
    <span>{rngVal}</span>
</div>

<style>
    .margin {
        margin-bottom: 2em;
    }
</style>