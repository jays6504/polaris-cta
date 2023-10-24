import { LitElement, html, css } from 'lit';

export class PolarisCTA extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: {type: String},
      light: {type: Boolean, reflect: true},
      dark: {type: Boolean, reflect: true},
      tinted: {type: Boolean, reflect: true},
      beveled: {type: Boolean, reflect: true},
      gradient: {type: Boolean, reflect: true},
      active: {type: Boolean, reflect: true},
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      /**
      the following create the default state of the CTAs 
       */
      :host([light]) {
        border: 1px solid #fff;
      }
      :host([dark]) {
        background-color: #fff;
      }
      :host([tinted]) {
        background-color: #fff;
      }
      :host([beveled]) {
        border-radius: 4px;
      }

      /**
      the following create the interacted versions default state of the CTAs 
       */
      :host([light]) .link:focus,
      :host([light]) .link:hover,
      :host([light][active]) .link{
        background-color: #000;
      }
      :host([dark]) .link:focus,
      :host([dark]) .link:hover,
      :host([dark][active]) .link{
        background-color: #000;
      }
      :host([gradient]) .link:focus,
      :host([gradient]) .link:hover,
      :host([gradient][active]) .link{
        background:linear-gradient(#fff, #000);
      }
    `;
  }

  constructor() {
    super();
    this.name = 'My boilerplate';
    this.light = false;
    this.dark = false;
    this.tinted = false;
    this.beveled = true;
    this.gradient = false;
  }

  render() {
    return html`<a class='link' href='${this.link}'><span>${this.name} ></span></a>`;
  }
}
