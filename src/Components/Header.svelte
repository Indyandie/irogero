<script>
    export let bgColor = '#56ac89'
</script>

<header style="{`background: ${bgColor};`}">
    <h1><i class="fal fa-frog"></i> Irogero</h1> 
</header>

<style>
    header {
        display: flex;
        justify-content: start;
        align-items: baseline;
        color: azure; 
        padding: 1em 2em;
        transition: background-color 400ms linear;
    }

    h1, p {
        margin: 0;
        margin-right: .4em;
    }
</style>