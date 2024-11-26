function initSharedCanvas(container) {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 600;
    container.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    // Draw a red rectangle
    ctx.fillStyle = "red";
    ctx.fillRect(50, 50, 100, 100);
}
