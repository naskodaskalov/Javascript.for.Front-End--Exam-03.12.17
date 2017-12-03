let punshes = {
  0: {
    name: "One Punsh Man",
    type: "Strong",
    contents: "Very little Vodka, Very little Brendy, Very little Wine, Very little Whiskey, Very little Tequila and a lot of Watermelon Juice.",
    description: "This punsh was discovered in an unknown house party, when there was almost no alcohol left, and the people had to combine a little from every alchohol. One Punsh of this is enough to knock you down for good, hence the name."
  },
  1: {
    name: "Wine Punsh",
    type: "Sweet",
    contents: "Wine, Apple Juice, Ice.",
    description: "Casual Wine Punsh, for the ladies that love wine. It is not very strong, it is actually sweet. Sweet enough to make them sweetly drunk and playful."
  },
  2: {
    name: "Punsh Out",
    type: "Sweet",
    contents: "Champagne, Watermellon Juice, Ice.",
    description: "This is a very sweet, almost non-alchoholic, punsh. Very suitable for ladies, which want to keep their manners but have a little fun at a party."
  }
};

attachPunshesEvents(punshes);

function attachPunshesEvents(punshes) {
  let navBarDiv = $('.navbar');
  let navBarItemsDiv = $('<div>').addClass('navbar-items');


  for (let key in punshes) {
    let punsh = punshes[key];
    let currentPunshName = punsh['name'];
    let navBarItemDiv = $('<div>').addClass('navbar-item');
    let currentPunshHeading = $('<h4>').text(currentPunshName);
    navBarItemDiv.append(currentPunshHeading);

    navBarItemDiv.click((e) => {
      e.preventDefault();
      navBarItemsDiv.remove();
      renderClickedPunsh(punshes, currentPunshName);
    });

    navBarItemsDiv.append(navBarItemDiv);
  }

  navBarDiv.append(navBarItemsDiv);

  function renderClickedPunsh(punshes, punshName) {
    for (let key in punshes) {
      let punsh = punshes[key];
      let contentDiv = $('.content');
      if (punsh['name'] === punshName) {
        let currentPunshNameDiv = $('<div>').addClass('content-header');
        let currentPunshHeadingDiv = $('<div>').addClass('content-heading').text(punsh['name']);
        currentPunshHeadingDiv.css('cursor', 'pointer');
        currentPunshHeadingDiv.click((e) => {
          e.preventDefault();
          attachBackEvents(punshes);
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
  }
}

function attachBackEvents(punshes) {
  $('.content').empty();
  attachPunshesEvents(punshes)
}