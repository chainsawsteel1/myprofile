<script>
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";

    import Swal from "sweetalert2";
    import toast from "svelte-french-toast";

    function handleClick() {
        Swal.fire("SweetAlert2 is working!");
    }

    function handleClick2() {
        toast.success('Successfully toasted!', {
            position: "top-right"
        })
    }

    var options = {
        strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
        typeSpeed: 40
    };

    var typed = new Typed('.element', options);
</script>

<main>
    <h1 class="toph1">TEST</h1>

    <article>

        <button on:click="{handleClick}">a</button>
        <br>
        <br>
        <button on:click="{handleClick2}">b</button>

        <div class="element"></div>

    </article>
</main>

<MetaTags
    title="TEST"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'TEST',
        description: 'chainsのサイト - TEST',
    }}
/>