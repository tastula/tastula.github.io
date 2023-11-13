const userUrl = 'https://status.cafe/users/tastula';
fetch(`${userUrl}/status.json`)
  .then((r) => r.json())
  .then((r) => {
    if (!r.content.length) {
      document.getElementById('statuscafe-content').innerHTML = 'No status!';
    } else {
      const author = `<a href="${userUrl}">${r.author}</a>`;
      const username = `${author} ${r.face} ${r.timeAgo}`;
      document.getElementById('statuscafe-username').innerHTML = username;
      document.getElementById('statuscafe-content').innerHTML = r.content;
    }
  });
