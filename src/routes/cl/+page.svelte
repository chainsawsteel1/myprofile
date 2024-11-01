<script lang="ts">
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";

    import { Share, House } from "svelte-bootstrap-icons";
    import Swal from "sweetalert2";

    import { copy } from "$lib/utils";
    import { movepg } from "$lib/utils";

    import GitHub from "../../components/card/GitHub.svelte";
    import Misskey from "../../components/card/Misskey.svelte";
    import Discord from "../../components/card/Discord.svelte";

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
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="home" on:click={() => movepg("/")}>
                <House width={25} height={25}/>
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
                <GitHub>私の書いたクソコード</GitHub>
                <Misskey>ハイパー日常会話</Misskey>
                <Discord>DMはここに</Discord>
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

    .home {
        background-color: var(--gray-5);
        position: fixed;
        width: 45px;
        height: 45px;
        margin: auto;
        border-radius: 9999px;
        padding: 9px;
        padding-left: 9px;
        top: 1em;
        left: 1em;
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
        .home {
            transform: translate(5px);
            left: unset;
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