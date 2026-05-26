<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="navbar">
        <div class="nav-links">
            <a href="index.php">Home</a>
            <a href="creator.php">Creator</a>
        </div>

        <img src="images/logo.png" class="logo">

        <div class="nav-links">
            <a href="about.php">About</a>
            <a href="examples.php">Examples</a>
        </div>
    </div>

    <div class="container">
        <div class="home">
            <h1 class="home-title">Amigurumi Pattern Creator</h1>
            <p class="home-subtitle">Create custom amigurumi patterns by deforming spheres</p>
        </div>            
        <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
            <button class="homebuttons" onclick="goToGenerator()">Start Creating</button>
            <button class="homebuttons" onclick="goToAbout()">How It Works</button>
            <button class="homebuttons" onclick="goToExamples()">See Examples</button>
        </div>
    </div>

    <script src="scripts/goto.js"></script>

<footer>
    <p>&copy; 2026 Maggie Ring - CS312 Project</p>
</footer>

</body>
</html>