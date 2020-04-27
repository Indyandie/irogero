<script>
  import Header from './Header'
  import ColorWell from './ColorWell'
  import ColorPalBase from './ColorPalBase'

  let selColor = '#56ac89' // initial color
  let selSteps = 2

</script>


<Header bgColor={selColor} />
<main>

  <p>Pick a <strong style={`color: ${selColor}`}>colour</strong>.</p>

  <ColorWell bind:wellColor={selColor} margin/>
  <!-- <input type="text" bind:value={selColor}> -->

  <ColorPalBase bind:baseColor={selColor} bind:steps={selSteps}/>

</main>


<style>
  main {
    padding: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

</style>
