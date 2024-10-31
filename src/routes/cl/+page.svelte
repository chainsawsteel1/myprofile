<script lang="ts">
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";

    import { Github, Activity, Discord, Share } from "svelte-bootstrap-icons";
    import Swal from "sweetalert2";

    import { copy } from "$lib/utils";

    export const share = () => {
        Swal.fire({
            title: "chains",
            imageUrl: "/cl/qrcode.webp",
            text: $page.url.href,
            imageWidth: "200px",
            imageHeight: "200px",
            confirmButtonText: "Copy the link",
            color: "var(--text-color)",
            background: "rgba(0, 0, 0, 0)",
        }).then((result) => {
            if (result.isConfirmed) {
                copy($page.url.href);
            }
        })
    }
</script>

<main>
    <article>
        <div class="center">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="share" on:click={share}>
                <Share width={25} height={25}/>
            </div>

            <div>
                <p class="link">chains link</p>
                <img class="myicon" src="/favicon.png" alt="chains" style="width: 120px;">
            </div>

            <div>
                <h2>chains</h2>
                <p>工事中</p>
            </div>

            <div class="cards">
                <a class="abox" href="https://github.com/chainsawsteel1" target="_blank">
                    <div class="card">
                        <div class="icon"><Github width={40} height={40}/></div>
                        <div class="txt">
                            <h3>GitHub</h3>
                            <p>私の書いたクソコード</p>
                        </div>
                    </div>
                </a>
                <a class="abox" href="https://www.yukkukomei.com/@chainsawsteel1" target="_blank">
                    <div class="card">
                        <div class="icon"><Activity width={40} height={40}/></div>
                        <div class="txt">
                            <h3>Misskey</h3>
                            <p>ハイパー日常会話</p>
                        </div>
                    </div>
                </a>
                <a class="abox" href="https://discordapp.com/users/776037415320158209" target="_blank">
                    <div class="card">
                        <div class="icon"><Discord width={40} height={40}/></div>
                        <div class="txt">
                            <h3>Discord</h3>
                            <p>DMはここに</p>
                        </div>
                    </div>
                </a>
            </div>

            <div class="tags">
                <div class="tag">
                    GitHub <small>PY / SVELTE</small>
                </div>
                <div class="tag">
                    Misskey <small>MMMC</small>
                </div>
            </div>

        </div>
    </article>

    <footer>
        <p class="link">chains link</p>
        Created by <a href="https://svelte.dev/">Svelte</a> with <a href="https://vercel.com/">Vercel</a>
    </footer>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Birthstone&display=swap');

    article {
        padding-top: .5em;
        width: 95%;
    }

    .link {
        font-family: "Birthstone", cursive;
        font-size: 40px;
    }

    .center {
        text-align: center;
    }

    .myicon {
        transition: .3s;
        background-color: var(--gray-5);
        border-radius: 250px;
        padding: 10px;
        position: relative;
    }

    .cards {
        display: flex;
        width: 100%;
        margin-top: 1em;
        justify-content: center;
        flex-wrap: wrap;
        text-align: center;
        flex-direction: column;
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

    .abox {
        text-align: center;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    footer {
        text-align: center;
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

    .icon {
        padding: 5px;
        width: 40px;
        height: 30px;
    }

    .txt {
        text-align: left;
        padding-left: 20px;
    }

    .tags {
        margin-top: 2em;
        margin-left: .7em;
        display: flex;
        width: 100%;
    }

    .tag {
        background-color: var(--gray-5);
        border-radius: 10px;
        width: fit-content;
        padding: 5px;
        margin-right: .5em;
    }

    .share {
        background-color: var(--gray-5);
        position: fixed;
        width: 45px;
        height: 45px;
        margin: auto;
        border-radius: 9999px;
        padding: 9px;
        padding-left: 5px;
        top: 1em;
        right: 1em;
    }

    @container (min-width: 520px) {
        article {
            margin: auto;
            width: 500px;
        }
        .card {
            width: 470px;
        }
        .share {
            transform: translate(450px);
            right: unset;
        }
    }
</style>

<MetaTags
    title="chains"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'chains',
        description: 'SNS、GitHub等のリンク',
        images: [
            {
                url: "/cl/ogp.png",
                alt: "OGP画像",
            }
        ],
        siteName: 'chains link'
    }}
/>