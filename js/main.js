document.addEventListener("DOMContentLoaded", () => {
    // Simulación de descarga del Lead Magnet
    const downloadBtn = document.getElementById("downloadBtn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", () => {
            alert("¡Tu plantilla se está descargando! (Aquí enlazaremos el PDF real)");
        });
    }

    // Animaciones suaves al hacer scroll (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Dejar de observar una vez que ya apareció
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px" 
    });

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});