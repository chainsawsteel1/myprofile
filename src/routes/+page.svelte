<script>
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";
</script>

<main>
    <article>
        <h2>chainsの自己満ウェブサイト</h2>
        <p>自分が満足するまで永遠に破壊と想像を繰り返す。終わりは来ないだろう。</p>
        <p>工事中</p>
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