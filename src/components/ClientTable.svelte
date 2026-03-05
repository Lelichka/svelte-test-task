<script lang='ts'>
    import type { NormalizedClient } from '../types/normalizedClient';
    import { sortField, sortOrder } from '../stores/clientsStore';
    export let clients: NormalizedClient[] = [];

    function handleSort(field: 'balance' | 'createdAt') {
        if ($sortField === field) {
            sortOrder.set($sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            sortField.set(field);
            sortOrder.set('asc');
        }
    }
</script>

<table>
    <thead>
    <tr>
        <th>№</th>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th class='sorted' on:click={() => handleSort('balance')}>
            Balance
            {#if $sortField === 'balance'}
                {$sortOrder === 'asc' ? '↑' : '↓'}
            {/if}
        </th>
        <th class='sorted' on:click={() => handleSort('createdAt')}>
            Created At
            {#if $sortField === 'createdAt'}
                {$sortOrder === 'asc' ? '↑' : '↓'}
            {/if}
        </th>
    </tr>
    </thead>

    <tbody>
    {#each clients as client, index}
        <tr class:vip={client.isVip}>
            <td>{index + 1}</td>
            <td>{client.id}</td>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.status}</td>
            <td class:negative={client.balance < 0}>
                {client.balance}
            </td>
            <td>
                {client.createdAt
                    ? new Date(client.createdAt).toLocaleDateString()
                    : '-'}
            </td>
        </tr>
    {/each}
    </tbody>
</table>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
        font-family: Arial, sans-serif;
        font-size: 14px;
    }

    thead th {
        text-align: left;
        background-color: #f0f0f0;
        padding: 10px;
        user-select: none;
        border-bottom: 2px solid #ddd;
    }

    .sorted {
        cursor: pointer;
    }
    .sorted:hover {
        background-color: #e8e8e8;
    }

    tbody tr:hover {
        background-color: #f1f7ff;
    }

    .vip {
        background-color: #fff4e5;
    }

    .negative {
        color: red;
        font-weight: 500;
    }

    td {
        padding: 8px 10px;
    }
</style>