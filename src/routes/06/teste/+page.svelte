<script>
    export let form;
</script>

<form method="POST">
    <input id="mensagem" name="mensagem" type="text" placeholder="Digite sua mensagem." />
    <button type="submit">Enviar</button>
</form>

{#if form?.mensagem}
    <p>Sua mensagem foi: {form.mensagem}</p>
{/if}