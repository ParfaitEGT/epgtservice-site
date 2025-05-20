fetch('/avis/')
   .then(response => response.json())
   .then(data => {
       let avisContainer = document.getElementById('avis');
       data.forEach(avis => {
           let avisElement = document.createElement('div');
           avisElement.innerHTML = `<strong>${avis.nom}</strong>: ${avis.message}`;
           avisContainer.appendChild(avisElement);
       });
   });