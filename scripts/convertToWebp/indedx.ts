import { sync } from "glob"
import { resolve } from "path"
import * as sharp from "sharp"

const OriginDir = "/origin"

const convertToWebp = () => {
  const BaseRoot = resolve(__dirname, "../../")
  const OriginRoot = `${BaseRoot}/${OriginDir}`

  const fileNames = sync(`${OriginRoot}/**/*.{jpg,png,gif}`)
  fileNames.forEach((fileName) => {
    const newPath = fileName.replace("origin", "dist").replace(/.(jpg|gif|png)/, ".webp")
    sharp(fileName).toFile(newPath)
  })
}

convertToWebp()
