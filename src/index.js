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
    getAnchor() {
        return this.data.anchor || '';
    }

    /**
     * Current UTM Source
     * @returns {string}
     */
    getUtmSource() {
        return this.data.utmSource || '';
    }

    /**
     * Current UTM Medium
     * @returns {string}
     */
    getUtmMedium() {
        return this.data.utmMedium || '';
    }

    /**
     * Current UTM Campaign
     * @returns {string}
     */
    getUtmCampaign() {
        return this.data.utmCampaign || '';
    }

    /**
     * Current UTM Term
     * @returns {string}
     */
    getUtmTerm() {
        return this.data.utmTerm || '';
    }

    /**
     * Current UTM Content
     * @returns {string}
     */
    getUtmContent() {
        return this.data.utmContent || '';
    }
    
    /**
     * Constructor
     *
     * @param api - Editor.js API
     * @param data — previously saved data
     */
    constructor({ api, data, block }) {
        this.api = api;
        this.data = data || {};
        this.block = block;
        
        this._CSS = {
          classWrapper: 'cdx-anchor-tune-wrapper',
          classIcon: 'cdx-anchor-tune-icon',
          classInputContainer: 'cdx-anchor-tune-input-container',
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
        
        const icon = document.createElement('div');
        icon.classList.add(this._CSS.classIcon);
        icon.innerHTML = '<svg class="icon icon--link" width="14px" height="10px"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#link"></use></svg>';

        const inputContainer = document.createElement('div');
        inputContainer.classList.add(this._CSS.classInputContainer);
        
        const anchorInput = document.createElement('input');
        anchorInput.placeholder = this.api.i18n.t('Image Link');
        anchorInput.classList.add(this._CSS.classInput);
        anchorInput.value = this.getAnchor();

        const utmSourceInput = document.createElement('input');
        utmSourceInput.placeholder = this.api.i18n.t('UTM Source');
        utmSourceInput.classList.add(this._CSS.classInput);
        utmSourceInput.value = this.getUtmSource();

        const utmMediumInput = document.createElement('input');
        utmMediumInput.placeholder = this.api.i18n.t('UTM Medium');
        utmMediumInput.classList.add(this._CSS.classInput);
        utmMediumInput.value = this.getUtmMedium();

        const utmCampaignInput = document.createElement('input');
        utmCampaignInput.placeholder = this.api.i18n.t('UTM Campaign');
        utmCampaignInput.classList.add(this._CSS.classInput);
        utmCampaignInput.value = this.getUtmCampaign();

        const utmTermInput = document.createElement('input');
        utmTermInput.placeholder = this.api.i18n.t('UTM Term');
        utmTermInput.classList.add(this._CSS.classInput);
        utmTermInput.value = this.getUtmTerm();

        const utmContentInput = document.createElement('input');
        utmContentInput.placeholder = this.api.i18n.t('UTM Content');
        utmContentInput.classList.add(this._CSS.classInput);
        utmContentInput.value = this.getUtmContent();

        anchorInput.addEventListener('input', (event) => {
            // Append "https://" to anything that doesn't start with "http"
            let value = event.target.value
            if (value.length > 0 && value.indexOf('http') !== 0) {
                value = `https://${value}`;
            }

            // Save value
            if (value.length > 0) {
                this.data.anchor = value;
            } else {
                this.data.anchor = undefined;
            }
        });

        utmSourceInput.addEventListener('input', (event) => {
            let value = event.target.value;
            if (value.length > 0) {
                this.data.utmSource = value;
            } else {
                this.data.utmSource = undefined;
            }
        });

        utmMediumInput.addEventListener('input', (event) => {
            let value = event.target.value;
            if (value.length > 0) {
                this.data.utmMedium = value;
            } else {
                this.data.utmMedium = undefined;
            }
        });

        utmCampaignInput.addEventListener('input', (event) => {
            let value = event.target.value;
            if (value.length > 0) {
                this.data.utmCampaign = value;
            } else {
                this.data.utmCampign = undefined;
            }
        });

        utmTermInput.addEventListener('input', (event) => {
            let value = event.target.value;
            if (value.length > 0) {
                this.data.utmTerm = value;
            } else {
                this.data.utmTerm = undefined;
            }
        });

        utmContentInput.addEventListener('input', (event) => {
            let value = event.target.value;
            if (value.length > 0) {
                this.data.utmContent = value;
            } else {
                this.data.utmContent = undefined;
            }
        });

        inputContainer.appendChild(anchorInput);
        inputContainer.appendChild(utmSourceInput);
        inputContainer.appendChild(utmMediumInput);
        inputContainer.appendChild(utmCampaignInput);
        inputContainer.appendChild(utmTermInput);
        inputContainer.appendChild(utmContentInput);

        wrapper.appendChild(icon);
        wrapper.appendChild(inputContainer);

        return wrapper;
    }
    /**
     * Save
     * @returns {*}
     */
    save() {
        if (this.data.anchor) {
            return this.data;
        } else {
            return {};
        }
    }
}

module.exports = AnchorBlockTune;
