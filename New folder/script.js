document.getElementById('all').addEventListener('click', function() {
    showAllHostels();
  });
  
  document.getElementById('vijaynagar').addEventListener('click', function() {
    showHostelsByLocation('vijaynagar');
  });
  
  document.getElementById('palasiya').addEventListener('click', function() {
    showHostelsByLocation('palasiya');
  });
  
  document.getElementById('other').addEventListener('click', function() {
    showHostelsByLocation('other');
  });
  
  function showAllHostels() {
    var hostelCards = document.querySelectorAll('.hostel-card');
    hostelCards.forEach(function(card) {
      card.style.display = 'block'; // Show all hostel cards
    });
  }
  
  function showHostelsByLocation(location) {
    var hostelCards = document.querySelectorAll('.hostel-card');
    hostelCards.forEach(function(card) {
      var cardLocation = card.dataset.location;
      if (cardLocation === location) {
        card.style.display = 'block'; // Show hostel cards of the specified location or all locations
      } else {
        card.style.display = 'none'; // Hide hostel cards of other locations
      }
    });
  }
  