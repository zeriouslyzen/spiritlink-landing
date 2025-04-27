import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt, model = "deepseek-r1" } = req.body;

  try {
    const ollamaRes = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        prompt,
        stream: true,
      }),
    });

    if (!ollamaRes.ok || !ollamaRes.body) {
      throw new Error("Ollama error");
    }

    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
      "Cache-Control": "no-cache",
    });

    const reader = ollamaRes.body.getReader();
    const decoder = new TextDecoder();
    let done = false;
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      if (value) {
        res.write(decoder.decode(value));
      }
      done = doneReading;
    }
    res.end();
  } catch (error) {
    return res.status(500).json({ error: "Failed to connect to Ollama" });
  }
} 