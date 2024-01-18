<script>
	export let data;
</script>

<h1 class="pushDown">{data.title}</h1>
<div>{@html data.content}</div>
<style>
    .pushDown {
        padding-top: 70px;
    }
</style>