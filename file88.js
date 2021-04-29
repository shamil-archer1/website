async function saveFile(fileHandle) {
  if (!fileHandle) {
    fileHandle = await window.showSaveFilePicker();
  }
  const writable = await fileHandle.createWritable();
  await writable.write(contents);
  await writable.close();
}