import { fail, redirect } from '@sveltejs/kit';
 
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const nome = data.get('nome');
    const email = data.get('email');
    const nascimento = data.get('nascimento');
 
    if (!email || !nome || !nascimento) return fail(400, { error: 'Email e senha são obrigatórios.', email, nome, nascimento });
 
    if (!email.includes('@')) return fail(400, { error: 'Email inválido.', email });
 
    if (email == "email@inexistente") return fail(400, { error: 'Email ou senha inválidos.', email });

    let agora= new Date();
    let nascimentoDate = new Date(nascimento);
    if (agora - nascimentoDate < 378691200000) return fail(400, { error: 'Você ainda não completou 12 anos!', email, nome, nascimento });
 
    redirect(303, '/06/profile');
  }
};