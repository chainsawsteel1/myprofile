<script lang="ts">
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    import { copy } from "$lib/utils";

    import { mfm } from '$lib/mdtomfm';
    import { loadmd } from "$lib/mdperse";
    // @ts-ignore
    import mtp from "markdown-tree-parser";

    let value = `# タイトル\n[リンク](https://example.com)`
    let out = mfm(value)

    let md: string
    onMount(()=> {
        loadmd("mfm/todo.md").then(html => {
            md = html
        })
    })
</script>

<main>
    <article>
        <div class="ggrks">
            <h2 class="ggj">MarkDown to MfM(工事中)</h2>
            <p>マークダウンをMfMに変換します</p>
            <br>
            <p>インプット</p>
            <textarea bind:value></textarea>
            <button on:click={() => out = mfm(value)}>変換</button>
            <br>
            <p>アウトプット</p>
            <textarea readonly>{out}</textarea>
            <button on:click={() => copy(out)}>コピー</button>
            <br>
            <p>デバッグ用</p>
            <textarea readonly>{mtp(value).dump()}</textarea>
            <br>
            {@html md}
            <br>
            <p>こんな感じ</p>
            <img src="mfm/image.png" alt="こんな感じに">
        </div>
    </article>
</main>

<style>
    .ggj {
        background:linear-gradient(90deg, #9FC701, #18B428);	
        width: fit-content;	
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    textarea {
        background-color: var(--btn-color);
        color: var(--dtext-color);
        width: 100%;
        padding: 10px;
    }
</style>

<MetaTags
    title="MDtoMFM"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'MDtoMFM',
        description: 'マークダウンをMFMに変換します。アルファ版',
        siteName: 'chainsのサイト'
    }}
/>