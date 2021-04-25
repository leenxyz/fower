<script>
  export let name
  import Nested from './Nested.svelte'
</script>

<Nested />
<main>
  <h1 bgOrange300 p6 toCenter>Hello xfooo {name}!</h1>
  <div debug column toRight>
    <div>AA</div>
    <div>BshhhsjB</div>
  </div>

  <div debug row toCenter>
    <div>AA</div>
    <div>BB</div>
  </div>

  <div debug row toRight>
    <div>AA</div>
    <div>BB</div>
  </div>

  <p class="foo" p6 bgYellow300>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte
    apps.
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
