<svelte:head />

<header class="Header">
    <div class="Header-container">
        <div class="Header-content">
            <div class="Header-logo">
                <h1>
                    Marco Calzada
                    <span>Software Engineer</span>
                </h1>
            </div>
            <div class="Header-social">
                <ul>
                    <li>
                        <a href="/" target="_blank" rel="noreferror"
                            ><img
                                src="images/github-icon.png"
                                alt="github-logo"
                            /></a
                        >
                    </li>
                    <li>
                        <a href="/" target="_blank" rel="noreferror"
                            ><img
                                src="images/instagram-icon.png"
                                alt="instagram-logo"
                            /></a
                        >
                    </li>
                    <li>
                        <a href="/" target="_blank" rel="noreferror"
                            ><img
                                src="images/linkedin-icon.png"
                                alt="linkedin-logo"
                            /></a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>

<style>
    .Header {
        background-color: #fafbfc;
        color: #191a22;
        padding: 1em 0 0 0;
    }

    .Header h1 {
        color: #191a22;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.8px;
        cursor: pointer;
    }

    .Header h1 span {
        display: block;
        font-size: 13px;
        font-weight: 300;
        letter-spacing: normal;
        margin: 0.3em 0 0 0;
    }

    .Header ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .Header li {
        display: inline-block;
        margin: 0 0.5em 0 0;
    }

    .Header a {
        text-decoration: none;
        font-weight: 300;
        font-size: 14pt;
    }

    .Header img {
        width: 20px;
    }

    .Header-container {
        display: grid;
        grid-template-columns: minmax(auto, 1024px);
        justify-content: center;
        align-items: center;
    }

    .Header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
