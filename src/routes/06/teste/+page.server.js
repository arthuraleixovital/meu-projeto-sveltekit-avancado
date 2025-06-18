export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const mensagem = formData.get('mensagem');
        return { mensagem };
    }
};