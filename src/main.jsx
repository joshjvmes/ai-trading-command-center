import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Buffer } from "buffer";
window.Buffer = Buffer;
window.global = window;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
