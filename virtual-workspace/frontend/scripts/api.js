async function fetchData() {
    // Simulate API call
    return new Promise((resolve) =>
        setTimeout(() => resolve(["Task 1", "Task 2", "Task 3"]), 1000)
    );
}

function saveData(data) {
    console.log("Saving data:", data);
}
