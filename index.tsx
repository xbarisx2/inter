
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './LanguageContext';

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: Error | null}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-4 font-sans">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full text-center border border-gray-100">
              <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Bir şeyler yanlış gitti</h1>
              <p className="text-gray-600 mb-6">Uygulama yüklenirken beklenmedik bir hata oluştu.</p>
              <button 
                onClick={() => window.location.reload()} 
                className="px-6 py-3 bg-brand-blue-900 text-white font-bold rounded hover:bg-brand-blue-800 transition-colors w-full"
              >
                Sayfayı Yenile
              </button>
              {this.state.error && (
                <details className="mt-6 text-left text-xs text-gray-400 bg-gray-50 p-2 rounded overflow-hidden">
                    <summary className="cursor-pointer hover:text-gray-600">Teknik Detaylar</summary>
                    <pre className="mt-2 whitespace-pre-wrap">{this.state.error.toString()}</pre>
                </details>
              )}
          </div>
        </div>
      );
    }

    return this.props.children; 
  }
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("FATAL ERROR: Could not find 'root' element in DOM. React cannot mount.");
} else {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
          <LanguageProvider>
              <App />
          </LanguageProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
}
