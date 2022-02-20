import base64ToImage from 'base64-to-image'
import { now } from 'lodash'
export const UploadImage = async inputFile => {
  try {
    if (inputFile) {
      const fileName = now().toString()
      const optionalObj = { fileName: fileName, type: 'png' }
      const path = './public/uploads/'
      const imageInfo = base64ToImage(inputFile, path, optionalObj)
      return `/uploads/${imageInfo.fileName}`
    } else {
      console.log('No file')
      return ''
      
    }
  } catch (error) {
    console.log(error)
    return ''
  }
}
