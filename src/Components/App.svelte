<script>

  import Header from './Header'
  import Modal from './Modal'
  import ColorPalBase from './ColorPalBase'
  import { colors, style } from './stores/store'
  import { injectGlobal } from 'emotion'

  let selColor = '#56ac89' // initial color
  let modalVisible = false

  $: colorBase  = $colors[Math.round($colors.length/2)]
  $: colorLight = $colors[0]
  $: colorDark  = $colors[$colors.length]

  $: injectGlobal`
    :root {
      --color-0: ${colorLight};
      --color-100: ${colorDark};
      --base-color: ${colorBase};
    }
  `

</script>


{#if modalVisible}
<Modal colorList={$colors} bind:visibility={modalVisible} />
{/if}


<Header>
  <i  on:click={() => {modalVisible=true}}
      class="fal fa-save">
  </i>
  <a target="_blank" href="https://github.com/Indyandie/irogero">
    <i class="fab fa-github"></i>
  </a>
</Header>

<main>

  <ColorPalBase bind:baseColor={selColor} />

</main>



<style>

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
</style>