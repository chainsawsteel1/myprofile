<script>
    import { movepg } from "$lib/utils";
    import { Github } from "svelte-bootstrap-icons";
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
    <br>
    <br>
    <br>
    <a href="https://github.com/chainsawsteel1/myprofile" target="_blank" class="icon"><Github  width={40} height={40}/></a>
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

    .icon {
        background-color: unset;
        color: var(--txt-color);
    }

    .icon:hover {
        box-shadow: unset;
    }
</style>