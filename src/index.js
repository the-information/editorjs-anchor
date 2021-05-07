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
        wrapperIcon.innerHTML = '<svg class="icon icon--link" width="14px" height="10px"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#link"></use></svg>';
        
        const wrapperInput = document.createElement('input');
        wrapperInput.placeholder = this.api.i18n.t('Image Link');
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
