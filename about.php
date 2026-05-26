<!DOCTYPE html>
<html>
<head>
    <title>About</title>
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
        <h1>How It Works</h1>

        <p class="extra-text">The algorithm behind creating different crocheted 3D shapes is surprisingly simple. It can be written in pseudocode like this:</p>

        <div class="about-main">

            <div class="pseudocode-section">
                <pre class="pseudocode">
    Starting_Stitches = 6
    Increase_Rounds = 3
    Additional_Flat_Rounds = 0
    round = 0

    sc Starting_Stitches into mr

    for Increase_Rounds:
        for Starting_Stitches:
            sc * round, inc
        round += 1

    Middle_Rounds = Increase_Rounds + 1 + Additional_Flat_Rounds
    for Middle_Rounds:
        sc around

    Decrease_Rounds = Increase_Rounds
    for Decrease_Rounds:
        for Starting_Stitches:
            sc * round, dec
        round -= 1
                </pre>
            </div>

            <div class="glossary-section">
                <table class="glossary-table">
                    <tr><th>Abbreviation</th><th>Meaning</th></tr>
                    <tr><td>sc</td><td>Single crochet</td></tr>
                    <tr><td>mr</td><td>Magic ring</td></tr>
                    <tr><td>inc</td><td>Increase</td></tr>
                    <tr><td>dec</td><td>Decrease</td></tr>
                </table>
                <br>
                <div class="cat-part">
                    <img src="images/whole.png">
                </div>
                <br>
                <button class = "homebutton" onclick="goToExamples()">See Examples</button>
            </div>

        </div>

        <h2>Changing the variables</h2>
        <p>Changing the variables deforms and scales the shape in different ways:</p>

        <div class="variable-cards">

            <div class="variable-card">
                <h3>Starting Stitches</h3>
                <p>Controls the width of the sphere. 6 starting stitches is a sphere, less than 6 creates an egg shape, and more than 6 creates a disk shape.</p>
                <div class="variable-examples">
                    <div class="variable-example">
                        <div class="example-sphere" style="width:60px;height:80px;border-radius:30px/40px;"></div>
                    </div>
                    <div class="variable-example">
                        <div class="example-sphere" style="width:70px;height:70px;border-radius:50%;"></div>
                    </div>
                    <div class="variable-example">
                        <div class="example-sphere" style="width:100px;height:60px;border-radius:50px/30px;"></div>
                    </div>
                </div>
            </div>

            <div class="variable-card">
                <h3>Increase Rounds</h3>
                <p>Controls the overall size of the sphere.</p>
                <br>
                <br>
                <div class="variable-examples">
                    <div class="variable-example">
                        <div class="example-sphere" style="width:40px;height:40px;border-radius:50%;"></div>
                    </div>
                    <div class="variable-example">
                        <div class="example-sphere" style="width:70px;height:70px;border-radius:50%;"></div>
                    </div>
                </div>
            </div>

            <div class="variable-card">
                <h3>Additional Flat Rounds</h3>
                <p>Deforms the sphere into a capsule shape with two hemispheric ends connected by a cylinder.</p>
                <div class="variable-examples">
                    <div class="variable-example">
                        <div class="example-sphere" style="width:70px;height:70px;border-radius:50%;"></div>
                    </div>
                    <div class="variable-example">
                        <div class="example-sphere" style="width:70px;height:110px;border-radius:35px;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="scripts/goto.js"></script>

<footer>
    <p>&copy; 2026 Maggie Ring - CS312 Project</p>
</footer>

</body>
</html>