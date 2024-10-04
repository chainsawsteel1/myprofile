<script>
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
</script>

<main>
    <h1>TEST</h1>

    <article>

        <button on:click="{handleClick}">a</button>
        <br>
        <br>
        <button on:click="{handleClick2}">b</button>

    </article>
</main>
