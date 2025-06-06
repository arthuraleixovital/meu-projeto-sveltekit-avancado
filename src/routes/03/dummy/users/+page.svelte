<script>
    let { data } = $props();
</script>
<h1>Usuários:</h1>
{#each data.users.users as user}
    <li><a href="/03/dummy/users/{user.id}">{user.firstName}</a></li>
{/each}
<br/>
<button class="btn btn-secondary mt-4" onclick={history.back()}>
    Voltar
</button>