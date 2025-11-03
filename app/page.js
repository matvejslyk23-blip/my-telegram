export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Telegram Clone 🚀
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Secure messaging application
      </p>
      <div style={{
        background: 'rgba(255,255,255,0.9)',
        padding: '2rem',
        borderRadius: '1rem',
        color: 'black',
        maxWidth: '500px',
        width: '100%'
      }}>
        <h2>Messenger Interface</h2>
        <p>Enter your message:</p>
        <input 
          type="text" 
          placeholder="Type here..."
          style={{
            width: '100%',
            padding: '0.75rem',
            marginBottom: '1rem',
            border: '1px solid #ccc',
            borderRadius: '0.5rem'
          }}
        />
        <button style={{
          width: '100%',
          padding: '0.75rem',
          background: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer'
        }}>
          Send Message
        </button>
      </div>
    </div>
  );
}