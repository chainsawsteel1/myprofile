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
    <br>
    <br>
    <button on:click="{() => movepg("/tools")}">TOOLS</button>
</menu>

<style>
    menu {
        position: fixed;
        z-index: 1;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        margin: auto;
        text-align: center;
    }
</style>