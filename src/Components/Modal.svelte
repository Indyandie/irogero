<script>
    import {fade} from 'svelte/transition'

    export let colorList = []

    export let visibility = false
</script>

<div id="overlay" transition:fade>
    <div id="modal">
        <h1>Color Hex</h1>
        {#each colorList as item}
        <p>
            {item}
        </p>
        {/each}

        <button on:click={() => {visibility = false}}>Close</button>
    </div>
</div>


<style>
    #overlay {
        position: absolute;
        background: rgba(255, 255, 255, .45);
        /* opacity: .45; */
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        font-family: 'Tofino', Courier, monospace;
        z-index: 100000;
    }

    #modal {
        opacity: 1;
        background: white;
        margin-top: 7em;
        padding: 2em; 
        min-width: 320px;
        width: 33%;
        min-height: 320px;
    }

    h1 {
        margin-bottom: 1em;
    }

    p {
        font-size: 1.25em;
    }

    button {
        background: var(--base-color);
        color: var(--color-0); 
        font-size: 1.5em;
        padding: 0.5em;
        margin-top: 1em
    }

    :global(body) {
        height: 100vh;
        overflow-y: hidden;
    }

</style>