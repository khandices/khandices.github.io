const projects = [
            // {
            //     "projectName": "Grid Overlay",
            //     "summary": "As a visual artist, I often wanted a grid overlay for my drawings so I could draw the enlarged image on a canvas. Upload an image, add a grid overlay, and download the image.",
            //     "tech": ["JS", "React", "Typescript"],
            //     "gitHubLink": "https://khandices.github.io/portfolio",
            //     "liveLink": "https://khandices.github.io/portfolio"
            //
            // },
            {
                "projectName": "Funemployment",
                "summary": "During my stint of unemployment, I wanted a cleaner way of tracking my job applications and visualizing my job search data. [Currently in progress]",
                "tech": ["React", "Python", "PostgreSQL"],
                "gitHubLink": "https://github.com/khandices/funemployment-app",
                "liveLink": "https://khandices.github.io/portfolio"

            },
            // {
            //     "projectName": "Sample Project1",
            //     "summary": " I have not yet chosen which project I'd like to include here, but don't worry...it's coming!",
            //     "tech": ["JS", "React", "Typescript"],
            //     "gitHubLink": "https://khandices.github.io/portfolio",
            //     "liveLink": "https://khandices.github.io/portfolio"
            //
            // },
            // {
            //     "projectName": "Sample Project2",
            //     "summary": "I have not yet chosen which project I'd like to include here, but don't worry...it's coming!",
            //     "tech": ["React", "Python", "PostgreSQL"],
            //     "gitHubLink": "https://khandices.github.io/portfolio",
            //     "liveLink": "https://khandices.github.io/portfolio"
            //
            // }
        ]


function createProjectCard(project) {
        const card = document.createElement("div");
        card.className = "projectCard";

        const projectName = document.createElement("div");
        projectName.className = "projectName";
        projectName.innerText = project.projectName;
        card.appendChild(projectName);

        const summary = document.createElement("div");
        summary.className = "projectSummary";
        summary.innerText = project.summary;
        card.appendChild(summary);

        const tech = document.createElement("div");
        tech.className = "techList";
        tech.innerText = project.tech.join(" | ");
        card.appendChild(tech);

        const links = document.createElement("div");
        links.className = "projectLinks";

        const gitHubLink = document.createElement("a");
        gitHubLink.className = "gitHubLink";
        gitHubLink.href = project.gitHubLink;
        gitHubLink.target = "_blank";
        gitHubLink.innerText = "GitHub";
        gitHubLink.ariaLabel = "Link to my GitHub Profile"
        links.appendChild(gitHubLink);

        const liveLink = document.createElement("a");
        liveLink.className = "liveLink";
        liveLink.href = project.liveLink;
        liveLink.target = "_blank";
        liveLink.innerText = "Live";
        liveLink.ariaLabel = "Link to view " + project.projectName + " project"
        links.appendChild(liveLink);

        card.appendChild(links);


        return card;
}


document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.getElementById("projectList");
    projects.forEach(project => {
        projectList.appendChild(createProjectCard(project));
    })
    return projectList;
    }
)