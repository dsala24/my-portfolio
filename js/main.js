import * as THREE from 'three';
import { scene, camera, renderer } from './globe.js';

let scrollPosition = 0;
const targetZoomLevel = 1;
const NYCoordinates = new THREE.Vector3(0, 0, 0); // This should be set to the coordinates of NY

function onScroll() {
    scrollPosition = window.scrollY;
    let zoomLevel = 10 - (scrollPosition * 0.01);
    camera.position.z = zoomLevel > targetZoomLevel ? zoomLevel : targetZoomLevel;

    if (camera.position.z <= targetZoomLevel) {
        camera.lookAt(NYCoordinates);
        document.getElementById('globe-container').style.display = 'none';
        document.getElementById('portfolio').style.display = 'block';
        window.removeEventListener('scroll', onScroll);
        initPortfolio();
    }
}

window.addEventListener('scroll', onScroll);

function initPortfolio() {
    const projectsList = document.getElementById('projects-list');
    // Here you would dynamically add your projects to the list
    // For example:
    projectsList.innerHTML = `
        <div class="project" onclick="openProject('project1')">Project 1</div>
        <div class="project" onclick="openProject('project2')">Project 2</div>
    `;
}

function openProject(projectId) {
    // Logic to open project details, perhaps in a modal or new page
    console.log(`Opening ${projectId}`);
}

// For resizing
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
