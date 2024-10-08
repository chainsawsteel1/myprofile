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
    import Swal from "sweetalert2";
    import { List, Border } from "svelte-bootstrap-icons";


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

    function menu() {
        Swal.fire({
            title: "MENU",
            html: `
                <a href="/">HOME</a>
                <br>
                <a href="/blog">BLOG</a>
                <br>
                <a href="/link">LINK</a>
            `,
            color: "var(--dtext-color)",
            background: "var(--btn-color)",
        });
    }
</script>

{#if $navigating}
	<div class="loading">
        <h1>Loading...</h1>
    </div>
{/if}

<h1 class="toph1">{title}</h1>

<nav>
    <div class="logo">
        <button class="side" on:click="{() => movepg("/")}"><img src="/favicon.png" alt="chains"></button>
    </div>

    <div class="link pc">
        <button on:click="{() => movepg("/")}">HOME</button>
        <button on:click="{() => movepg("/blog")}">BLOG</button>
        <button on:click="{() => movepg("/link")}">LINK</button>
    </div>

    <div class="link sp">
    </div>

    <div class="menu pc">
        <button class="side"><Border  width={35} height={35}/></button>
    </div>

    <div class="menu sp">
        <button class="side" on:click="{menu}"><List  width={45} height={45}/></button>
    </div>
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
        min-width: 5em;
    }

    .logo {
        width: 5em;
    }

    .menu {
        width: 5em;
    }

    .link {
        align-items: center;
        margin: auto;
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
        display: flex;
        flex-direction: row;
        container-type: inline-size;
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

    .sp {
        display: none;
    }

    .side {
        min-width: unset;
        width: 3.5em;
        height: 4em;
        margin: auto;
        padding: 0;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
    }

    .side:hover {
        box-shadow: unset;
    }

    @container (max-width: 600px) {
        .pc {
            display: none;
        }
        .sp {
            display: inline;
        }
    }
</style>