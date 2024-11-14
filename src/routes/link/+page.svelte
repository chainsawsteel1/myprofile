<script lang="ts">
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";
    import { movepg } from "$lib/utils";
    import { copy } from "$lib/utils";

    import Swal from "sweetalert2";

    export const discordName = () => {
        Swal.fire({
            text: "Discord: chainsawsteel1",
            color: "var(--text-color)",
            background: "rgba(0, 0, 0, 0)",
        })
    }

    export const sougo = () => {
        Swal.fire({
            imageUrl: "/link/chains.webp",
            html: `サイト名: chainsのサイト<br>リンク: https://chainsawsteel1.vercel.app<br>相互リンクに関する連絡はSNS欄の真ん中2つのどれかへお願いします。`,
            imageWidth: "300px",
            color: "var(--text-color)",
            background: "rgba(0, 0, 0, 0)",
            confirmButtonText: "リンクをコピーする",
            footer: "コピーしない場合は外側をクリック"
        }).then((result) => {
            if (result.isConfirmed) {
                copy("https://chainsawsteel1.vercel.app");
            }
        })
    }
</script>

<main>
    <article>
        <div id="chainslink">
            <h2>クイックシェア</h2>
            <p>かんたんに共有できるように、よく見るリンクまとめのやつを作りました</p>
            <button on:click={() => movepg("/cl")}>chains link</button>
        </div>

        <br>

        <div class="sns" id="sns">
            <h2>SNS</h2>

            <a href="https://github.com/chainsawsteel1" target="_blank">GitHub</a>

            <br>

            <button on:click="{discordName}">Discord</button>

            <br>

            <a rel="me" href="https://fedibird.com/@chains" target="_blank">Fedibird</a>

            <br>

            <a href="https://www.yukkukomei.com/@chainsawsteel1" target="_blank">MMMC</a>
        </div>
        
        <br>

        <div class="sougo" id="sougolink">
            <h2>相互</h2>
            <p>相互リンクを組んで頂きありがとうございます</p>
            
            <br>

            <div class="natsumi">
                <img src="/link/natsumi.webp" alt="バナー画像 - natsumi" width="300px">
                <br>
                <a href="https://natumi.tkngh.jp/" target="_blank">Der Faulpelzesversteck(デァ・ファオルペルツェスファーシュテック)</a>
                <p>夏見馨さんが管理しているリンク集兼日記サイト<br>Fediverseの世界によく居る方です。作品が好みの感じで最高です。</p>
            </div>

            <br>

            <div class="hgzt">
                <img src="/link/hgzt.webp" alt="バナー画像 - hgzt" width="300px">
                <br>
                <a href="https://blog.hgzt.net/" target="_blank">はがね通信</a>
                <p>よつは(hgzt23678)さんとtakeさんが管理しているブログサイト<br>今の所スマホ関係のものが多いです。</p>
            </div>

            <br>

            <button on:click="{sougo}">相互リンク募集中</button>
        </div>
    </article>
</main>

<style>
    img {
        width: 300px;
    }
</style>

<MetaTags
    title="LINK"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'LINK',
        description: 'chainsのSNSのリンクや相互リンクがあります。',
        siteName: 'chainsのサイト'
    }}
/>