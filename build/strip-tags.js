/**
 * 转换成DOM字符串
 */
const cheerio = require('cheerio')

module.exports = (str, tags) => {
    const $ = cheerio.load(str, { decodeEntities: false })
    console.log(1001, $)

    if (!tags || tags.length === 0) {
        return str
    }

    tags = !Array.isArray(tags) ? [tags] : tags
    let len = tags.length

    while (len--) {
        $(tags[len]).remove()
    }

    return $.html()
}