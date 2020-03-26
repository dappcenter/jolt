<div align="center">
    <img src="https://outwalk-studios.github.io/jolt/resources/jolt-logo.svg" alt="Jolt" width="400px" height="300px" />
</div>

<div align="center">
    <p><strong>A JavaScript framework for building lightning fast web apps.</strong></p>
    <p>Build responsive web apps for Desktop and Mobile platforms.</p>
    <a href="#">
        <img src="https://github.com/outwalk-studios/jolt/workflows/build/badge.svg" alt="Current build status of Jolt">
    </a>
    <a href="https://github.com/outwalk-studios/jolt/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Jolt is released under the MIT license">
    </a>
    <a href="https://discord.gg/2wDcVGg">
        <img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Join us on Discord">
    </a>
</div>

---

## Installation
Jolt is designed to fit into your existing workflows with no hassle. </br>
You can install Jolt using [npm](https://www.npmjs.com/package/jolt) or add it to your page using a [CDN](https://unpkg.com/jolt) and script tag.
When installing Jolt using a script tag, all Jolt features are in a `Jolt` namespace.

Install using [npm](https://www.npmjs.com/package/jolt):
```bash
npm install jolt
```

Install using a [CDN](https://unpkg.com/jolt) and script tag:
```html
<script src="https://unpkg.com/jolt"></script>
```

Documentation is availiable [here](https://outwalk-studios.github.io/jolt/). </br>
Examples are availiable [here](https://github.com/outwalk-studios/jolt/tree/master/examples).

---

## Getting Started

After installing Jolt you can get a simple app up and running by creating a [View](https://outwalk-studios.github.io/jolt/View.html) and a [Router](https://outwalk-studios.github.io/jolt/Router.html).

```js
class MyView extends View {

    render() {
        return `
            <h1>Hello World</h1>
        `;
    }
}

const router = new Router({
    "/home": new MyView()
});

router.listen();
```

Going to `https://example.com/home` will render the associated view.

---

### Routing

By default Jolt uses PushState Routing. </br>
In order to make PushState Routing work, you need to follow 2 steps.

1. Add `<base href="/" />` to the `<head>` of your index.html
2. Configure your web server to respond to all routes with your index.html file.

If you are unable to configure the web server or need to support old browsers that dont support the PushState Routing method, </br>
you can use the Hash Routing method by passing `true` to the Router's `listen` function.


Route fragments beginning with `:` are parameters, they accept any value in the url and that value is saved to the fragment name.

**Example:**
```js
const router = new Router({
    "/users/:user": new UserView()
});

router.listen();
```

The `load` and `render` functions in UserView would recieve a params object containing the value of the parameter. </br>
If the url was `https://example.com/users/myuser`, the params object would be `{user: "myuser"}`.


You can learn more about routing in Jolt [here](https://outwalk-studios.github.io/jolt/Router.html).

---

### Views

Jolt uses views to create dynamic pages for web apps.
Using the `View` class, you can dynamically generate HTML to render to your page.

By default views will render to an element containing `id="app"`, you can change this behavior by passing an element id into the view's constructor.

**Example:**
```js
class MyView extends View {

    load() {
        this.world = "World";
    }

    render() {
        return `
            <h1>Hello ${this.word}!</h1>
        `;
    }
}
```

this view would render `Hello World!` to the page.

You can learn more about Views in Jolt [here](https://outwalk-studios.github.io/jolt/View.html).

---

### Components

You can create your own HTML elements very similarly to how you create views.

A class that extends `Component` must be registerd with an element name in order to be available to use.

**Example:**
```js
class MyElement extends Component {

    render() {
        return `
            <h1>Hello World!</h1>
        `;
    }
}

Component.register("hello-world", MyElement);
```

This would make `<hello-world></hello-world>` available to use in a view or html page.

Component names are required to have `-` in the name in order to not conflict with standardized HTML elements.

You can learn more about Components in Jolt [here](https://outwalk-studios.github.io/jolt/Component.html)

---

## Why?

Jolt was developed to make developing web apps easy with any build process you prefer. Jolt is lightweight and effienctly renders views to the page for powerful web apps. </br>
When building web apps using Jolt, you can use your existing HTML, CSS, and JavaScript skills to build powerful and responsive web apps.

---

## Support
Having trouble with Jolt? Create a new [Issue](https://github.com/outwalk-studios/jolt/issues) or contact us on our [website](https://www.outwalkstudios.com/contact).

---

## License
Jolt is licensed under the terms of the [**MIT**](https://github.com/outwalk-studios/jolt/blob/master/LICENSE) license.

