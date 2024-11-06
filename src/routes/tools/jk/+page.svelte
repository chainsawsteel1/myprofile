<script lang="ts">
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    import { copy } from "$lib/utils";

    import { blur } from "svelte/transition";

    import { loadmd } from "$lib/mdperse";

    let md: string
    onMount(()=> {
        loadmd("jk/todo.md").then(html => {
            md = html
        })
    })

    // オンライン非対応のコード
    let match: boolean = false
    let ahand: string = ""
    let str: string = ""
    let you: number = 0

    export const te = (te: number) => {
        you = te
        let aite: number = Math.floor(Math.random() * 3) + 1
        ahand = じゃんけんコンバーター(aite)
        let nannan: number = te - aite
        if (nannan == 0) {
            str = "あいこ"
        } else if (nannan == -1 || nannan == 2) {
            str = "勝ち"
        } else if (nannan == 1 || nannan == -2) {
            str = "負け"
        }
    }

    export const じゃんけんコンバーター = (te: number): string => {
        let hand: string
        switch (te) {
            case 1:
                return "✊"
            case 2:
                return "✌"
            case 3:
                return "🖐"
            default:
                return "✊"
        }
    }
</script>

<main>
    <article>
        <div class="ggrks">
            <h2 class="ggj">オンラインじゃんけん(オフライン)</h2>
            <p>皆さん待望のオンラインじゃんけんです</p>
            <br>
            <div class="feeld">

                {#if match != true}
                    <button on:click={() => match = true} transition:blur={{ duration: 300 }}>マッチング開始ボタン</button>
                {/if}

                <div class="wait none">
                    マッチングなう
                </div>

                <div class="select" class:none={match != true || ahand} transition:blur={{ duration: 300 }}>
                    <p>どれか選択</p>
                    <button on:click={() => te(1)}>✊</button><button on:click={() => te(2)}>✌</button><button on:click={() => te(3)}>🖐</button>
                </div>

                {#if ahand}
                    <div class="hand" transition:blur={{ duration: 300 }}>
                        <p>貴方の手/相手の手</p>
                        <p>{じゃんけんコンバーター(you)}/{ahand}</p>
                    </div>
                {/if}

                {#if str}
                    <div class="result" transition:blur={{ duration: 300 }}>
                        <p>結果</p>
                        <p>{str}</p>
                    </div>
                {/if}

                {#if str}
                    <div class="reset" transition:blur={{ duration: 300 }}>
                        <button on:click={() => {
                            match = false
                            ahand = ""
                            str = ""
                            you = 0
                        }}>リセット</button>
                    </div>
                {/if}
            </div>
            <br>
            {@html md}
        </div>
    </article>
</main>

<style>
    .ggj {
        background:linear-gradient(90deg, #e1a370, #3cbe49, #3c97be);	
        width: fit-content;	
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .feeld {
        background-color: var(--btn-color);
        padding: 1em;
        text-align: center;
        height: 170px;
    }

    .none {
        display: none;
    }
</style>

<MetaTags
    title="オンラインじゃんけん"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'オンラインじゃんけん',
        description: '皆さん待望のオンラインじゃんけんです',
        siteName: 'chainsのサイト'
    }}
/>