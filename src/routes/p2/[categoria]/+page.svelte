<script>
  let { data } = $props();
</script>

<h1>Produtos da categoria "{data.categoria}"</h1>

<form>
  <div class="input-group mb-3">
    <input name="busca" class="form-control" placeholder="Busca por título ou descrição" />
    <button class="btn btn-outline-secondary">Busca</button>
  </div>
</form>

<div class="list-group">
  {#each data.produtosFiltrados as produto}
    <div class="list-group-item list-group-item-action active" aria-current="true">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{produto.titulo}</h5>
        <small>{produto.preco}</small>
      </div>
      <p class="mb-1">{produto.descricao}</p>
      <small class="text-body-secondary">
        {#each produto.categorias as categoria}
          <span class="badge text-bg-secondary"><a class="text-decoration-none text-light" href="/p2/{categoria}">{categoria}</a></span
          >&nbsp;
        {/each}
      </small>
    </div>
  {/each}
</div>
