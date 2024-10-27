<script>
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    import toast from "svelte-french-toast";

    import { mfm } from '$lib/mdtomfm';
    import { loadmd } from "$lib/mdperse";
    import mtp from "markdown-tree-parser";

    let value = `# タイトル\n[リンク](https://example.com)`
    let out = mfm(value)

    /**
     * @type {string}
     */
    let md
    onMount(()=> {
        loadmd("mfm/todo.md").then(html => {
            md = html
        })
    })

    export const copy = () => {
        if (!navigator.clipboard) {
            toast.error("コピーできませんでした", {
                position: "bottom-center",
                style: "border-radius: 0px; background: var(--btn-color); color: var(--dtext-color);"
            });
            return;
        }
        navigator.clipboard.writeText(out).then(
            () => {
                toast.success("コピーしました", {
                    position: "bottom-center",
                    style: "border-radius: 0px; background: var(--btn-color); color: var(--dtext-color);"
                });
            },
            () => {
                toast.error("コピーできませんでした", {
                    position: "bottom-center",
                    style: "border-radius: 0px; background: var(--btn-color); color: var(--dtext-color);"
                });
            }
        );
    }
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
            <button on:click={() => copy()}>コピー</button>
            <br>
            <p>デバッグ用</p>
            <div class="textarea">{mtp(value).dump()}</div>
            <br>
            {@html md}
        </div>
    </article>
</main>

<style>
    .ggj {
        background:linear-gradient(90deg, #9FC701, #18B428);	
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

    .textarea {
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
        description: 'マークダウンをMFMに変換します',
    }}
/>