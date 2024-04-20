# Vue Grid Components

This is a package of Vue components for displaying data in a grid

## Install via Copy/Paste

Just copy the components from the `/src/Compenents` directory into your projects components `/js/Components/Grid` directory, or where ever you house your Vue components.

### Import Example

```javascript
import Grid from "@/Components/Grid/Grid.vue";
```

## CSS

This package uses tailwind css. So you'll need to make sure tailwind is installed in your project.

### Classes

There are some classes you'll need to implement: 

`.input-text, .input-textarea, .input-select, .btn-primary, .btn-red, .btn-green, .btn-white` 

This can be done it one of two ways:

#### 1. Copy/Paste:

Copy the css classes from the `src/main.css` file into your project css file.

#### 2. Using the `vue-grid-components` class from `style.css`:

This method will require you to import the `style.css` in your projects `app.js` file. Making sure it is imported before the app's css.
```javascript
// app.js
import './bootstrap';
import '../../node_modules/vue-grid-components/dist/style.css'; // <-- this sould come before the app.css import
import '../css/app.css';

//...
```

Nest the `Grid` in a DOM element that has the class `vue-grid-components`
```html
<div class="vue-grid-components">
    <Grid :records="users" :columns="[{field: 'name'}, {field: 'email'}]"/>
</div>
```



## Usage

```vue
<template>
    <Grid :records="users" :columns="[{field: 'name'}, {field: 'email'}]"/>
</template>
```
