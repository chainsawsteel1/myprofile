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
    import { List, Border } from "svelte-bootstrap-icons";

    import NProgress from "nprogress";

    import MENU from "../components/MENU.svelte";

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
        menustatus = false
        gettitle(); // 移動先のページのタイトルを取得
    });

    /**
	 * @type {boolean}
	 */
    let menustatus;
    export const toggle = () => {
        if (menustatus == false) {
            menustatus = true
        } else {
            menustatus = false
        }
    }
</script>

{#if $navigating}
	<div class="loading">
        <h1>Loading...</h1>
    </div>
{/if}

<h1 class="toph1">{title}</h1>

<div class="navbg" class:navactive={menustatus == true}></div>

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
        <button on:click="{() => toggle()}" class="side"><List  width={45} height={45}/></button>
    </div>
</nav>

<div class="box">
    <slot />
</div>

<div><Toaster/></div>

{#if menustatus}
    <MENU></MENU>
{/if}

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

    .navbg {
        /* transition: .3s; */
        background-color: var(--bg-color5);
        backdrop-filter: blur(1.5em);
        position: fixed;
        width: 100%;
        height: 4em;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .navactive {
        height: 100%;
    }

    .loading {
        position: fixed;
        bottom: 0%;
        z-index: 10;
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