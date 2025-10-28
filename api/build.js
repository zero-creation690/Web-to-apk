// api/build.js
export default async function handler(req, res) {
  const { url, appname } = req.query;

  if (!url) return res.status(400).send("Missing url");

  // Fake build process
  const downloadUrl = `https://${req.headers.host}/api/download?app=${appname || "MyApp"}`;

  res.status(200).json({
    appname: appname || "MyApp",
    target_url: url,
    download: downloadUrl,
  });
}
