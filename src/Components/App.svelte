<script>
  import Header from './Header'
  import ColorPalBase from './ColorPalBase'

  $: selColor = '#56ac89' // initial color

</script>


<Header bgColor={selColor} />

<main>

  <!-- <p id="instructions">Pick a <strong style={`color: ${selColor}`}>colour</strong>.</p> -->
  <ColorPalBase bind:baseColor={selColor} />

</main>


<style>
  main {
    padding: 2em 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  #instructions {
    margin-bottom: 1em;
    font-size: 2em;
  }

</style>
