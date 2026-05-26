
function buildExportText() {
    let text = "Amigurumi Pattern Export\n\n";

    spheres.forEach(s => {
        const pattern = generatePattern(s.baseStitches, s.increaseRounds, s.flatRounds);

        const colorEntry = COLORS.find(c => c.hex === s.color);
        const colorName = colorEntry ? colorEntry.name : s.color;
        text += `${s.name} (${colorName})\n`;

        pattern.forEach(p => {
            text += `Round ${p.round}: ${p.text} (${p.stitches} sts)\n`;
        });
        text += "\n";
    });
    return text;
}

document.getElementById("exportTxt").addEventListener("click", () => {
    const text = buildExportText();

    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "amigurumi_patterns.txt";
    a.click();

    URL.revokeObjectURL(url);
});

document.getElementById("exportPdf").addEventListener("click", () => {
    const text = buildExportText();

    const win = window.open("", "_blank");
    win.document.write(`
        <html>
        <head>
            <title>Patterns</title>
        </head>
        <body>
            <pre style="font-size:12px;font-family:monospace;">
${text}
            </pre>
            <script>
                window.onload = () => window.print();
            <\/script>
        </body>
        </html>
    `);
    win.document.close();
});