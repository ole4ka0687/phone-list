class PhoneCatalogue {
    constructor(options) {
        this._el = options.el;
        this._phones = options.phones;

        this._render();
    }
    _render() {
        const template = document.querySelector('#catalogue-template').innerHTML;
        const compiledTemplate = _.template(template);
        this._el.innerHTML = compiledTemplate({
            phones: this._phones
        });
    }
}