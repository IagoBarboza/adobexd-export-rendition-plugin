const application = require('application')
const fs = require('uxp').storage.localFileSystem

const exportRendition = async (selection) => {
  if (selection.items.length > 0) {
    const folder = await fs.getFolder()
    const file = await folder.createFile('rendition.png')
    
    let renditionSettings = [
      {
        node: selection.items[0],
        outputFile: file,
        type: application.RenditionType.PNG,
        scale: 2
      }
    ]

    try {
      const results = application.createRenditions(renditionSettings)
      console.log(`PNG rendition has been saved at ${results[0].outputFile.nativePath}`)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = {
  commands: {
    exportRendition
  }
}