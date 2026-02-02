const projects = [
            {
                "projectName": "Grid Overlay",
                "image": "/images/funnyCatpic.png",
                "summary": "As a visual artist, I often wanted a grid overlay for my drawings so I could draw the enlarged image on a canvas. Upload an image, add a grid overlay, and download the image.",
                "tech": ["JS", "React", "Typescript"],
                "gitHubLink": "https://khandices.github.io/portfolio",
                "liveLink": "https://khandices.github.io/portfolio"

            },
            {
                "projectName": "Funemployment",
                "image": "/images/funnyCatpic.png",
                "summary": "During my stint of unemployment, I wanted a cleaner way of tracking my job applications and visualizing my job search data.",
                "tech": ["React", "Python", "PostgreSQL"],
                "gitHubLink": "https://khandices.github.io/portfolio",
                "liveLink": "https://khandices.github.io/portfolio"

            },
            {
                "projectName": "Sample Project1",
                "image": "/images/funnyCatpic.png",
                "summary": " I have not yet chosen which project I'd like to include here, but don't worry...it's coming!",
                "tech": ["JS", "React", "Typescript"],
                "gitHubLink": "https://khandices.github.io/portfolio",
                "liveLink": "https://khandices.github.io/portfolio"

            },
            {
                "projectName": "Sample Project2",
                "image": "/images/funnyCatpic.png",
                "summary": "I have not yet chosen which project I'd like to include here, but don't worry...it's coming!",
                "tech": ["React", "Python", "PostgreSQL"],
                "gitHubLink": "https://khandices.github.io/portfolio",
                "liveLink": "https://khandices.github.io/portfolio"

            }
        ]


function createProjectCard(project) {
        const card = document.createElement("div");
        card.className = "projectCard";

        const projectName = document.createElement("div");
        projectName.className = "projectName";
        projectName.innerText = project.projectName;
        card.appendChild(projectName);

        const image = document.createElement("img");
        image.src = project.image;
        image.alt = "Image of" + project.name + " app.";
        card.appendChild(image);

        const summary = document.createElement("div");
        summary.className = "projectSummary";
        summary.innerText = project.summary;
        card.appendChild(summary);

        const tech = document.createElement("div");
        tech.className = "techList";
        tech.innerText = "Tech: " + project.tech.join(", ");
        card.appendChild(tech);

        const links = document.createElement("div");
        links.className = "projectLinks";

        const gitHubLink = document.createElement("a");
        gitHubLink.className = "gitHubLink";
        gitHubLink.href = project.gitHubLink;
        gitHubLink.target = "_blank";
        gitHubLink.innerText = "GitHub";
        links.appendChild(gitHubLink);

        const liveLink = document.createElement("a");
        liveLink.className = "liveLink";
        liveLink.href = project.liveLink;
        liveLink.target = "_blank";
        liveLink.innerText = "Live";
        links.appendChild(liveLink);

        card.appendChild(links);


        return card;
}


document.addEventListener("DOMContentLoaded", () => {
    const projectGrid = document.getElementById("projectGrid");
    projects.forEach(project => {
        projectGrid.appendChild(createProjectCard(project));
    })
    return projectGrid;
    }
)