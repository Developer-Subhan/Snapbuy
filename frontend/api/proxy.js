export default async function handler(req, res) {
  const backendUrl = process.env.BACKEND_URL;
  const path = req.url.split('/api')[1]; // Get everything after /api

  try {
    const response = await fetch(`${backendUrl}${path}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: new URL(backendUrl).host,
      },
      body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: "Proxy failed to reach backend" });
  }
}