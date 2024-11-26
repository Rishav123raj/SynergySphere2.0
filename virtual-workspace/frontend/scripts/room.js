function initRoom(container) {
    container.innerHTML = `
        <h2>Room</h2>
        <p>Welcome to the virtual room.</p>
        <button id="room-action">Click Me</button>
    `;

    const button = container.querySelector("#room-action");
    button.addEventListener("click", () => {
        alert("Button in Room clicked!");
    });
}
