<script>
    let { data } = $props();
    console.log(data.pokemon);
</script>
{#each data.pokemon as pokemon}
{console.log(pokemon)}
{/each}