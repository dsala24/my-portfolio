// This function might be called when the page has switched from the globe view to the portfolio
function initPortfolio() {
    const projectsList = document.getElementById('projects-list');
    
    // Example of how to dynamically load projects. In reality, you might fetch these from a JSON file or an API.
    const projects = [
        { id: 'project1', name: 'Project 1', thumbnail: 'projects/project1/thumbnail.jpg' },
        { id: 'project2', name: 'Project 2', thumbnail: 'projects/project2/thumbnail.jpg' }
    ];

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = `
            <img src="${project.thumbnail}" alt="${project.name}">
            <h2>${project.name}</h2>
            <button onclick="openProjectDetails('${project.id}')">View Details</button>
        `;
        projectsList.appendChild(projectDiv);
    });
}

function openProjectDetails(projectId) {
    // Here, you would typically open a modal or navigate to the details page
    // For this example, we'll just log to console and open the details HTML
    console.log(`Details requested for ${projectId}`);
    window.open(`projects/${projectId}/details.html`, '_blank');
}

// Function to setup hover effects, animations, or other interactive elements
function setupPortfolioInteractions() {
    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });

        project.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
}

// Call these when the portfolio section becomes visible
initPortfolio();
setupPortfolioInteractions();
