<script>
  import Header from './Header'
  import Modal from './Modal'
  import ColorPalBase from './ColorPalBase'
  import { colors } from './stores/store'
  import { testing } from './stores/style'

  let selColor = '#56ac89' // initial color
  let modalVisible = false

</script>


{#if modalVisible}
<Modal colorList={$colors} bind:visibility={modalVisible} />
{/if}

  <i  on:click={() => {modalVisible=true}}
      class="far fa-save">
  </i>
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
