class Bug {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

class UI {
    static displayBugs() {
        const StoredBugs = [
            {
                title: "Slow",
                description: "This app is really slow on my brand new computer",
            },
            {
                title: "app crashed",
                description: "This app has crashed multiple times on my computer",
            }
        ]

        const bugs = StoredBugs;

        bugs.forEach((bugs) => UI.addBugToList(bugs))
    }

    static addBugToList(bug) {
        const list = document.querySelector('#bug-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${bug.title}</td>
        <td>${bug.description}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `

        list.appendChild(row);
    }
}

// Display books
document.addEventListener('DOMContentLoaded', UI.displayBugs);