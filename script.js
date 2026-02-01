fetch('data.json')
  .then(res => res.json())
  .then(data => render(data));

function render(apps) {
  const app = document.getElementById('app');
  const search = document.getElementById('search');

  function display(list) {
    app.innerHTML = '';
    list.forEach(item => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <a href="${item.url}" target="_blank">Download</a>
      `;
      app.appendChild(div);
    });
  }

  display(apps);

  search.addEventListener('input', e => {
    const val = e.target.value.toLowerCase();
    const filtered = apps.filter(app =>
      app.name.toLowerCase().includes(val) ||
      app.desc.toLowerCase().includes(val)
    );
    display(filtered);
  });
}
