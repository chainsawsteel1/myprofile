<script>
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";

    import { movepg } from '$lib/utils';

    import tippy from "svelte-tippy";

    import { setupViewTransition } from 'sveltekit-view-transition';
    const { transition } = setupViewTransition();

    export let data
</script>

<main>
    <button class="old" id="old" on:click="{() => movepg("/blog/old")}" use:tippy={{content: '旧フォーマットで書かれたやつはこちら', placement: 'top'}}>旧</button>

    <article>
        <div class="lists">
            {#each data.contents as content}
                <button class="bg" on:click="{() => movepg("/blog/" + content.id)}">
                    {content.title}
                    <img use:transition={content.title} src={content.eyecatch?.url} alt="" />
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
        left: 1em;
        top: unset;
        margin: auto;
        width: 5em;
        height: 5em;
        background-color: var(--bg-color5);
        color: var(--txt-color);
        backdrop-filter: blur(1.5em);
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

        .old {
            bottom: unset;
            top: 5em;
        }
    }
</style>

<MetaTags
    title="BLOG"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'BLOG',
        description: 'chainsのサイト - BLOG',
    }}
/>