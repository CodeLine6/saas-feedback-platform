import ReactDom from "react-dom/client";
import { FeedbackFormWidget,TestimonialsWidget } from "./components/widget";

export const normalizeAttributes = (attrs) => {
    return attrs.replace(/-([a-z])/g, (_,letter) => letter.toUpperCase());
}


class FeedbackWidgets extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    getPropsFromAttributes() {
        const props = {};
        for(const { name, value } of this.attributes) {
            props[normalizeAttributes(name)] = value
        }
        return props

    }
}

class FeedbackFormWidgetWebComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    getPropsFromAttributes() {
        const props = {};
        for(const { name, value } of this.attributes) {
            props[normalizeAttributes(name)] = value
        }
        return props

    }

    connectedCallback() {
        const props = this.getPropsFromAttributes();
        const root = ReactDom.createRoot(this.shadowRoot);
        root.render(<FeedbackFormWidget {...props}/>);
    }
}

class TestimonialWidgetWebComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    getPropsFromAttributes() {
        const props = {};
        for(const { name, value } of this.attributes) {
            props[normalizeAttributes(name)] = value
        }
        return props

    }

    connectedCallback() {
        const props = this.getPropsFromAttributes();
        const root = ReactDom.createRoot(this.shadowRoot);
        root.render(<TestimonialsWidget {...props}/>);
    }
}

export {FeedbackFormWidgetWebComponent, TestimonialWidgetWebComponent}
