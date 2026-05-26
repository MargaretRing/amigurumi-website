function renderSphere(s) {
    const baseDefault = 6;
    const dark = s.colorDark || "#333333";

    let size = 60 + s.increaseRounds * 12;
    let shape = (s.baseStitches - baseDefault) * 0.08;
    let width = size * (1 + shape);
    let cap = size / 2;
    let flatHeight = s.flatRounds * 6;
    let height = cap + flatHeight + cap;

    s.el.style.width = width + "px";
    s.el.style.height = height + "px";
    s.el.style.borderRadius = `${width / 2}px / ${cap}px`;
    s.el.style.background = s.color;
    s.el.style.left = s.x + "px";
    s.el.style.top = s.y + "px";
    s.el.innerHTML = `
        <div style="font-size:15px;color:${dark};text-align:center;font-weight:bold;">
            ${s.name}
        </div>
    `;
    s.el.style.display = "flex";
    s.el.style.alignItems = "center";
    s.el.style.justifyContent = "center";
}

function createSphere() {
    const sphere = {
        id: idCounter++,
        x: 100,
        y: 100,
        name: "Sphere " + idCounter,
        color: "#99D5FF",
        colorDark: "#003961",
        baseStitches: 6,
        increaseRounds: 6,
        flatRounds: 0,
        el: document.createElement("div"),
        patternEl: document.createElement("div")
    };

    sphere.el.className = "sphere";
    sphere.patternEl.className = "pattern";

    document.getElementById("workspace").appendChild(sphere.el);
    document.getElementById("patterns").appendChild(sphere.patternEl);

    sphere.el.addEventListener("mousedown", (e) => {
        selectSphere(sphere);
        startDrag(e, sphere);
    });

    spheres.push(sphere);
    selectSphere(sphere);
    renderSphere(sphere);
    updatePattern(sphere);
}

function duplicateSphere() {
    if (!selectedSphere) return;

    const original = selectedSphere;
    const sphere = {
        id: idCounter++,
        x: original.x + 20,
        y: original.y + 20,
        name: original.name + " copy",
        color: original.color,
        colorDark: original.colorDark,
        baseStitches: original.baseStitches,
        increaseRounds: original.increaseRounds,
        flatRounds: original.flatRounds,
        el: document.createElement("div"),
        patternEl: document.createElement("div")
    };

    sphere.el.className = "sphere";
    sphere.patternEl.className = "pattern";

    document.getElementById("workspace").appendChild(sphere.el);
    document.getElementById("patterns").appendChild(sphere.patternEl);

    sphere.el.addEventListener("mousedown", (e) => {
        selectSphere(sphere);
        startDrag(e, sphere);
    });

    spheres.push(sphere);
    selectSphere(sphere);
    renderSphere(sphere);
    updatePattern(sphere);
}

function selectSphere(sphere) {
    selectedSphere = sphere;

    spheres.forEach(s => {
        s.el.classList.toggle("selected", s.id === sphere.id);
        s.el.style.setProperty("--dark", s.colorDark || "#FF73A2");
    });
    syncSliders();
}

function startDrag(e, sphere) {
    dragging = sphere;
    offsetX = e.clientX - sphere.x;
    offsetY = e.clientY - sphere.y;
    e.preventDefault();
}

document.addEventListener("mousedown", (e) => {
    if (!e.target.classList.contains("sphere")) return;
    dragging = selectedSphere;
    offsetX = e.clientX - dragging.x;
    offsetY = e.clientY - dragging.y;
});

document.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    dragging.x = e.clientX - offsetX;
    dragging.y = e.clientY - offsetY;
    renderSphere(dragging);
});

document.addEventListener("mouseup", () => {
    dragging = null;
});

document.getElementById("workspace").addEventListener("mousedown", (e) => {
    if (e.target.id === "workspace") {
        selectedSphere = null;
        spheres.forEach(s => s.el.classList.remove("selected"));
        syncSliders();
    }
});
