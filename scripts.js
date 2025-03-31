// Toggle function para mostrar/ocultar el contenido adicional
function toggleArticle(articleId) {
    const article = document.getElementById(articleId);
    
    // Verifica si el artículo está visible, si es así lo oculta, si no lo muestra
    if (article.style.display === "block") {
        article.style.display = "none";
    } else {
        article.style.display = "block";
    }
}

// Función para alternar las secciones
function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';  // Muestra la sección seleccionada
        } else {
            section.style.display = 'none';  // Oculta las otras secciones
        }
    });
}
