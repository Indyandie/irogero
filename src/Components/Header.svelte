<script>
    
</script>

<header class="gero">
    <h1><i class="fas fa-frog"></i>色ーげろ</h1> 
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
        transition: background-color 400ms linear;
        background: var(--base-color);
    }

    h1 {
        margin: 0;
        margin-right: .4em;
        font-family: 'Tofino', 'Courier New', Courier, monospace;
        font-weight: 300;
    }

    .fa-frog {
        margin-right: .25em;
    }

    :global(header.gero div a i){
        color: var(--color-0);
    }

    :global(header.gero div *){
        cursor: pointer;
    }


    @media only screen and (min-width : 320px) {
        header {
            padding: 1em;
            z-index: 100;
        }

        

        :global(header h1) {
            font-size: 1.5em;
        }

    :global(header div) {
            font-size: 1.5em;
        }
        
    }

    :global(header #controls *:last-child) {
        margin-left: 0.125em;
    }



    /* Extra Small Devices, Phones */ 
    @media only screen and (min-width : 480px) {
        
    }

    /* Small Devices, Tablets */
    @media only screen and (min-width : 768px) {

        header {
            padding: 1em 2em;
        }

        :global(header h1) {
            font-size: 2em;
        }

        :global(header div) {
            font-size: 2em;
        }

    }

    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {

    }

    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {

    }

</style>