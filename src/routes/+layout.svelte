<script>
    import 'ress'
    import "./global.css";
    import './nprogress.css';
    
    import { onNavigate } from '$app/navigation';
    import { navigating } from '$app/stores';
    import { page } from "$app/stores";
    import { Toaster } from 'svelte-french-toast';

    import NProgress from 'nprogress';

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
</script>

<div><Toaster/></div>

<!-- aタグ使用やめる -->

<menu>
    <ul>
        <li id="home"><a href="/">HOME</a></li>
        <li id="blog"><a href="/blog">BLOG</a></li>
        <li id="link"><a href="/link">LINK</a></li>
    </ul>
</menu>

<slot />

<style>
    menu {
        background: var(--navbar-color);
        margin: auto;
        position: fixed;
        text-align: center;
        left: 50%;
        top: 5%;
        transform: translate(-50%, -50%);

    }

    li {
        display: inline-block;
        transition: .4s;
        width: 5em;
    }

    li:hover {
        background-color: var(--hov-color);
        color: var(--dtext-color);
    }

    menu li {
        padding: 1em;
    }
</style>