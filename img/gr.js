// Fonction pour afficher la fonction de recherche
function showSearch() {
    document.getElementById("search").style.display = "block";
  }
  
  // Fonction pour masquer la fonction de recherche
  function hideSearch() {
    document.getElementById("search").style.display = "none";
  }
  
  // Fonction pour soumettre le formulaire de contact
  function submitContactForm() {
    // Récupérer les données du formulaire
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Envoyer le formulaire par e-mail
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/contact.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("name=" + name + "&email=" + email + "&message=" + message);
  
    // Afficher un message de confirmation
    document.getElementById("submit").innerHTML = "Votre message a été envoyé.";
  }
  
  // Initialiser les événements
  document.getElementById("search-button").onclick = showSearch;
  document.getElementById("search-close").onclick = hideSearch;
  document.getElementById("submit-button").onclick = submitContactForm;
  