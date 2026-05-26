<!DOCTYPE html>
<html>
<head>
    <title>Creator</title>
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
        <h1>Pattern Creator</h1>

        <div class="editor">

            <div class="panel left">
                <label>
                    Starting Stitches: <span id="stitchVal">6</span>
                    <input type="range" id="stitchSlider" min="3" max="20" value="6">
                </label>
                <label>
                    Increase Rounds: <span id="roundVal">6</span>
                    <input type="range" id="roundSlider" min="1" max="20" value="6">
                </label>
                <label>
                    Additional Flat Rounds: <span id="flatVal">0</span>
                    <input type="range" id="flatSlider" min="0" max="10" value="0">
                </label>
                <label>
                    Name <input type="text" id="nameInput" placeholder="Sphere name">
                </label>
                <label>
                    Color <div class="color-grid" id="colorGrid"></div>
                </label>
            </div>

            <div id="workspace"></div>

            <div class="panel right">
                <button id="addSphere">Add Sphere</button>
                <button id="duplicateSphere">Duplicate Sphere</button>
                <button id="removeSphere">Remove Sphere</button>
            </div>

        </div>

        <div id="patternSection">
            <div id="patternHeader">
                <h2>Patterns</h2>
                <div id="exportButtons">
                    <button id="exportTxt">Export as .txt</button>
                    <button id="exportPdf">Export as .pdf</button>
                </div>
            </div>
            <div id="patterns"></div>
        </div>
    </div>

    <script src="scripts/globals.js"></script>
    <script src="scripts/pattern.js"></script>
    <script src="scripts/sphere.js"></script>
    <script src="scripts/controls.js"></script>
    <script src="scripts/export.js"></script>
    <script>createSphere();</script>

<footer>
    <p>&copy; 2026 Maggie Ring - CS312 Project</p>
</footer>

</body>
</html>