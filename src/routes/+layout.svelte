<script>
    import "ress"
    import "./global.css";
    import "./alert.css";
    import "./toast.css";
    import "./nprogress.css";
    
    import { onNavigate } from "$app/navigation";
    import { navigating } from "$app/stores";
    import { page } from "$app/stores";
    import { Toaster } from "svelte-french-toast";
    import { movepg } from '$lib/utils';
    import { onMount } from "svelte";
    import { afterNavigate } from "$app/navigation";

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

    onNavigate((navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });

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

<h1 class="toph1">{title}</h1>

<div class="box">

    <nav>
        <button on:click="{() => movepg("/")}">HOME</button>
        <button on:click="{() => movepg("/blog")}">BLOG</button>
        <button on:click="{() => movepg("/link")}">LINK</button>
    </nav>

    <slot />
</div>

<div><Toaster/></div>

<div class="bg"></div>

<style>
    nav {
        margin: auto;
        position: fixed;
        text-align: center;
        left: 50%;
        top: 2em;
        width: 100%;
        transform: translate(-50%, -50%);
    }

    button {
        min-width: 30%;
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

    @container (min-width: 735px) {
        nav {
            top: 3.5em;
        }
        button {
            min-width: 5em;
        }
    }
</style>