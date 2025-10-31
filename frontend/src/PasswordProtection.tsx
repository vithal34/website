import React, { useState, useEffect } from 'react';

const PASSWORD = 'BlueDevils';
const STORAGE_KEY = 'duke_portfolio_authenticated';

export function PasswordProtection({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [checking, setChecking] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Check if already authenticated in this session
    const authenticated = sessionStorage.getItem(STORAGE_KEY) === 'true';
    setIsAuthenticated(authenticated);
    setChecking(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (password === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setIsAuthenticated(true);
      setPassword('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  // Show loading state while checking
  if (checking) {
    return (
      <div className="fixed inset-0 bg-black text-white flex items-center justify-center z-[999999999]">
        <div className="text-center">
          <div className="text-2xl font-mono mb-4">Loading...</div>
        </div>
      </div>
    );
  }

  // Show password prompt if not authenticated
  if (!isAuthenticated) {
    return (
      <div
        className="fixed inset-0 text-white flex items-center justify-center z-[999999999]"
        style={{ backgroundColor: '#012169' }}
      >
        <div className="text-center max-w-md px-8">
          <h1 className="text-4xl font-mono mb-2 mb-8">Vithal Agrawal</h1>
          <h2 className="text-xl font-mono mb-6">Welcome Admissions Team! 
            It's a bit experimental, but so am I.</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 pr-12 bg-white/10 border-2 border-white rounded text-white placeholder-white/50 font-mono focus:outline-none focus:border-white/80"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors font-mono text-sm"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
              {error && (
                <p className="text-red-300 mt-2 text-sm font-mono">{error}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-white rounded font-mono font-bold hover:bg-white/90 transition-colors"
              style={{ color: '#012169' }}
            >
              Enter
            </button>
          </form>
          <p className="mt-6 text-sm font-mono text-white/70">
           Confidential content © 2025 Vithal Agrawal

           P.S. Please forgive me if it's a bit too much.
          </p>
        </div>
      </div>
    );
  }

  // Show site content if authenticated
  return <>{children}</>;
}

