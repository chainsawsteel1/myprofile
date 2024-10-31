<script lang="ts">
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";

    import { movepg } from '$lib/utils.js';

    import tippy from "svelte-tippy";

    import { setupViewTransition } from 'sveltekit-view-transition';
    const { transition } = setupViewTransition();

    export let data
</script>

<main>
    <button class="old" on:click="{() => movepg("/blog/old")}" use:tippy={{content: '旧フォーマットで書かれたやつはこちら', placement: 'top'}}>旧</button>

    <article>
        <div class="lists">
            {#each data.contents as content}
                <button class="bg" on:click="{() => movepg("/blog/" + content.id)}">
                    <p class="inbox" use:transition={content.title}>{content.title}</p>
                    <img class="inbox" use:transition={content.title + "i"} src={content.eyecatch?.url} alt="" />
                </button>
            {/each}
        </div>
    </article>
</main>

<style>
    button {
        width: 22em;
    }

    .bg img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

    .bg {
        height: 15em;
        width: 22em;
        margin: 1em;
        overflow: hidden;
    }

    .lists {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    article {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    .old {
        position: fixed;
        bottom: 1em;
        right: 1em;
        top: unset;
    }

    @container (min-width: 820px) {
        article {
            justify-content: left;
            align-items: left;
            flex-direction: row;
        }

        .lists {
            flex-direction: row;
            justify-content: center;
        }
    }
</style>

<MetaTags
    title="BLOG"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'BLOG',
        description: 'chainsのブログです。更新するかは分かりません。',
        siteName: 'chainsのサイト'
    }}
/>