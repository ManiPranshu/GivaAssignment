// import React, { useState } from "react";
// import axios from "axios";
// import "./App.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const API_BASE = "http://localhost:5000";

// function App() {
//     const [longUrl, setLongUrl] = useState("");
//     const [shortUrl, setShortUrl] = useState("");
//     const [alias, setAlias] = useState("");

//     const handleShorten = async () => {
//         try {
//             const response = await axios.post(`${API_BASE}/shorten`, { longUrl, alias });
//             setShortUrl(`${window.location.origin}/${response.data.shortCode}`);
//             toast.success("URL shortened successfully!");
//         } catch (err) {
//             toast.error("Failed to shorten URL!");
//         }
//     };

//     return (
//         <div className="container">
//             <ToastContainer />
//             <h1>URL Shortener</h1>
//             <input type="text" placeholder="Enter URL" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} />
//             <input type="text" placeholder="Custom alias (optional)" value={alias} onChange={(e) => setAlias(e.target.value)} />
//             <button onClick={handleShorten}>Shorten</button>
//             {shortUrl && <p>Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>}
//         </div>
//     );
// }

// export default App;


import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_BASE = "http://localhost:5000"; // Backend URL

function App() {
    const [longUrl, setLongUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [alias, setAlias] = useState("");

    const handleShorten = async () => {
        if (!longUrl.trim()) {
            toast.error("Please enter a valid URL!");
            return;
        }

        try {
            const response = await axios.post(`${API_BASE}/shorten`, { longUrl, alias });
            setShortUrl(`${API_BASE}/${response.data.shortCode}`); // ✅ Fixed: Correct URL
            toast.success("URL shortened successfully!");
        } catch (err) {
            toast.error("Failed to shorten URL! Please try again.");
        }
    };

    return (
        <div className="container">
            <ToastContainer />
            <h1>🔗 URL Shortener</h1>
            <input
                type="text"
                placeholder="Enter URL"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
            />
            <input
                type="text"
                placeholder="Custom alias (optional)"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
            />
            <button onClick={handleShorten}>Shorten</button>
            {shortUrl && (
                <p>
                    Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
                </p>
            )}
        </div>
    );
}

export default App;
