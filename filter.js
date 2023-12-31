const assetSections = document.getElementsByClassName('asset-section')
let assets = []

for (let i = 0; i < assetSections.length; i++) {
  assets.push(assetSections[i])
}

let typeSelection = 'all'
let dateSelection = '2024'

const typeRadio = document.getElementsByName('type')
for (let i = 0; i < typeRadio.length; i++) {
  typeRadio[i].onchange = () => { updateFilter(typeRadio[i].value) }
}

const dateRadio = document.getElementsByName('date')
for (let i = 0; i < dateRadio.length; i++) {
  dateRadio[i].onchange = () => { updateFilter(undefined, dateRadio[i].value) }
}

const updateFilter = (type = typeSelection, date = dateSelection) => {
  typeSelection = type
  dateSelection = date
  assets.forEach(asset => {
    if (typeSelection === 'all' || asset.dataset.type === typeSelection) {
      // Check if the asset section has a year specified or if it is of type 'general'
      if (asset.dataset.year === dateSelection || !asset.dataset.year) {
        asset.classList.add('show')
      } else {
        asset.classList.remove('show')
      }
    } else {
      asset.classList.remove('show')
    }
  })
}

updateFilter()
