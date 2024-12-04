import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import BackgroundElement from './components/BackgroundElement.vue';

const WrappedElement = wrap(Vue, BackgroundElement);

window.customElements.define("background-element", WrappedElement);
