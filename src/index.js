/**
 * Build styles
 */
require('./index.css').toString();

class AnchorBlockTune {

    /**
     * Current anchor
     * @returns {bool}
     */
    static get isTune() {
        return true;
    }

    /**
     * Current anchor
     * @returns {string}
     */
    getAnchor(){
        return this.data.anchor || '';
    }
    
    /**
     * Constructor
     *
     * @param api - Editor.js API
     * @param data — previously saved data
     */
    constructor({ api, data }) {
        this.api = api;
        this.data = data || {};
        
        this._CSS = {
          classWrapper: 'cdx-anchor-tune-wrapper',
          classIcon: 'cdx-anchor-tune-icon',
          classInput: 'cdx-anchor-tune-input'
        };
    }

    /**
     * Rendering tune wrapper
     * @returns {*}
     */
    render() {
        const wrapper = document.createElement('div');
        wrapper.classList.add(this._CSS.classWrapper);
        
        const wrapperIcon = document.createElement('div');
        wrapperIcon.classList.add(this._CSS.classIcon);
        wrapperIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><g id="hash"><path style="" d="M30,12V8h-5.004l1-8h-4l-1,8h-7.998l1-8h-4l-1,8H2v4h6.498L7.5,20H2v4h5l-1,8h4l1-8h8l-1.002,8H22    l1-8h7v-4h-6.5l0.996-8H30z M19.5,20h-8l0.998-8h7.998L19.5,20z" fill="#878787" data-original="#030104" class=""/></g></g></svg>';
        
        const wrapperInput = document.createElement('input');
        wrapperInput.placeholder = this.api.i18n.t('Anchor');
        wrapperInput.classList.add(this._CSS.classInput);
        wrapperInput.value = this.getAnchor();

        wrapperInput.addEventListener('input', (event) => {
            // Append "https://" to anything that doesn't start with "http"
            let value = event.target.value
            if (value.indexOf('http') !== 0) {
                value = `https://${value}`;
            }

            // Save value
            if (value.length > 0) {
                this.data.anchor = value;
            } else {
                this.data.anchor = undefined;
            }
        });

        wrapper.appendChild(wrapperIcon);
        wrapper.appendChild(wrapperInput);

        return wrapper;
    }
    /**
     * Save
     * @returns {*}
     */
    save() {
        return this.data;
    }
}

module.exports = AnchorBlockTune;
