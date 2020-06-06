var moment = require("moment");

moment().format();
console.log("moment", moment);

var march = moment("2017-03");
console.log("default", march.format("MMMM")); // 'March'

moment.locale("de"); // returns the new locale, in this case 'de'
console.log("still Default", march.format("MMMM")); // 'March' still, since the instance was before the locale was set

var deMarch = moment("2017-03");
console.log("de", deMarch.format("MMMM")); // 'März'

// You can, however, change just the locale of a specific moment
march.locale("es");
console.log("es", march.format("MMMM")); // 'Marzo'

// You can, however, change just the locale of a specific moment
// --- this will work ---
march.locale("ru");
console.log("ru", march.format("MMMM")); // 'Marzo'
