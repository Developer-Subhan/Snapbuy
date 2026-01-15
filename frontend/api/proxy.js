export default async function handler(req, res) {
  const backendUrl = process.env.BACKEND_URL;
  const path = req.url.split('/api')[1] || '';

  try {
    const response = await fetch(`${backendUrl}${path}`, {
      method: req.method,
      headers: {
        // Pass original headers (like Cookies) to the backend
        ...req.headers,
        host: new URL(backendUrl).host,
      },
      body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
    });

    // --- THE CRITICAL FIX ---
    // 1. Get the 'Set-Cookie' header from your Backend
    const cookies = response.headers.get('set-cookie');
    
    if (cookies) {
      // 2. Forward that cookie to the user's browser
      res.setHeader('Set-Cookie', cookies);
    }

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: "Proxy failed to reach backend" });
  }
}