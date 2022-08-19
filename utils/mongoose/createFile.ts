import File, { FileAttrs } from '../../models/fileModel'

const createFile = async (fileAttrs: FileAttrs) => {
	let file = new File(fileAttrs)

	file = await file.save()
	return file
}

export default createFile
