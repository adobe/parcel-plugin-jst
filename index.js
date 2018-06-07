module.exports = bundler => {
    // process JST files by .jst extension
    bundler.addAssetType('.jst', require.resolve('./JSTAsset'));
};