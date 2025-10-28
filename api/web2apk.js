// api/web2apk.js
export default async function handler(req, res) {
  const { url, appname, icon } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Missing ?url parameter" });
  }

  const encodedUrl = encodeURIComponent(url);
  const app = appname || "MyWebApp";

  // Replace this with your builder URL (Koyeb/Render/Replit)
  const builderAPI = `https://your-builder-service.onrender.com/build?url=${encodedUrl}&appname=${app}&icon=${icon || ""}`;

  try {
    const response = await fetch(builderAPI);
    const data = await response.json();

    res.status(200).json({
      success: true,
      message: "Your APK build is being processed",
      build_info: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to contact builder",
      details: error.message,
    });
  }
}
