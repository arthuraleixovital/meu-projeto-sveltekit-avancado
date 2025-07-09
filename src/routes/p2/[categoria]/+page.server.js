import { produtos } from '$lib/server/p2/produtos.js';

export function load({ params, url }) {
  let busca = url.searchParams.get('busca');
  if (!busca) busca = '';

  let produtosFiltrados = [];
  for (const produto of produtos) {
    if (
      produto.categorias.includes(params.categoria) &&
      (busca == '' || produto.titulo.toLowerCase().includes(busca) || produto.descricao.toLowerCase().includes(busca))
    ) {
      produtosFiltrados.push(produto);
    }
  }
  return { produtosFiltrados, categoria: params.categoria };
}
