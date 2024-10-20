<script>
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";

    import { loadmd } from "$lib/mdperse";

    /**
     * @type {string}
     */
    let md
    loadmd("https://raw.githubusercontent.com/chainsawsteel1/myprofile/refs/heads/main/README.md").then(html => {
        md = html
    })
</script>

<main>
    <article>
        <h2>chainsの自己満ウェブサイト</h2>
        <p>工事中</p>
        <br>
        <p>以下README.md</p>
        <hr>
        {@html md}
        <hr>
    </article>
</main>

<style>

</style>

<MetaTags
    title="HOME"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'HOME',
        description: 'chainsのサイト - HOME',
    }}
/>