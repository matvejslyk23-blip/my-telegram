import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

function handler(req: Request): Response {
  const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Telegram Clone</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            margin: 0; 
            padding: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
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
            width: 90%;
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
        <p>Secure messaging on Deno Deploy</p>
        
        <div id="messages"></div>
        
        <input type="text" id="messageInput" placeholder="Type your message...">
        <button onclick="sendMessage()">Send Message</button>
    </div>

    <script>
        function sendMessage() {
            const input = document.getElementById('messageInput');
            const message = input.value.trim();
            if (message) {
                const messagesDiv = document.getElementById('messages');
                messagesDiv.innerHTML += '<p><strong>You:</strong> ' + message + '</p>';
                input.value = '';
            }
        }
    </script>
</body>
</html>
  `;

  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

console.log("Server running!");
serve(handler);