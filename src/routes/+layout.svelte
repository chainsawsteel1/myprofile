<script lang="ts">
    import "ress"
    import "./global.css";
    import "./nprogress.css";
    import "./color/mono.css"
    
    import { navigating } from "$app/stores";
    import { page } from "$app/stores";
    import { Toaster } from "svelte-french-toast";
    import { movepg } from '$lib/utils';
    import { onMount } from "svelte";
    import { afterNavigate } from "$app/navigation";
    import { setupViewTransition } from 'sveltekit-view-transition';
    import { List, Github } from "svelte-bootstrap-icons";

    import { fade } from "svelte/transition";

    import Swal from "sweetalert2";

    import NProgress from "nprogress";

    import MENU from "../components/MENU.svelte";
    import DARK from "../components/DARK.svelte";

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

    let title: string
    const gettitle = () => {
        title = document.title;
    };

    let scroll: boolean;
    const handleScroll = () => {
        scroll = window.scrollY > 5;
    };

    onMount(() => {
        gettitle()
        window.addEventListener('scroll', handleScroll);
    })

    afterNavigate(() => {
        menustatus = false
        Swal.close()
        gettitle();
    });

    let menustatus: boolean;
    export const toggle = () => {
        if (menustatus == false) {
            menustatus = true
        } else {
            menustatus = false
        }
    }
    export const toggleoff = () => {
        menustatus = false
    }
</script>

{#if $navigating}
	<div class="loading" transition:fade={{ duration: 100 }}>
        <h1>Loading...</h1>
    </div>
{/if}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="navbg" on:click={() => toggleoff()} class:navactive={menustatus == true} class:nowbg={scroll == true} class:hide={$page.url.pathname == "/cl"}></div>

{#if $page.url.pathname != "/cl"}
    <nav>
        <div class="logo">
            <button class="side" on:click="{() => movepg("/")}"><img class="icon" src="/favicon.png" alt="chains"></button>
        </div>

        <div class="link pc">
            <button on:click="{() => movepg("/")}">HOME</button>
            <button on:click="{() => movepg("/blog")}">BLOG</button>
            <button on:click="{() => movepg("/link")}">LINK</button>
            <button on:click="{() => movepg("/tools")}">TOOLS</button>
        </div>

        <div class="link sp">
        </div>

        <div class="menu pc">
            <a href="https://github.com/chainsawsteel1/myprofile" target="_blank" class="side"><Github width={40} height={40}/></a>
        </div>

        <div class="menu sp">
            <button on:click="{() => toggle()}" class="side"><List width={45} height={45}/></button>
        </div>
    </nav>
{/if}

{#if menustatus}
    <div transition:fade={{ duration: 300 }} style="position: absolute; z-index: 1;">
        <MENU/>
    </div>
{/if}

<div class="box">
    <slot />
</div>

{#if $page.url.pathname != "/cl"}
    <footer>
        <h2 class="ggj">要素の仮置き場</h2>
        <DARK/>
    </footer>
{/if}

<div><Toaster/></div>

<style>
    button {
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
        z-index: 2;
        text-align: center;
        left: 50%;
        top: 2em;
        width: 100%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: row;
        container-type: inline-size;
    }

    footer {
        padding: 1em;
        background-color: var(--bg-color5);
        margin-top: auto;
    }

    .navbg {
        transition: .3s;
        backdrop-filter: blur(var(--bl-px));
        position: fixed;
        width: 100%;
        height: 4em;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .nowbg {
        background-color: var(--bg-color5);
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
    }

    .navactive {
        background-color: var(--bg-color5);
        height: 100%;
    }

    .hide {
        height: 0px;
    }

    .loading {
        position: fixed;
        bottom: 0%;
        z-index: 10;
        text-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
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
        background-color: unset;
        color: var(--txt-color);
    }

    .side:hover {
        box-shadow: unset;
    }

    @container (max-width: 820px) {
        .pc {
            display: none;
        }
        .sp {
            display: inline;
        }
    }

    .icon {
        background-color: var(--text-color);
        width: 40px;
        height: 40px;
        border-radius: 250px;
        padding: 1px;
        transition: .3s;
    }

    .box {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .ggj {
        background:linear-gradient(90deg, #91AEAE, #BB92A6);
        width: fit-content;	
        -webkit-background-clip:text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>