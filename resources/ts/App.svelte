<script lang="ts">
  import { Router, Link, Route } from 'svelte-routing'
  import routes from './routes'
  import WishList from './components/WishList.svelte'
  import NavbarComponent from './components/NavbarComponent.svelte'

  export let url = ''
</script>

<div>
  <Router {url}>
    <NavbarComponent />
    {#each routes as route}
      <Route path={route.path} component={route.component} />
    {/each}
  </Router>
</div>
