<script lang="ts">
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";

    import Swal from "sweetalert2";

    function ggrks() {
        Swal.fire({
            text: "ググれカス",
            color: "var(--text-color)",
            background: "rgba(0, 0, 0, 0)",
        });
    }
    function ggrbk() {
        Swal.fire({
            text: "ググれボケ(またはバカ)",
            color: "var(--text-color)",
            background: "rgba(0, 0, 0, 0)",
        });
    }

    let sharp = $page.url.search
    let search = sharp.substr(sharp.indexOf('?') + 1);

    let data

    export const genogp = () => {
        if (search == '') {
            data = "人に聞くのは最終手段です。一通り調べてから聞くようにしましょう。"
        } else {
            data = search
        }
        return data
    }
</script>

<main>
    <article>
        <div class="ggrks">
            <h2 class="ggj">GooglingGo! Japan</h2>

            {#if search}
                    <h2>🔍 {search}</h2>
            {/if}

            <p>お好みの検索エンジンを選んでください</p>

            <br>

            <a class="abtn" href="https://www.google.com/search?q={search}" target="_blank">Google</a>
            <br>
            <a class="abtn" href="https://www.bing.com/search?q={search}" target="_blank">Bing</a>
            <br>
            <a class="abtn" href="https://duckduckgo.com/?q={search}" target="_blank">DDG</a>
            <br>
            <a class="abtn" href="https://search.yahoo.com/search?q={search}" target="_blank">Yahoo!</a>

            <br>
            <br>

            <button on:click="{ggrks}">GGRKSとは</button>
            <br>
            <button on:click="{ggrbk}">GGRBKとは</button>

            <br>
            <br>

            {#if !search}
                <p>Tips: ?以降にワードを指定することで、各検索エンジンへのリンクから直接検索できるようになります。<a href="/tools/ggrks?GGRKS" target="_blank">例</a></p>
            {/if}
            <a href="https://github.com/ggrbk/ggrbk.github.io" target="_blank">元ネタ</a>
        </div>
    </article>
</main>

<style>
    .ggj {
        background:linear-gradient(90deg, #4889F4, #EB493B, #FBBD0C);
        width: fit-content;		
        -webkit-background-clip:text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>

<MetaTags
    title="GooglingGo! Japan"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'GGRKS',
        description: '🔍 ' + genogp(),
        images: [
            {
                url: "/ggr.png",
                alt: "ファビコン",
            }
        ],
        siteName: 'GooglingGo! Japan'
    }}
/>