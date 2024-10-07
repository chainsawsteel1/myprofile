<script>
    import "ress"
    import "./global.css";
    import "./alert.css";
    import "./toast.css";
    import "./nprogress.css";
    import "./loadanim.css"
    
    import { onNavigate } from "$app/navigation";
    import { navigating } from "$app/stores";
    import { page } from "$app/stores";
    import { Toaster } from "svelte-french-toast";
    import { movepg } from '$lib/utils';
    import { onMount } from "svelte";
    import { afterNavigate } from "$app/navigation";
    import { setupViewTransition } from 'sveltekit-view-transition';


    import NProgress from "nprogress";

    NProgress.configure({
    showSpinner: false // スピナーを表示しない
    });

	$: {
		if ($navigating) {
        // プログレスバーの表示を開始する
			NProgress.start();
		}
		if (!$navigating) {
        // プログレスバーを完了する
			NProgress.done();
		}
        if ($page.url.href == "/") {
            
        }
	}

    setupViewTransition();

    /**
	 * @type {string}
	 */
    let title
    const gettitle = () => {
        title = document.title; // 現在のページのタイトルを取得
    };

    onMount(() => {
        gettitle()
    })

    afterNavigate(() => {
        gettitle(); // 移動先のページのタイトルを取得
    });
</script>

{#if $navigating}
	<div class="loading">
        <h1>Loading...</h1>
    </div>
{/if}

<h1 class="toph1">{title}</h1>

<nav>
    <button on:click="{() => movepg("/")}">HOME</button>
    <button on:click="{() => movepg("/blog")}">BLOG</button>
    <button on:click="{() => movepg("/link")}">LINK</button>
</nav>

<div class="box">
    <slot />
</div>

<div><Toaster/></div>

<div class="bg"></div>

<style>
    button {
        background-color: rgba(0, 0, 0, 0);
        color: var(--txt-color);
        margin: .8em;
        min-width: 25%;
    }

    nav {
        height: 4em;
        background-color: var(--bg-color5);
        backdrop-filter: blur(1.5em);
        margin: auto;
        position: fixed;
        z-index: 1;
        text-align: center;
        left: 50%;
        top: 2em;
        width: 100%;
        transform: translate(-50%, -50%);
    }

    .bg {
        background: linear-gradient(rgba(0, 0, 0, 0), var(--bg-color));
        position: fixed;
        top: 0;
        height: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .loading {
        position: fixed;
        bottom: 0%;
    }

    @container (min-width: 735px) {
        .computer {
            display: inline;
            margin: auto;
            position: fixed;
            text-align: center;
            left: 50%;
            top: 2em;
            width: 100%;
            transform: translate(-50%, -50%);
        }
    }
</style>