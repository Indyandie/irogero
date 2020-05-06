<script>
    export let selectedWave = 'easeInCubic'
    let waveArray = [
        'linear', 

        'easeInCubic', 
        'easeOutCubic', 
        'easeInOutCubic',

        'easeInSine',
        'easeOutSine',
        'easeInOutSine',

        'easeInQuad',
        'easeOutQuad',
        'easeInOutQuad',

        'easeInQuart',
        'easeOutQuart',
        'easeInOutQuart',

        'easeInCirc',
        'easeOutCirc',
        'easeInOutCirc',

        'easeInQuint',
        'easeOutQuint',
        'easeInOutQuint',

        'easeInExpo',
        'easeOutExpo',
        'easeInOutExpo',

        'easeInBack',
        'easeOutBack',
        'easeInOutBack',
    ]
</script>

<select name="wave" bind:value={selectedWave}>
    {#each waveArray as item}
    <option value={item}>{item}</option>    
    {/each}
</select>

<style>
    select {
        min-width: 180px;
        padding: 0.75em;
        margin-bottom: 2em;
        border: 2px solid #444;
    }
</style>

