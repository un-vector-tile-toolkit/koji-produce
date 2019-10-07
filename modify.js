module.exports = (f) => {
  let properties = {}
  for (let key of Object.keys(f.properties)) {
    if (['KEY_CODE', 'MOJI'].includes(key)) {
      properties[key.toLowerCase()] = key === 'KEY_CODE' ?
        parseInt(f.properties[key]) : f.properties[key]
    }
  }
  f.properties = properties
  f.tippecanoe = {
    layer: 'admin',
    minzoom: 11,
    maxzoom: 11
  }
  return f
}

