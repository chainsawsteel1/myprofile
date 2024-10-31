<script lang="ts">
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    import { loadmd } from "$lib/mdperse";

    let md: string
    onMount(()=> {
        loadmd("https://raw.githubusercontent.com/chainsawsteel1/myprofile/refs/heads/main/README.md").then(html => {
            md = html
        })
    })
</script>

<main>
    <article>
        <div class="center">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <img class="icon pc" src="/favicon.png" alt="chains" style="width: 300px;">
            <img class="sp" src="/favicon.png" alt="chains" style="width: 150px;">
            <h2>chainsの自己満ウェブサイト</h2>
            <p>工事中</p>
        </div>
        <br>
        <p>以下README.md</p>
        <hr>
        {@html md}
        <hr>
    </article>
</main>

<style>
    .center {
        text-align: center;
    }

    .icon {
        transition: .3s;
        background-color: var(--shadow-color);
        border-radius: 250px;
        padding: 10px;
        position: relative;
        transform: scale(.9);
    }

    .icon:hover {
        transform: scale(1.1);
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
    }

    .icon:active {
        transform: scale(.8);
    }

    .sp {
        display: none;
    }

    @container (max-width: 820px) {
        .icon {
            width: 200px;
        }
        .pc {
            display: none;
        }
        .sp {
            display: inline;
        }
    }
</style>

<MetaTags
    title="HOME"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'HOME',
        description: 'ようこそchiansのサイトへ。何度も作り変えましたが、ようやく完成が見えてきたかもしれません。',
        images: [
            {
                url: "/favicon.png",
                alt: "ファビコン",
            }
        ],
        siteName: 'chainsのサイト'
    }}
/>