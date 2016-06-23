const choo = require('choo');
const app = choo();

app.model({
   state: { title: 'Set the title' },
   reducers: {
     update: (action, state) => ({ title: action.value })
   }
});

const mainView = (params, state, send) =>
    choo.view`
      <main>
        <h1>${state.title}</h1>
        <input type="text" oninput=${(e) => send('update', {value: e.target.value})} autofocus />
        <p><a href="/test">test</a></p>
      </main>
    `;

const testView = (params, state, send) =>
    choo.view`
      <main>
        <h1>test</h1>
        <p><a href="/">HOME</a></p>
      </main>
    `;

app.router((route) => [
    route('/', mainView),
    route('/test', testView)
]);

const tree = app.start();
document.body.appendChild(tree);