const API = "https://jsonplaceholder.typicode.com/users";

let users = [];
let page = 1;
const limit = 4;

async function fetchData() {
    try {
        const res = await fetch(API);
        if (!res.ok) throw new Error();
        users = await res.json();
        render();
    } catch {
        document.getElementById("error").textContent =
            "Error loading data.";
    }
}

function render() {
    let data = [...users];

    const search = document.getElementById("search").value.toLowerCase();
    const sort = document.getElementById("sort").value;

    if (search)
        data = data.filter(u =>
            u.name.toLowerCase().includes(search)
        );

    if (sort === "asc")
        data.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "desc")
        data.sort((a, b) => b.name.localeCompare(a.name));

    const total = Math.ceil(data.length / limit);
    if (page > total) page = 1;

    const start = (page - 1) * limit;
    const show = data.slice(start, start + limit);

    const container = document.getElementById("list");
    container.innerHTML = "";
    const frag = document.createDocumentFragment();

    show.forEach(u => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <b>${u.name}</b><br>
            ${u.email}<br>
            ${u.address.city}<br>
            <button onclick="editUser(${u.id})">Edit Name</button>
        `;
        frag.appendChild(div);
    });

    container.appendChild(frag);
    document.getElementById("page").textContent =
        `Page ${page}/${total}`;
}

// 🔹 Edit Function
function editUser(id) {
    const user = users.find(u => u.id === id);
    const newName = prompt("Enter new name:", user.name);

    if (newName && newName.trim() !== "") {
        user.name = newName.trim();
        render();
    }
}

document.getElementById("search").oninput = () => {
    page = 1;
    render();
};
document.getElementById("sort").onchange = render;
document.getElementById("prev").onclick = () => {
    if (page > 1) { page--; render(); }
};
document.getElementById("next").onclick = () => {
    if (page < Math.ceil(users.length / limit)) {
        page++;
        render();
    }
};

fetchData();
