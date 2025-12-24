// api/chat.js - Vercel Serverless Function

export default async function handler(req, res) {
  // 1. Nastavení CORS hlaviček, aby mohl tvůj web s touto funkcí komunikovat
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // V produkci můžeš změnit na svou doménu
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // 2. Vyřízení předběžného dotazu (Preflight)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 3. Povolení pouze metody POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metoda není povolena' });
  }

  // 4. Načtení API klíče z proměnných prostředí Vercelu
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API klíč není nastaven v prostředí Vercelu' });
  }

  // 5. Konfigurace požadavku na Google Gemini
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();

    // 6. Vrácení odpovědi od AI zpět do Reactu
    return res.status(response.status).json(data);
  } catch (error) {
    console.error('Chyba API funkce:', error);
    return res.status(500).json({ error: 'Interní chyba při komunikaci s AI' });
  }
}