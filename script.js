fetch('/avis.json') // Correction du chemin
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Données des avis récupérées :", data); // Vérification dans la console
        
        let avisContainer = document.getElementById('avis'); // Vérifie si l'élément existe
        if (avisContainer) {
            avisContainer.innerHTML = ""; // Nettoie le conteneur avant d'ajouter les nouveaux avis
            
            if (data.length === 0) {
                avisContainer.innerHTML = "<p>Aucun avis disponible pour le moment.</p>";
            } else {
                data.forEach(avis => {
                    let avisElement = document.createElement('div');
                    avisElement.innerHTML = `<strong>${avis.nom}</strong>: ${avis.message}`;
                    avisContainer.appendChild(avisElement);
                });
            }
        } else {
            console.error("Élément #avis introuvable dans le DOM !");
        }
    })
    .catch(error => {
        console.error("Erreur de chargement des avis :", error);
    });