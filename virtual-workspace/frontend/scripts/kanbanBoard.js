function initKanbanBoard(container) {
    const columns = ["To Do", "In Progress", "Done"];

    columns.forEach((column) => {
        const columnDiv = document.createElement("div");
        columnDiv.className = "kanban-column";
        columnDiv.innerHTML = `<h3>${column}</h3>`;
        container.appendChild(columnDiv);
    });
}
