<script>
    export let bgColor = '#56ac89'
</script>

<header>
    <h1><i class="fal fa-frog"></i> Irogero</h1> 
    <div id="controls">
        <slot>
            <i class="fas fa-hand-spock"></i>
        </slot>
    </div>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        color: var(--color-0); 
        padding: 1em 2em;
        transition: background-color 400ms linear;
        background: var(--base-color);
    }

    h1 {
        margin: 0;
        margin-right: .4em;
    }

    #controls {
        font-size: 2em;
    }
</style>