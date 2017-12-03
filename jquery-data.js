let punshes = {
  0: {
    name: "Punsh – The American Pie",
    type: "Strong",
    contents: "Some Apple Pie, Whiskey, Vodka, Orange Juice and some other things...",
    description: "By original recipe from the American Pie franchise, this punsh includes everything you would want in a college/university party."
  },
  1: {
    name: "Brendy Punsh",
    type: "Medium",
    contents: "Brendy, Apple Juice, Ice, Avocado Juice, some other strange fruits...",
    description: "The casual Brendy Punsh, quite expensive, nothing interesting here..."
  },
  2: {
    name: "Just Punsh it",
    type: "Sweet",
    contents: "Very Little Vodka, Orange Juice, Apple Juice, Banana Juice, Ice.",
    description: "A very comfortable taste for the lovers of weakly alchoholic drinks. The Just Pinsh It punsh is a sweet multi-vitamol drink, which cannot drunk you."
  }
};

renderAllPunshesInHTML(punshes);
renderSinglePunshInHTML(punshes, "Punsh – The American Pie");

function renderAllPunshesInHTML(punshes) {
  let navBarDiv = $('.navbar');
  let navBarItemsDiv = $('<div>').addClass('navbar-items');


  for (let key in punshes) {
    let punsh = punshes[key];
    let currentPunshName = punsh['name'];
    let navBarItemDiv = $('<div>').addClass('navbar-item');
    let currentPunshHeading = $('<h4>').text(currentPunshName);
    navBarItemDiv.append(currentPunshHeading);
    navBarItemsDiv.append(navBarItemDiv);
  }

  navBarDiv.append(navBarItemsDiv);
}

function renderSinglePunshInHTML(punshes, punshName) {
  for (let key in punshes) {
    let punsh = punshes[key];
    let contentDiv = $('.content');
    if (punsh['name'] === punshName) {
      let currentPunshNameDiv = $('<div>').addClass('content-header');
      let currentPunshHeadingDiv = $('<div>').addClass('content-heading').text(punsh['name']);
      currentPunshHeadingDiv.css('cursor', 'pointer');

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
}