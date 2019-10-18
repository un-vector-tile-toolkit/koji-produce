module.exports = (f) => {
  let zoom = parseInt(f.properties['S_AREA']) ? 11 : 10
  let properties = {}
  for (let key of Object.keys(f.properties)) {
    if (['AREA', 'JINKO', 'KEY_CODE', 'MOJI', 'SETAI'].includes(key)) {
      properties[key.toLowerCase()] = key === 'KEY_CODE' ?
        parseInt(f.properties[key]) : f.properties[key]
    }
  }
  f.properties = properties
  f.tippecanoe = {
    layer: 'admin',
    minzoom: zoom,
    maxzoom: zoom 
  }
  return f
}

