import WishlistView from './views/WishlistView.svelte'
import UserView from './views/UserView.svelte'
import Home from './views/Home.svelte'
import type { SvelteComponentTyped } from 'svelte'

interface Route {
  name: string
  path: string
  // TODO: Change type of component
  component: any
}

const routes: Route[] = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Account',
    path: '/user',
    component: UserView,
  },
  {
    name: 'Wishlist',
    path: '/wishlist',
    component: WishlistView,
  },
]

export default routes
