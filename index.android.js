var { NativeModules } = require('react-native');
var NativeRNShare = NativeModules.RNShare;

/**
 * High-level docs for the RNShare Android API can be written here.
 */

var RNShare = {
    open: function(options, callback = function() {}) {
        NativeRNShare.open(options, callback);
    }
};

module.exports = RNShare;
