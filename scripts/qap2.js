/**
 * Programming With JavaScript - QAP2
 *
 *
 * Please update the following with your information:
 *
 *      Name: <Alexander_Francis_Singleton>
 *      Date: <SUBMISSION_DATE>
 */

//  reverse string function
function reverse(str) {
  var str = str.replace(/[\(\)]/g, "");
  var tmpLst = [];
  var inLst = str.split("^");
  for (let i = 0; i < inLst.length; i++) {
    tmpLst.unshift(`(${inLst[i]})`);
  }
  return tmpLst;
}

// clean up string function
function rmvDoubleSpace(value) {
  return value.replace(/\s\s+/gm, " ");
}

function cleanBrackets(value) {
  let tmp = value.replace(/\s*?\(\s*/gm, " (");
  tmp = tmp.replace(/\s*\)\s*?/gm, ") ");
  return tmp;
}

function cleanUp(value) {
  value = myTrimFunction(cleanBrackets(rmvDoubleSpace(value)));
  return value;
}

// remove end whitespace.
function myTrimFunction(str) {
  var tmp = str.split("");
  let end = tmp[tmp.length - 1];
  let start = tmp[0];
  while (end === " ") {
    tmp.pop();
    end = tmp[tmp.length - 1];
  }
  while (start === " ") {
    tmp.shift();
    start = tmp[0];
  }
  return tmp.join("");
}

/*******************************************************************************
 * Problem 1: replace all internal whitespace in a string value with underscore
 * ('_'), and makes it lowercase.
 *
 * We want to be able to convert a string to Lower Snake Case style, so that all
 * leading/trailing whitespace is removed, and any internal spaces, tabs, or dots,
 * are converted to '_' and all letters are lower cased.
 *
 * The snake() function should work like this:
 *
 * snake('abc') --> returns 'abc'
 * snake(' ABC ') --> returns 'abc'
 * snake('ABC') --> returns 'abc'
 * snake('A BC') --> returns 'a_bc'
 * snake(' A bC  ') --> returns 'a-bc'
 * snake('A   BC') --> returns 'a_bc'
 * snake('A.BC') --> returns 'a_bc'
 * snake(' A..  B   C ') --> returns 'a_b_c'
 *
 ******************************************************************************/

function snake(value) {
  return value.toLowerCase().replace(/[\s\.]/g, "_");
}

console.log("1.0");
console.log(snake("Is this thing working"));

/*******************************************************************************
 * Problem 2: create an HTML <video> element for the given url.
 *
 * In HTML, we use markup syntax to indicate how browsers should format elements
 * of a web page.  For example, here is a URL to video:
 *
 * http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4
//  * this video was absolutely awesome 
 *
 * Try navigating to it in your browser.  In order for a web page to know how to
 * interpret this URL (e.g., should we show the text of the URL itself, or use
 * it to load an image? or a video?), we have to use special markup. The <video>
 * tag is how we specify that a URL is to be interpreted as a video, see:
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
 *
 * Here is how we might use HTML to markup this video:
 *
 * <video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>
 *
 * Our <video> has two attributes:
 *
 * - src: the URL to a video file
 * - width: the width to use (in pixels) when showing the video
 *
 * Write the createVideo() function to accept a URL and width, and return the
 * properly formatted video element.  For example:
 *
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500)
 *
 * should return the following string of HTML:
 *
 * '<video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>'
 *
 * A <video> can also optionally contain a `controls` attribute, which turns on the play/pause/etc controls. For example:
 *
 * <video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500" controls></video>
 *
 * In this case, the <video> element should include the user controls.  Therefore,
 * your createVideo() function should also accept a third argument, controls:
 *
 * // No controls
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500)
 * // With controls
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500, true)
 *
 * The returned <video> HTML string should be formatted as follows:
 *
 * - Remove leading/trailing whitespace from src before you use them
 * - The src and width attribute values should be wrapped in double-quotes (e.g., src="..." width="...")
 * - There should be a single space between the end of one attribute and start of the next (e.g., src="..." width="..." controls)
 * - The width attribute should only be added if a valid integer value (number or string) is included.  Otherwise ignore it.
 *
 * ******************************************************************************/

// create video element
function createVideo(...values) {
  var inputs = values;
  if (inputs.length > 0) {
    if (/\d+/.test(values[1]) & (pureBool(values[2]) === true)) {
      return `<video src="${values[0]}" width="${values[1]}" controls></video>`;
    }
    if (values[1] === true) {
      return `<video src="${values[0]}" controls></video>`;
    }
    if (/\d+/.test(values[1])) {
      return `<video src="${values[0]}" width="${values[1]}"></video>`;
    }
  }
  return `<video src="${values[0]}"></video>`;
}

console.log("2.0");
console.log(
  createVideo(
    "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4",
    650,
    "oui"
  )
);
/*******************************************************************************
 * Problem 3: extract Date from date string
 *
 * A date string is expected to be formatted as follows:
 *
 * YYYY-MM-DD
 *
 * Meaning, Year (4 digits), Month (2 digits), Day (2 digits).
 *
 * January 1, 2021 would therefore be the following date string:
 *
 * 2021-01-01
 *
 * Similarly, September 29, 2021 would be:
 *
 * 2021-09-29
 *
 * Write a function, parseDateString() that accepts a date string of the format
 * specified above, and returns a JavaScript Date object, set to the correct day.
 * In your solution, you are encouraged to use the following Date methods:
 *
 * - setFullYear()
 * - setMonth()
 * - setDate()
 *
 * To help developers using your function, you are asked to provide detailed error
 * messages when the date string is formatted incorrectly.  We will use the `throw`
 * statement to throw an Error object when a particular value is not what we expect, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
 *
 * For example: parseDateString('01-01-01') should fail, because the year is
 * not 4 digits.
 *
 * Similarly, parseDateString('2021-1-01') should fail because
 * the day is not 2 digits, and parseDateString('2021-01-1') should fail because
 * the month is not 2 digits.
 *
 * Also, a totally invalid date string should also
 * cause an exception to be thrown, for example parseDateString(null) or
 * parseDateString("this is totally wrong").
 *
 ******************************************************************************/
function dateError(lst) {
  var errors = ["Invalid year.", "Invalid Month.", "Invalid Day."];
  var regExp = [/\d\d\d\d/, /\d\d/, /\d\d/];
  try {
    for (let i = 0; i < lst.length; i++) {
      if (regExp[i].test(lst[i])) {
        continue;
      } else {
        throw new Error(errors[i]);
      }
    }
  } catch (e) {
    console.log(e);
  }
}

function valiDATE(value) {
  let tmp = value.split(/[\s-\/]/g);
  return tmp.length === 3
    ? dateError(tmp)
    : "Invalid input. must be in format 'YYYY-MM-DD'";
}

function parseDateString(value) {
  var regExpDate = /\d\d\d\d[\s-\/]\d\d[\s-\/]\d\d/;
  return regExpDate.test(value) ? new Date(value) : valiDATE(value);
}

console.log("3.0");
console.log(parseDateString("2020-05-24"));

/*******************************************************************************
 * Problem 4: convert Date to date string with specified format.
 *
 * As above, a date string is expected to be formatted as follows:
 *
 * YYYY-MM-DD
 *
 * Meaning, Year (4 digits), Month (2 digits), Day (2 digits).
 *
 * Write a function, toDateString() that accepts a Date object, and returns a
 * date string formatted according to the specification above. Make sure your
 * day and month values are padded with a leading '0' if necessary (e.g., 03 vs. 3).
 *
 * In your solution, you are encouraged to use the following Date methods:
 *
 * - setFullYear()
 * - setMonth()
 * - setDate()
 *
 * NOTE: it should be possible to use parseDateString() from the previous question
 * and toDateString() to reverse each other. For example:
 *
 * toDateString(parseDateString('2021-01-29)) should return '2021-01-29'
 *
 * If an invalid Date is passed, throw an Error object with an appropriate error message.
 * HINT: use try/catch, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 *
 ******************************************************************************/

function toDateString(value) {
  var date = parseDateString(value);
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate() + 1;
  if (day < 10) {
    let tmp = `0${day}`;
    day = tmp;
  }
  if (month < 10) {
    let tmp = `0${month}`;
    month = tmp;
  }
  return `${year}-${month}-${day}`;
}

console.log("4.0");
console.log(toDateString("2024-06-24"));

/*******************************************************************************
 * Problem 5: parse a geographic coordinate
 *
 * Coordinates are defined as numeric, decimal values of Longitude and Latitude.
 * A example, let's suppose the Keyin College St.John's campus is located at:
 *
 * Longitude: -77.4369 (negative number means West)
 * Latitude: 42.9755 (positive number means North)
 *
 * A dataset includes thousands of geographic coordinates, stored as strings.
 * However, over the years, different authors have used slightly different formats.
 * All of the following are valid and need to be parsed:
 *
 * 1. "42.9755,-77.4369" NOTE: no space
 * 4. "[-77.4369, 42.9755]" NOTE: the space, as well as lat/lng values are reversed
 *
 * Valid Longitude values are decimal numbers between -180 and 180.
 *
 * Valid Latitude values are decimal numbers between -90 and 90.
 *
 * Parse the value and reformat it into the form: "(lat, lng)"
 *
 ******************************************************************************/

function validateCoord(coords) {
  let coord = coords.split(",");
  var lat = coord[0];
  var lng = coord[1];
  try {
    if ((parseFloat(lat) > 90) | (parseFloat(lat) < -90)) {
      throw Error("Latitude is out of range.");
    } else {
      if ((parseFloat(lng) > 180) | (parseFloat(lng) < -180)) {
        throw Error("Longitude is out of range.");
      } else {
        return `(${lat},${lng})`;
      }
    }
  } catch (e) {
    console.log(e);
  }
}

function modedCoord(coords) {
  var coord = coords.replace(/[\[\]]/g, "");
  let lst = coord.split(",");
  return `${lst[1]},${lst[0]}`;
}

function adjustCoords(coords) {
  var ctrl = coords.split("");
  let lst = coords.split(",");
  return ctrl[0] === "[" ? modedCoord(coords) : `${lst[0]},${lst[1]}`;
}

function normalizeCoord(value) {
  var str = myTrimFunction(value);
  var regExp = /\[?(-?\d+.\d*)\s*,\s*(-?\d+.\d*)\]?/;
  return regExp.test(str) ? adjustCoords(str) : console.error("Invalid coords");
}

// call this function to ACTUALLY HANDLE coordinates.
function handleCoordinates(str) {
  return validateCoord(normalizeCoord(str));
}

console.log("5.0");
console.log(handleCoordinates("[-123.50,23.45]                   "));
console.log(handleCoordinates("                     -63.50,111.45"));

/*******************************************************************************
 * Problem 6: format any number of coordinates as a list in a string
 *
 * You are asked to format geographic lat, lng coordinates in a list using your
 * normalizeCoord() function from problem 5.
 *
 * Where normalizeCoord() takes a single geographic coord, the formatCoords()
 * function takes a list of any number of geographic coordinates, parses them,
 * filters out any invalid coords, and creates a list.
 *
 * For example: given the following coords, "42.9755,-77.4369" and "[-62.1234, 42.9755]",
 * a new list would be created of the following form "((42.9755, -77.4369), (42.9755, -62.1234))".
 *
 * Notice how the list has been enclosed in an extra set of (...) braces, and each
 * formatted geographic coordinate is separated by a comma and space.
 *
 * The formatCoords() function can take any number of arguments, but they must all
 * be strings.  If any of the values can't be parsed by normalizeCoord() (i.e., if
 * an Error is thrown), skip the value.  For example:
 *
 * formatCoords("42.9755,-77.4369", "[-62.1234, 42.9755]", "300,-9000") should return
 * "((42.9755, -77.4369), (42.9755, -62.1234))" and skip the invalid coordinate.
 *

 ******************************************************************************/

function formatCoords(...values) {
  let tmpLst = [];
  for (var i = 0; i < values.length; i++) {
    tmpLst.unshift(handleCoordinates(values[i]));
  }
  lstStr = reverse(tmpLst.join("^").replace(/\^\^+/g, "^"));
  return lstStr;
}
console.log("6.0");
console.log(
  formatCoords(
    "22.45,-130.60",
    "[22.45,-130.60]",
    "90.0,180.0",
    "84.0,-240.00",
    "222,234",
    "45,45",
    "[45,45]",
    "[90.0,180.0]"
  )
);

/*******************************************************************************
 * Problem 7: determine MIME type from filename extension
 *
 * Web browsers and servers exchange streams of bytes, which must be interpreted
 * by the receiver based on their type.  For example, an HTML web page is
 * plain text, while a JPG image is a binary sequence.
 *
 * The Content-Type header contains information about a resource's MIME type, see:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
 *
 * The MIME type is made-up of a `type` and a `subtype` separated by a `/` character.
 * The type is general, for example, 'text' or 'video'.  The subtype is more
 * specific, indicating the specific type of text, image, video, etc.  See:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 *
 * A number of common types are used in web development:
 *
 * mimeFromFilename('/User/Documents/readme.txt') --> returns 'text/plain'
 *
 * Your mimeFromFilename() function should support all of the following extensions
 * with and without the leading '.':
 *
 * - .html, .htm --> text/html
 * - .css --> text/css
 * - .js --> text/javascript
 * - .jpg, .jpeg --> image/jpeg
 * - .gif --> image/gif
 * - .bmp --> image/bmp
 * - .ico, .cur --> image/x-icon
 * - .png --> image/png
 * - .svg --> image/svg+xml
 * - .webp --> image/webp
 * - .mp3 --> audio/mp3
 * - .wav --> audio/wav
 * - .mp4 --> video/mp4
 * - .webm --> video/webm
 * - .json --> application/json
 * - .mpeg --> video/mpeg
 * - .csv --> text/csv
 * - .ttf --> font/ttf
 * - .woff --> font/woff
 * - .zip --> application/zip
 * - .avi --> video/x-msvideo
 *
 *
 * NOTE: any other extension should use the `application/octet-stream` MIME type,
 * to indicate that it is an unknown stream of bytes (e.g., binary file). You should
 * also use `application/octet-stream` if the file has no extension.
 *

 ******************************************************************************/

function mimeFromFilename(filename) {
  var text;
  let nameEnd = filename.match(/\.\w*/).pop(0); // use other than split
  switch (nameEnd) {
    case /\.html?/:
      text = "text/html";
      break;
    case ".css":
      text = "text/css";
      break;
    case "js":
      text = "text/javascript";
      break;
    case /\.jpe?g/:
      text = "image/jpeg";
      break;
    case ".gif":
      text = "image/gif";
      break;
    case ".bmp":
      text = "image/bmp";
      break;
    case /\.[ic][cu][or]/:
      text = "image/x-icon";
      break;
    case ".png":
      text = "image/png";
      break;
    case ".svg":
      text = "image/svg+xml";
      break;
    case ".webp":
      text = "image/webp";
      break;
    case ".mp3":
      text = "audio/mp3";
      break;
    case ".wav":
      text = "audio/wav";
      break;
    case ".mp4":
      text = "video/mp4";
      break;
    case ".webm":
      text = "video/webm";
      break;
    case ".json":
      text = "application/json";
      break;
    case ".mpeg":
      text = "video/mpeg";
      break;
    case ".csv":
      text = "text/csv";
      break;
    case ".ttf":
      text = "font/ttf";
      break;
    case ".woff":
      text = "font/woff";
      break;
    case ".zip":
      text = "application/zip";
      break;
    case ".avi":
      text = "video/x-msvideo";
      break;
    case ".txt":
      text = "text/txt";
      break;
    default:
      text = "Unrecognized MIME type.";
  }
  return text;
}

console.log("7.0");
console.log(mimeFromFilename("regex.txt"));

/*******************************************************************************
 * Problem 8, Part 1: generate license text and link from license code.
 *
 * Images, videos, and other resources on the web are governed by copyright.
 * Everything you find on the web is copyright to its creator automatically, and
 * you cannot reuse it unless you are granted a license to do so.
 *
 * Different licenses exist to allow creators to share their work. For example,
 * the Creative Commons licenses are a popular way to allow people to reuse
 * copyright material, see https://creativecommons.org/licenses/.
 *
 * Below is a list of license codes, and the associated license text explaining the code:
 *
 * CC-BY: Creative Commons Attribution License
 * CC-BY-NC: Creative Commons Attribution-NonCommercial License
 * CC-BY-SA: Creative Commons Attribution-ShareAlike License
 * CC-BY-ND: Creative Commons Attribution-NoDerivs License
 * CC-BY-NC-SA: Creative Commons Attribution-NonCommercial-ShareAlike License
 * CC-BY-NC-ND: Creative Commons Attribution-NonCommercial-NoDerivs License
 *
 * NOTE: any other licenseCode should use the URL https://choosealicense.com/no-permission/
 * and the explanation text, "All Rights Reserved"
 *
 * Write a function, generateLicenseLink(), which takes a license code, and returns
 * an HTML link to the appropriate license URL, and including the explanation text.
 *
 * For example:
 *
 * generateLicenseLink('CC-BY-NC') should return the following HTML string:
 *
 * '<a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial License</a>'
 *
 * The URL is generated based on the license code:
 *
 * - remove the `CC-` prefix
 * - convert to lower case
 * - place formatted license code within URL https://creativecommons.org/licenses/[...here]/4.0/
 *
 * Your generateLicenseLink() function should also accept an optional second argument,
 * `targetBlank`.  If `targetBlank` is true, add ` target="_blank"` to your link
 * so that the URL opens in a blank tab/window.
 *
 * You can read more about HTML links at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 *
 ******************************************************************************/

function generateLicenseLink(licenseCode, targetBlank) {
  var code = licenseCode.toLowerCase().replace("cc-", "");
  let url = `https://creativecommons.org/licenses/[${code}]/4.0/`;
  var text = "";
  try {
    switch (code) {
      case "by":
        text = "Common Attribution License";
        break;
      case "by-nc":
        text = "Creatice Commons Attribution-Noncommercial License";
        break;
      case "by-sa":
        text = "Creative Commons Attribution-ShareAlike License";
        break;
      case "by-nd":
        text = "Creative Commons Attribution-NoDerivs License";
        break;
      case "by-nc-sa":
        text = "Creative Commons Attribution-NonCommercial-ShareAlike License";
        break;
      case "by-nc-nd":
        text = "Creative Commons Attribution-NonCommercial-NoDerivs License";
        break;
      default:
        text = "invalid link";
        throw new Error("Invalid License.");
    }
  } catch (e) {
    console.log(e);
  }

  return targetBlank
    ? `<a href="${url}" target="_blank">${text}</a>`
    : `<a href="${url}">${text}</a>`;
}

console.log("8.0");
console.log(generateLicenseLink("CC-BY-NC-nd", true));
/*******************************************************************************
 * Problem 9 Part 1: convert a value to a Boolean (true or false)
 *
 * A dataset contains fields that indicate a value is true or false.  However,
 * users have entered data in various formats and languages (English and French)
 * over the years, and the data is a mess. For example, the dataset contains all
 * of the following values:
 *
 * Yes, yes, YES, Y, Oui, oui, OUI, O, t, TRUE, true, True, vrai, V, VRAI, 1, 2, ...any positive number
 * No, no, NO, Non, non, NON, N, n, f, FALSE, false, False, FAUX, faux, Faux, 0, -1, -2, ...any negative number
 *
 * Write a function pureBool() which takes a String, Number, or Boolean,
 * and attempts to convert it into a pure Boolean value, according to these rules:
 *
 * 1. If the value is already a Boolean (true or false) return the value without conversion
 * 2. If the value is one of the "true" type values, return `true` (Boolean)
 * 3. If the value is one of the "false" type values, return `false` (Boolean)
 * 4. If the value is none of the "true" or "false" values, throw an error with the error
 * message, 'invalid value'.
 *
 ******************************************************************************/

// rework.
function falseBool(value) {
  var regExFalse =
    /([fF][aA]?[lL]?[sS]?[eE]?)|([nN][oO]?[nN]?)|([nN][oO]?)|([fF][aA]?[uU]?[xX]?)|(\-\d)/;
  return regExFalse.test(value) ? false : "Invalid";
}

function numBool(value) {
  var regExpNum = /\d/;
  var regExpNegative = /\-\d/;
  if (regExpNum.test(value)) {
    return regExpNegative.test(value) ? false : true;
  } else {
    return value;
  }
}

function pureBool(value) {
  var regExTrue =
    /([tT][rR]?[uU]?[eE]?)|([yY][eE]?[sS]?)|([oO][uU][iI]?)|([vV][rR][aA]?[iI]?)|(\d)/;
  return regExTrue.test(numBool(value)) ? true : falseBool(value);
}

console.log("9.1");
console.log(pureBool("no"));

/*******************************************************************************
 * Problem 9 Part 2: checking for all True or all False values in a normalized list
 *
 * Using your pureBool() function above, create three new functions to check
 * if a list of arguments are all "true", partially "true", or all "false" values:
 *
 * every('Y', 'yes', 1) --> returns true
 * any('Y', 'no', 1) --> returns true
 * none('Y', 'invalid', 1) --> returns false
 *
 * Use try/catch syntax to avoid having your functions throw errors when pureBool()
 * throws on invalid data.
 ******************************************************************************/

function every(...values) {
  for (let i = 0; i < values.length; i++) {
    let out = pureBool(values[i]);
    if (out === false) {
      return false;
    }
  }
  return true;
}

function any(...values) {
  for (let i = 0; i < values.length; i++) {
    let out = pureBool(values[i]);
    if (out) {
      return true;
    }
  }
  return false;
}

function none(...values) {
  for (let i = 0; i < values.length; i++) {
    let out = pureBool(values[i]);
    if (out) {
      return false;
    }
  }
  return true;
}

console.log("9.2");
console.log(every("Y", "yes", 1));
console.log(any("Y", "no", -1));
console.log(none("Y", "invalid", 1));

/*******************************************************************************
 * Problem 10 - build a URL
 *
 * Querying the iNaturalist Web API (https://api.inaturalist.org/v2/observations)
 * for data involves formatting a URL in a particular way.  As we know might know, a URL can contain optional name=value pairs. For reference: read query strings on web :)
 *
 * For example:
 *
 *   https://www.store.com/search?q=dog includes q=dog
 *
 *   https://www.store.com?_encoding=UTF8&node=18521080011 includes
 *   both _encoding=UTF8 and also node=18521080011, separated by &
 *
 * We will write a buildUrl() function to build a URL for the iNaturalist API
 * based on arguments passed by the caller.
 *
 * The buildUrl() function accepts the following arguments:
 *
 * - query: a URI encoded search string, for example "butterfly" or "Horse-chestnut"
 * - order: a string indicating sort order, with possible values of `ascending` or `descending`
 * - count: a number from 1 to 50, indicating how many results to return per page
 * - license: a string indicating which items to return (e.g., which license they use). Possible
 *   values include: none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 *
 * Write an implementation of buildUrl() that accepts arguments for all of the above
 * parameters, validates them (e.g., count must be between 1 and 50, etc), and returns
 * a properly formatted URL.
 *
 * For example:
 *
 * buildUrl('Monarch Butterfly', 'ascending', 25, 'cc-by') would return the following URL:
 *
 * https://api.inaturalist.org/v2/observations?query='Monarch%20Butterfly'&count=25&order=ascending&license=cc-by
 *
 * NOTE: if any of the values passed to buildUrl() are invalid, an Error should be thrown.
 *
 * NOTE: make sure you properly encode the query value, since URLs can't contain
 * spaces or other special characters. HINT: use the encodeURIComponent() function
 * to do this, see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 *
 * The following might be the parameters
 *
 *  "query" the query to use. Must be properly URI encoded
 * "order" the sort order to use, must be one of `ascending` or `descending`
 * "count" the number of results per page, must be 1-50
 * "license" the license to use, must be one of none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 *
 ******************************************************************************/

function detOrder(value) {
  if ((value.toLowerCase() === "asc") | (value === "desc")) {
    return value.toLowerCase();
  } else {
    if (value.toLowerCase() === "ascending") {
      return "asc";
    }
    if (value.toLowerCase() === "descending") {
      return "desc";
    } else {
      throw new Error("Invalid order value");
    }
  }
}

function validCount(value) {
  if ((value > 50) | (value < 1)) {
    throw new Error("Invalid count value; Must lie between 1-50.");
  } else {
    return value;
  }
}

function validLicense(value) {
  var code = value.toLowerCase().replace("cc-", "");
  switch (code) {
    case "by":
      return code;
    case "by-nc":
      return code;
    case "by-sa":
      return code;
    case "by-nd":
      return code;
    case "by-nc-sa":
      return code;
    case "by-nc-nd":
      return code;
    default:
      throw new Error("Invalid License.");
  }
}

function buildUrl(query, order, count, license) {
  var base = "https://api.inaturalist.org/v2/observations?query=''";
  query = cleanUp(query).replace(/\s/, "-");
  try {
    order = detOrder(order);
  } catch (e) {
    console.log(e);
  }
  try {
    count = validCount(count);
  } catch (e) {
    console.log(e);
  }
  try {
    count = validLicense(license);
  } catch (e) {
    console.log(e);
  }
  return encodeURI(
    base +
      `?query='${query}'&count='${count}'&order='${order}'&license=${license}`
  );
}

console.log("10.0");
console.log(buildUrl("Honey Bee", "asc", "10", "cc-by"));
