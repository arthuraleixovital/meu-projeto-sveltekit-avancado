export async function load() {
<<<<<<< HEAD
    const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
    const usuarios = await resposta.json();
    return { usuarios };
}
=======
  const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
  const usuarios = await resposta.json();
  console.log('Abacate');
  return { usuarios };
}
>>>>>>> 8dd622ffcdf5a8a620cadc0a3f528600db6469de
