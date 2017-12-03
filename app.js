let baseUrl = 'https://punsh-master.firebaseio.com/data/punshes.json';

$('document').ready(() => {
  renderAllPunshesAjax(baseUrl);
});

function renderAllPunshesAjax(url) {
  $.get(url)
    .then( (data) => {
      let navBarDiv = $('.navbar');
      let navBarItemsDiv = $('<div>').addClass('navbar-items');

      for (let key in data) {
        let punsh = data[key];
        let currentPunshName = punsh['name'];
        let navBarItemDiv = $('<div>').addClass('navbar-item');
        let currentPunshHeading = $('<h4>').text(currentPunshName);
        navBarItemDiv.append(currentPunshHeading);

        navBarItemDiv.click((e) => {
          e.preventDefault();
          navBarItemsDiv.remove();
          renderClickedPunshAjax(currentPunshName);
        });

        navBarItemsDiv.append(navBarItemDiv);
      }

      navBarDiv.append(navBarItemsDiv);
      }
    );
  function renderClickedPunshAjax(punshName) {
    $.get(`${baseUrl}`)
      .then((data) => {
        for (let key in data) {
          let punsh = data[key];
          let contentDiv = $('.content');
          if (punsh['name'] === punshName) {
            let currentPunshNameDiv = $('<div>').addClass('content-header');
            let currentPunshHeadingDiv = $('<div>').addClass('content-heading').text(punsh['name']);
            currentPunshHeadingDiv.css('cursor', 'pointer');
            currentPunshHeadingDiv.click((e) => {
              e.preventDefault();
              attachBackEvents();
            });

            currentPunshNameDiv.append(currentPunshHeadingDiv);

            let currentPunshDataDiv = $('<div>').addClass('punsh-data');
            let currentPunshTypeDiv = $('<div>').addClass('punsh-type');
            let currentPunshTypeLabel = $('<label>').text('Type: ');
            let currentPunshTypeHeading = $('<h6>').text(punsh['type']);

            let currentPunshContentsDiv = $('<div>').addClass('punsh-contents');
            let currentPunshContentsLabel = $('<label>').text('Contents: ');
            let currentPunshContentsParagraph = $('<p>').text(punsh['contents']);

            let currentPunshDescriptionDiv = $('<div>').addClass('punsh-description');
            let currentPunshDescriptionLabel = $('<label>').text('Description: ');
            let currentPunshDescriptionParagraph = $('<p>').text(punsh['description']);

            currentPunshTypeDiv.append(currentPunshTypeLabel);
            currentPunshTypeDiv.append(currentPunshTypeHeading);

            currentPunshContentsDiv.append(currentPunshContentsLabel);
            currentPunshContentsDiv.append(currentPunshContentsParagraph);

            currentPunshDescriptionDiv.append(currentPunshDescriptionLabel);
            currentPunshDescriptionDiv.append(currentPunshDescriptionParagraph);


            currentPunshDataDiv.append(currentPunshTypeDiv);
            currentPunshDataDiv.append(currentPunshContentsDiv);
            currentPunshDataDiv.append(currentPunshDescriptionDiv);
            contentDiv.append(currentPunshNameDiv);
            contentDiv.append(currentPunshDataDiv);
          }
        }
      })

  }

  function attachBackEvents() {
    $('.content').empty();
    renderAllPunshesAjax(baseUrl);
  }
}
