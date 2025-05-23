<script>
<<<<<<< HEAD
    let { data } = $props();
</script>
 
<h2>Usuários cadastrados</h2>
<ul>
    {#each data.usuarios as usuario}
        <li><strong>{usuario.name}:</strong> {usuario.email}</li>
    {/each}
</ul>
=======
  let { data } = $props();
  console.log('Melancia');
</script>

<h2>Usuários cadastrados</h2>
<ul>
  {#each data.usuarios as usuario}
    <li><strong>{usuario.name}:</strong> {usuario.email}</li>
  {/each}
</ul>
>>>>>>> 8dd622ffcdf5a8a620cadc0a3f528600db6469de
