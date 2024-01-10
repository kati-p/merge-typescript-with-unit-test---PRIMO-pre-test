function merge(c1, c2) {
    // initial var
    var result = [];
    var i1 = 0;
    var i2 = 0;
    // compare c1 and c2 
    while (i1 < c1.length && i2 < c2.length) {
        if (c1[i1] < c2[i2]) {
            result.push(c1[i1]);
            i1++;
        }
        else {
            result.push(c2[i2]);
            i2++;
        }
    }
    // remaining of c1 
    while (i1 < c1.length) {
        result.push(c1[i1]);
        i1++;
    }
    // remaining of c2
    while (i2 < c2.length) {
        result.push(c2[i2]);
        i2++;
    }
    return result;
}
module.exports = merge;
