<script>
    import { movepg } from "$lib/utils";
</script>

<menu>
    <h1>MENU</h1>
    <br>
    <br>
    <button on:click={() => movepg("/")}>HOME</button>
    <br>
    <br>
    <button on:click={() => movepg("/blog")}>BLOG</button>
    <br>
    <br>
    <button on:click={() => movepg("/link")}>LINK</button>
</menu>

<style>
    menu {
        position: fixed;
        z-index: 1;
        width: 100%;
        height: 100%;
        top: 4em;
        left: 0;
        padding-top: 10em;
        margin: auto;
        text-align: center;
    }
</style>