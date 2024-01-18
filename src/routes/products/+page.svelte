<script>
	export let data;
    const { items } = data;
</script>

<h1 class="pushDown">Products page</h1>

{#each items as item}
    <div class="items">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
    </div>
{/each}

<style>
    .pushDown {
        padding-top: 70px;
        padding-bottom: 30px;
    }

    .items {
        padding-bottom: 20px;
        padding: 10px 30px;
    }
</style>