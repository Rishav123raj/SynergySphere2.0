document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    // Render Shared Canvas
    const canvasContainer = document.createElement("div");
    canvasContainer.className = "canvas-container";
    app.appendChild(canvasContainer);
    initSharedCanvas(canvasContainer);

    // Render Room
    const roomContainer = document.createElement("div");
    roomContainer.className = "room";
    app.appendChild(roomContainer);
    initRoom(roomContainer);

    // Render Kanban Board
    const kanbanBoardContainer = document.createElement("div");
    kanbanBoardContainer.className = "kanban-board";
    app.appendChild(kanbanBoardContainer);
    initKanbanBoard(kanbanBoardContainer);
});
