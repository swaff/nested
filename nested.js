var learn  = window.learn || {};

learn.nested = (function () {

    var nested = {};

    nested.get = function extract (needle, haystack) {

        var keyParts,
            key;

        if (_.isObject(haystack) && _.isString(needle)) {

            keyParts = needle.split(".");
            key = keyParts.shift();

            if (_.has(haystack, key)) {

                if (keyParts.length === 0) {
                    return haystack[key]
                }

                return extract(keyParts.join("."), haystack[key]);
            }
        }
    };

    nested.set = function setProperty (key, value, hash) {

        var keyParts,
            currentKey;

        if (_.isObject(hash) && _.isString(key)) {

            // split the key by dot into the parts
            keyParts = key.split(".");

            // extract the first key
            currentKey = keyParts.shift();

            if (keyParts.length === 0) {
                // at the leaf of the dot notated (or not if single) key
                // so set the value
                hash[currentKey] = value;
            } else {
                // recurse passing the remaining key parts, the value
                // to set, and the next object down.
                setProperty(keyParts.join('.'), value, hash[currentKey]);
            }
        }
    };

    return nested;
}());
