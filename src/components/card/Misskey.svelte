<script lang="ts">
    import { Activity } from "svelte-bootstrap-icons";
</script>

<a class="abox" href="https://www.yukkukomei.com/@chainsawsteel1" target="_blank">
    <div class="card">
        <div class="icon"><Activity width={40} height={40}/></div>
        <div class="txt">
            <h3>Misskey</h3>
            <p><slot/></p>
        </div>
    </div>
</a>

<style>
    .abox {
        text-align: center;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card {
        transition: .3s;
        display: flex;
        background-color: var(--gray-5);
        width: 95%;
        padding: 10px;
        border-radius: 10px;
        margin: 5px;
        height: 70px;
    }
    .card:hover {
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
    }

    .icon {
        padding: 5px;
        width: 40px;
        height: 30px;
    }

    .txt {
        text-align: left;
        padding-left: 20px;
    }

    a {
        background: unset;
        margin-top: unset;
        margin-bottom: unset;
        padding: unset;
        min-width: unset;
        text-decoration: underline;
        box-shadow: unset;
    }
</style>