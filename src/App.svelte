<script lang='ts'>
  import { onMount } from 'svelte';
  import { loadClients, loading, error, filteredClients } from './stores/clientsStore';
  import ClientTable from './components/ClientTable.svelte';
  import ClientFilters from './components/ClientFilters.svelte';
  import Loading from './components/Loading.svelte';
  import Error from './components/Error.svelte';

  onMount(loadClients);
</script>

<main>
  <h1>miniCRM</h1>
  <ClientFilters/>

  {#if $loading}
    <Loading message='Loading clients...' />
  {:else if $error}
    <Error message={$error} />
  {:else}
    <ClientTable clients={$filteredClients} />
  {/if}
</main>