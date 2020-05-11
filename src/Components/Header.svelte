<script>
    export let bgColor = '#56ac89'
</script>

<header style="{`background: ${bgColor};`}">
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
        color: azure; 
        padding: 1em 2em;
        transition: background-color 400ms linear;
    }

    h1, p {
        margin: 0;
        margin-right: .4em;
    }

    #controls {
        font-size: 2em;
    }
</style>