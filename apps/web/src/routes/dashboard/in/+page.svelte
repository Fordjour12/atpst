<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { authClient } from "$lib/auth-client";
    import { orpc } from "$lib/orpc";
    import { createQuery } from "@tanstack/svelte-query";
    import { get } from "svelte/store";

    const pdq = createQuery(orpc.first.queryOptions());

    if (!$pdq.data?.user) {
        goto("/login");
    }
</script>

{#if $pdq.isPending}
    <div>Loading...</div>
{:else}
    <div>
        <h1>Dashboard</h1>
        <p>Welcome {$pdq.data?.user?.name}</p>
        <p>privateData: {$pdq.data?.data.id}</p>
    </div>
{/if}
