<script>
    let { form } = $props();
  </script>
   
  <form method="POST">
    <input name="nome" type="text" placeholder="E-mail de usuário" value={form?.email || ''} required />
    <input name="email" type="email" placeholder="E-mail de usuário" value={form?.email || ''} required />
    <input name="nascimento" type="date" required />
    <button>Cadastrar</button>
  </form>
   
  {#if form?.error}
    <p style="color: red">{form.error}</p>
  {/if}