
import { Link } from 'react-router-dom';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-6">
            <div className="w-full max-w-6xl">
                {children}
            </div>
        </div>
    );
}