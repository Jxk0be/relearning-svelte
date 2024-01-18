<div class="navbar">
    <div class="left">
        <h1>My website</h1>
    </div>
    <div class="right">
        <a href="/"><h1>Home</h1></a>
        <a href="/products"><h1>Products</h1></a>
    </div>
</div>

<slot></slot>

<style>
    .navbar {
        display: flex;
        width: 100%;
        height: 70px;
        background-color: rgb(54, 79, 79);
        justify-content: space-between;
        align-items: center;
        position: fixed;
    }

    .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 250px;
        padding-right: 20px;
    }

    .left {
        padding-left: 20px;
    }

    a {
        text-decoration: none;
        color: white;
        font-family: sans-serif;
        font-size: 13px;
    }
</style>