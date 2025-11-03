import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

serve((_req) => {
  return new Response(
    `<!DOCTYPE html>
<html>
<head>
    <title>Telegram Clone</title>
    <style>
        body { 
            font-family: Arial; 
            margin: 0; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
        .container {
            background: rgba(255,255,255,0.9);
            padding: 2rem;
            border-radius: 1rem;
            color: black;
            max-width: 500px;
        }
        input, button {
            width: 100%;
            padding: 0.75rem;
            margin: 0.5rem 0;
            border: 1px solid #ccc;
            border-radius: 0.5rem;
        }
        button {
            background: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Telegram Clone 🚀</h1>
        <p>Messenger is working!</p>
        <input type="text" placeholder="Type message...">
        <button>Send</button>
    </div>
</body>
</html>`,
    { headers: { "content-type": "text/html" } }
  );
});