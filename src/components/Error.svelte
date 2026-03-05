<script lang='ts'>
    export let message = 'Error';
</script>

<div class='error'>
    <span>{message}</span>
</div>

<style>
    .error {
        font-family: Arial, sans-serif;
        font-size: 16px;
        color: #dc2626;
        background-color: #fee2e2;
        border: 1px solid #fca5a5;
        border-radius: 4px;
        padding: 8px 12px;
    }
</style>