import { LitElement, html, css } from 'lit';

export class PolarisCTA extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: {type: String},
      head: {type: String},
      outline: {type: Boolean, reflect: true},
      filled: {type: Boolean, reflect: true},
      tinted: {type: Boolean, reflect: true},
      lightoutline: {type: Boolean, reflect: true},
      lightfill: {type: Boolean, reflect: true},
      active: {type: Boolean, reflect: true},
      round: {type: Boolean, reflect: true},
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        justify-content: center;
        text-align: center;
        padding: 1rem 1rem;
      }

      a {
        font-style: italic;
        text-decoration: none;
        display: inline-block;
        margin-left: 32px;
        padding: 12px 32px;
      }

        .link {
          font-weight:bold;
          text-decoration:none;
          padding: 0.75rem 1rem 0.75rem 1.5rem;
          border: 2px solid #005fa9;
          color: #005fa9;
          font-size: 16px;
        }

        :host([outline]) .link{
          background-color: #ffffff;
          border: 2px solid #005fa9;
          border-radius: 2px;
          color: #005fa9;
          cursor: pointer;
        }
        :host([outline][active]),
        :host([outline]) .link:hover,
        :host([outline]) .link:focus{
          background-color: #005fa9;
          border: 2px solid #005fa9;
          border-radius: 2px;
          color: #ffffff;
          cursor: pointer;
        }

        :host([filled]) .link{
          background-color: #005fa9;
          border: 2px solid #005fa9;
          color: #ffffff;
          cursor: pointer;
        }
        :host([filled][active]),
        :host([filled]) .link:hover,
        :host([filled]) .link:focus{
          background-color: #ffffff;
          border: 2px solid #005fa9;
          color: #005fa9;
        }

        :host([tinted]) .link{
          border: 2px solid #ffffff;
          background-color: #4f627c;
          color: #b0e1ff;
        }
        :host([tinted][active]),
        :host([tinted]) .link:hover,
        :host([tinted]) .link:focus{
          border: 2px solid #b0e1ff;
          background-color: #ffffff;
          color: #4f627c;
          border-radius: 2px;
        }
        
        :host([lightoutline]) .link{
          border: 2px solid #ffffff;
          background-color: #001e44;
          color: #ccf0ff;
        }
        :host([lightoutline][active]),
        :host([lightoutline]) .link:hover,
        :host([lightoutline]) .link:focus{
          border: 2px solid #ccf0ff;
          background-color: #ccf0ff;
          color: #001e44;
        }

        :host([lightfilled]) .link{
          border: 2px solid #ccf0ff;
          background-color: #ccf0ff;
          color: #001e44;
        }
        :host([lightfilled][active]),
        :host([lightfilled]) .link:hover,
        :host([lightfilled]) .link:focus{
          border: 2px solid #ffffff;
          background-color: #001e44;
          color: #ccf0ff;
        }
        /* Gradient is based on the example button o the news page itself.*/
        :host([gradient][active]),
        :host([gradient]) .link:hover,
        :host([gradient]) .link:focus{
          border: 2px solid #001e44;
          background: linear-gradient(to bottom,#009cde 1%,#1b5c99 66%,#1e407c 100%);
          color: #ffffff;
        }

        :host([round]) .link
        {
          border-radius: 6px;
        }
    `;
  }

  constructor() {
    super();
    this.name = 'SUBSCRIBE';
    this.link= "https://headlines.psu.edu";
  }

  render() {
    return html`
        <a class="link" href="${this.link}"><slot>${this.name}</slot><slot>${" >"}</slot></a>`;
  }
}