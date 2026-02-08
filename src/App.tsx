
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Tutorial } from './pages/Tutorial';
// Import global legacy CSS
// Ensure you have configured your bundler to handle CSS or just import if Vite handles it standardly
import './assets/css/normalize-skeleton.css';
import './assets/css/style.css';
import './assets/css/points.css';
import './assets/css/menu.css';
// import './assets/css/font.css'; // If you have font css
// Highlight.js theme
import 'highlight.js/styles/github-dark.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tutorial/:stepId" element={<Tutorial />} />
                <Route path="/tutorial" element={<Tutorial />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
