<script>
    export let rngVal = 2
    export let rngMin = 0
    export let rngMax = 100
    export let rngLabel = 'Label'
    export let margin = false
    export let customLabel = false
</script>

<div class:margin >
    <label for="range">
        <strong>{rngLabel}</strong>
        <span>{customLabel || rngVal}</span>
    </label>
    <input type="range" name="range" bind:value={rngVal} min={rngMin} max={rngMax} />
    
</div>

<style>

    label {
        display: flex;
        justify-content: space-between;
    }

    input {
        width: 100%;
    }


    :root {
        --gero-track-bg-color: #333;
        --gero-track-bg-color-focus: cornflowerblue;
        --gero-track-width: 100%;
        --gero-track-width: 100%;
        --gero-track-height: 12px;
        --gero-track-cursor: pointer;
        --gero-track-border-radius: 8px;

        --gero-thumb-border: 2px solid #333;
        --gero-thumb-border-radius: 100%;
        --gero-thumb-size: 32px;
        --gero-thumb-bg: #fff;
        --gero-thumb-align: -12px;
    }
/* ++++++++++++++++++++++ */
/* Webkit */
/* ++++++++++++++++++++++ */

    input[type=range] {
        -webkit-appearance: none;
        margin: 16px 0 24px;
        width: 100%;
    }

    input[type=range]:focus {
        outline: none;
    }

    input[type=range]::-webkit-slider-runnable-track {
        width: var(--gero-track-width);
        height: var(--gero-track-height);
        cursor: var(--gero-track-cursor);
        background: var(--gero-track-bg-color);
        border-radius: var(--gero-track-border-radius);
        /* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
        /* animate: 0.2s; */
        /* border: 0.2px solid #010101; */
    }

    input[type=range]::-webkit-slider-thumb {
        border: var(--gero-thumb-border);
        height: var(--gero-thumb-size);
        width: var(--gero-thumb-size);
        border-radius: var(--gero-thumb-border-radius);
        background: var(--gero-thumb-bg);
        cursor: var(--gero-track-cursor);
        margin-top: var(--gero-thumb-align);
        -webkit-appearance: none;
    }

    input[type=range]:focus::-webkit-slider-runnable-track {
        background: var(--gero-track-bg-color-focus);
    }

/* ++++++++++++++++++++++ */
/* Firefox */
/* ++++++++++++++++++++++ */

    input[type=range]::-moz-range-track {
        width: var(--gero-track-width);
        height: var(--gero-track-height);
        cursor: var(--gero-track-cursor);
        background: var(--gero-track-bg-color);
        border-radius: var(--gero-track-border-radius);
    }

    input[type=range]::-moz-range-thumb {
        border: var(--gero-thumb-border);
        height: var(--gero-thumb-size);
        width: var(--gero-thumb-size);
        border-radius: var(--gero-thumb-border-radius);
        background: var(--gero-thumb-bg);
        cursor: var(--gero-track-cursor);
    }

/* ++++++++++++++++++++++ */
/* Windows */
/* ++++++++++++++++++++++ */

    input[type=range]::-ms-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        animate: 0.2s;
        background: transparent;
        border-color: transparent;
        border-width: 16px 0;
        color: transparent;
    }
    input[type=range]::-ms-fill-lower {
        background: var(--gero-thumb-bg);
        border: var(--gero-thumb-border);
        border-radius: var(--gero-thumb-border-radius);
    }
    input[type=range]::-ms-fill-upper {
        background: var(--gero-thumb-bg);
        border: var(--gero-thumb-border);
        border-radius: var(--gero-thumb-border-radius);
    }
    input[type=range]::-ms-thumb {
        border: var(--gero-thumb-border);
        height: var(--gero-thumb-size);
        width: var(--gero-thumb-size);
        border-radius: var(--gero-thumb-border-radius);
        background: var(--gero-thumb-bg);
        cursor: var(--gero-track-cursor);
    }
    input[type=range]:focus::-ms-fill-lower {
        background: var(--gero-thumb-bg);
    }
    input[type=range]:focus::-ms-fill-upper {
        background: var(--gero-thumb-bg);
    }


</style>