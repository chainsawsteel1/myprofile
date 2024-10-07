<script>
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";

    import { movepg } from '$lib/utils';

    import { setupViewTransition } from 'sveltekit-view-transition';
    const { transition } = setupViewTransition();

    export let data
</script>

<main>
    <article>
        <button class="old" on:click="{() => movepg("/blog/old")}">旧フォーマットで書かれたやつはこちら</button>

        <br>
        <br>

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
        top: 7em;
        left: 50%;
        margin: auto;
        transform: translate(-50%, -50%);
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
        description: 'chainsのサイト - BLOG',
    }}
/>