<script lang='ts'>
    import { statusFilter, searchQuery} from '../stores/clientsStore';
</script>

<div class='filters'>
    <select bind:value={$statusFilter}>
        <option value='all'>All</option>
        <option value='active'>Active</option>
        <option value='inactive'>Inactive</option>
        <option value='blocked'>Blocked</option>
    </select>

    <input type='text' placeholder='Search by name' bind:value={$searchQuery} />
</div>

<style>
    .filters {
        display: flex;
        gap: 10px;
        margin-bottom: 15px;
        align-items: center;
        font-family: Arial, sans-serif;
    }

    .filters select,
    .filters input {
        padding: 6px 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
    }

    .filters select:focus,
    .filters input:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 4px rgba(59, 130, 246, 0.4);
    }

    .filters input::placeholder {
        color: #aaa;
        font-style: italic;
    }
</style>