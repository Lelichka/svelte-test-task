<script lang='ts'>
    export let message = 'Loading...';
</script>

<div class='loading'>
    <div class='spinner'></div>
    <span>{message}</span>
</div>

<style>
    .loading {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: Arial, sans-serif;
        font-size: 16px;
        color: #3b82f6;
        padding: 10px;
    }

    .spinner {
        width: 16px;
        height: 16px;
        border: 2px solid #3b82f6;
        border-top: 2px solid transparent;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>