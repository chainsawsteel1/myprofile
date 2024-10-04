<script>
    import 'ress'
    import "./global.css";
    import './nprogress.css';
    
    import { onNavigate } from '$app/navigation';
    import { navigating } from '$app/stores';
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { Toaster } from 'svelte-french-toast';
    import toast from "svelte-french-toast";


    import NProgress from 'nprogress';

    NProgress.configure({
    showSpinner: false // スピナーを表示しない
    });

    /**
     * @param {string | URL} url
     */
    const movepg = (url) => {
        if ($page.url.origin + url == $page.url.href) {
            toast.error('既にそのページに居ます', {
                position: "bottom-center"
            })
        } else {
            goto(url);
        }
    }

    const respui = () => {
        let winW = window.innerWidth
        let devW = 650;
        if (winW <= devW) {

        } else {
            
        }
    }

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

    window.addEventListener('resize', respui);
});
</script>

<div class="box">

    <nav>
        <button id="home" on:click="{() => movepg("/")}">HOME</button>
        <button id="blog" on:click="{() => movepg("/blog")}">BLOG</button>
        <button id="link" on:click="{() => movepg("/link")}">LINK</button>
    </nav>

    <slot />
</div>

<div><Toaster/></div>

<style>
    nav {
        margin: auto;
        position: fixed;
        text-align: center;
        left: 50%;
        top: 3.8em;
        width: 100%;
        transform: translate(-50%, -50%);
    }
</style>