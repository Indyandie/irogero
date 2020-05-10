<script>
  import Header from './Header'
  import ColorPalBase from './ColorPalBase'

  let selColor = '#56ac89' // initial color

</script>


<Header bgColor={selColor} />

<main>

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

</style>
