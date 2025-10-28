// api/download.js
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const { app } = req.query;
  const filePath = path.join("/tmp", `${app || "MyApp"}.apk`);
  fs.writeFileSync(filePath, "DEMO_FAKE_APK_FILE");

  res.setHeader("Content-Type", "application/vnd.android.package-archive");
  res.setHeader("Content-Disposition", `attachment; filename="${app || "MyApp"}.apk"`);
  fs.createReadStream(filePath).pipe(res);
}
