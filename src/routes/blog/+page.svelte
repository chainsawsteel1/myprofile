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
    <h1>BLOG</h1>

    <article>
        <h1>Working In Progress</h1>
    </article>
</main>
