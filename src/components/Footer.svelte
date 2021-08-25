<div class="Footer">
    <div class="Footer-container">
        <div class="Footer-content">
            <div class="Footer-copy">Hecho en Platzi</div>
            <div class="Footer-svelte">
                Proudly powered by Svelte
                <img src="images/svelte-logo.png" alt="svelte" />
            </div>
        </div>
    </div>
</div>

<style>
    .Footer {
        background: rgba(28, 41, 56, 0.5);
        color: white;
        padding: 1.5em;
        margin: 2em 0 0 0;
        font-size: 13px;
        font-weight: 300;
    }

    .Footer-container {
        display: grid;
        grid-template-columns: minmax(auto, 1024px);
        justify-content: center;
        align-items: center;
    }

    .Footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .Footer-svelte {
        display: flex;
        align-items: center;
    }

    .Footer-svelte img {
        margin: 0 0 0 0.5em;
    }
</style>
