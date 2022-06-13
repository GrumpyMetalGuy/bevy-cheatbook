var nagbar = document.createElement('div');
nagbar.id = 'nagbar';
nagbar.className = 'nagbar content';
var p1 = document.createElement('p');
p1.appendChild(document.createTextNode(' Donate to help me work on this book. Thanks!'));
p1.insertAdjacentHTML('afterbegin', '<a class="github-button" href="https://github.com/sponsors/inodentry" data-icon="octicon-heart" data-size="small" aria-label="Sponsor @inodentry on GitHub">GitHub Sponsors</a>');
nagbar.appendChild(p1);
var p2 = document.createElement('p');
p2.insertAdjacentHTML('afterbegin', 'I can offer private help with Bevy (tutoring, help with your projects, consulting, etc.). <a href="/contact.html">Contact me</a> if interested!');
nagbar.appendChild(p2);
document.getElementById('page-wrapper').appendChild(nagbar);
