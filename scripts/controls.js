const COLOR_DARK_MAP = {};
for (let i = 0; i < COLORS.length; i += 2) {
    COLOR_DARK_MAP[COLORS[i].hex] = COLORS[i + 1].hex;
}
const colorGrid = document.getElementById("colorGrid");

COLORS.forEach((c, i) => {
    if (i % 2 !== 0) return;

    const swatch = document.createElement("div");
    swatch.className = "color-swatch";
    swatch.style.backgroundColor = c.hex;
    swatch.title = c.name;
    swatch.dataset.hex = c.hex;

    swatch.addEventListener("click", () => {
        if (!selectedSphere) return;
        selectedSphere.color = c.hex;
        selectedSphere.colorDark = COLOR_DARK_MAP[c.hex] ?? c.hex;
        selectedSphere.el.style.setProperty("--dark", selectedSphere.colorDark);
        renderSphere(selectedSphere);
        updatePattern(selectedSphere);
        syncSliders();
    });
    colorGrid.appendChild(swatch);
});

function syncSliders() {
    const panel = document.querySelector(".panel.left");

    if (!selectedSphere) {
        panel.classList.add("dimmed");
        document.querySelectorAll(".color-swatch").forEach(sw => {
            sw.classList.remove("selected");
        });
        updateButtons();
        return;
    }

    panel.classList.remove("dimmed");
    updateButtons();

    document.getElementById("stitchSlider").value = selectedSphere.baseStitches;
    document.getElementById("roundSlider").value = selectedSphere.increaseRounds;
    document.getElementById("flatSlider").value = selectedSphere.flatRounds;

    document.getElementById("stitchVal").textContent = selectedSphere.baseStitches;
    document.getElementById("roundVal").textContent = selectedSphere.increaseRounds;
    document.getElementById("flatVal").textContent = selectedSphere.flatRounds;

    document.getElementById("nameInput").value = selectedSphere.name;

    document.querySelectorAll(".color-swatch").forEach(sw => {
        sw.classList.toggle("selected", sw.dataset.hex === selectedSphere.color);
    });
}

function updateButtons() {
    const hasSelected = selectedSphere !== null;
    const hasSpheres = spheres.length > 0;

    document.getElementById("duplicateSphere").classList.toggle("btn-disabled", !hasSelected);
    document.getElementById("removeSphere").classList.toggle("btn-disabled", !hasSelected);
    document.getElementById("exportTxt").classList.toggle("btn-disabled", !hasSpheres);
    document.getElementById("exportPdf").classList.toggle("btn-disabled", !hasSpheres);
}

document.getElementById("stitchSlider").addEventListener("input", (e) => {
    if (!selectedSphere) return;
    selectedSphere.baseStitches = parseInt(e.target.value);
    syncSliders();
    renderSphere(selectedSphere);
    updatePattern(selectedSphere);
});

document.getElementById("roundSlider").addEventListener("input", (e) => {
    if (!selectedSphere) return;
    selectedSphere.increaseRounds = parseInt(e.target.value);
    syncSliders();
    renderSphere(selectedSphere);
    updatePattern(selectedSphere);
});

document.getElementById("flatSlider").addEventListener("input", (e) => {
    if (!selectedSphere) return;
    selectedSphere.flatRounds = parseInt(e.target.value);
    document.getElementById("flatVal").textContent = selectedSphere.flatRounds;
    renderSphere(selectedSphere);
    updatePattern(selectedSphere);
});

document.getElementById("nameInput").addEventListener("input", (e) => {
    if (!selectedSphere) return;
    selectedSphere.name = e.target.value;
    renderSphere(selectedSphere);
    updatePattern(selectedSphere);
});

document.getElementById("addSphere").onclick = createSphere;
document.getElementById("duplicateSphere").onclick = duplicateSphere;

document.getElementById("removeSphere").onclick = () => {
    if (!selectedSphere) return;
    selectedSphere.el.remove();
    selectedSphere.patternEl.remove();
    spheres = spheres.filter(s => s.id !== selectedSphere.id);
    selectedSphere = null;
    updateButtons();
    const panel = document.querySelector(".panel.left");
    panel.classList.add("dimmed");
};