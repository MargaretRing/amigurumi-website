function generatePattern(base, rounds, flatRounds) {
    let pattern = [];
    let stitches = base;
    let round = 1;
    let middleRounds = rounds + 1 + flatRounds;

    pattern.push({
        round,
        text: `${base} sc into magic ring`,
        stitches
    });

    for (let i = 1; i <= rounds; i++) {
        round++;
        if (i === 1) {
            stitches = base * 2;
            pattern.push({
                round,
                text: `inc x ${base}`,
                stitches
            });
        } else {
            stitches += base;
            pattern.push({
                round,
                text: `(${i - 1} sc, inc) x ${base}`,
                stitches
            });
        }
    }

    if (middleRounds > 0) {
        const startRound = round + 1;
        const endRound = round + middleRounds;
        round += middleRounds;

        pattern.push({
            round: startRound === endRound ? `${startRound}` : `${startRound}-${endRound}`,
            text: "sc around",
            stitches
        });
    }

    for (let i = rounds; i >= 1; i--) {
        round++;
        if (i === 1) {
            stitches = base;
            pattern.push({
                round,
                text: `dec x ${base}`,
                stitches
            });
        } else {
            stitches -= base;
            pattern.push({
                round,
                text: `(${i - 1} sc, dec) x ${base}`,
                stitches
            });
        }
    }
    return pattern;
}

function updatePattern(sphere) {
    const pattern = generatePattern(
        sphere.baseStitches,
        sphere.increaseRounds,
        sphere.flatRounds
    );

    const colorEntry = COLORS.find(c => c.hex === sphere.color);
    const colorName = colorEntry ? colorEntry.name : sphere.color;

    let html = `<b>${sphere.name}</b><br><small>Color: ${colorName}</small><br><br>`;
    html += `<table><tr><th>Round</th><th>Instruction</th><th>Stitches</th></tr>`;

    pattern.forEach(p => {
        html += `
            <tr>
                <td>${p.round}</td>
                <td>${p.text}</td>
                <td>${p.stitches}</td>
            </tr>
        `;
    });

    html += `</table>`;
    sphere.patternEl.innerHTML = html;
}