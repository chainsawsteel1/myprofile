<script>
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";
    import { movepg } from "$lib/utils";

    import Swal from "sweetalert2";

    function discordName() {
        Swal.fire({
            text: "Discord: chainsawsteel1",
            color: "var(--dtext-color)",
            background: "var(--btn-color)",
        });
    }
</script>

<main>
    <article>
        <div class="sns">
            <h2>SNS</h2>

            <a href="https://github.com/chainsawsteel1" target="_blank">GitHub</a>

            <br>

            <button on:click="{discordName}">Discord</button>
        </div>


        <br>

        <div class="sougo">
            <h2>相互</h2>

            <div class="chains">
                <img src="/link/chains.webp" alt="バナー画像 - chains" width="300px">
                <br>
                <a href="/">chainsのサイト(このサイト)</a>
                <p>chainsawsteel1が管理しているリンク集兼ブログサイト<br>上の画像はサンプルです。相互リンクの時に貼り付けて下さい。</p>
            </div>

            <br>

            <div class="natsumi">
                <img src="/link/natsumi.webp" alt="バナー画像 - natsumi" width="300px">
                <br>
                <a href="https://natumi.tkngh.jp/" target="_blank">Der Faulpelzesversteck(デァ・ファオルペルツェスファーシュテック)</a>
                <p>夏見馨さんが管理しているリンク集兼ブログサイト<br>Fediverseの世界によく居る方です。作品が好みの感じで最高です。</p>
            </div>
        </div>
    </article>
</main>

<MetaTags
    title="LINK"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'LINK',
        description: 'chainsのサイト - LINK',
    }}
/>