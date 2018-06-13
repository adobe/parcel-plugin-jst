const { Asset } = require("parcel-bundler");
const dot = require("dot");
const JSAsset = require('parcel-bundler/src/assets/JSAsset');

class JSTAsset extends Asset {
  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.type = 'js';
  }

  async parse(code) {
    this.contents = dot.template(code);
    return this.contents;
    //return await super.parse(this.contents);
  }

  async generate() {
    return [
      {
        type: 'js',
        value: `module.exports=${this.contents};module.exports.main=function(a) { return { body: module.exports(a) } }`
      }
    ];
  }
}

module.exports = JSTAsset;
