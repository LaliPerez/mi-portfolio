
import React from 'react';

// A generic Credly logo for certifications where a specific one isn't available
export const CredlyLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm3.5-6H8.5V9.5h7V11.5z" />
  </svg>
);

export const AWSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.17 15.06c-1.17 1.17-2.92 1.4-4.5.76-1.58-.64-2.88-2.12-3.23-3.8H5v-2h3.21c.1-.5.28-1 .51-1.45L5 10.51V8.5h3.96c.72-1.31 1.98-2.27 3.49-2.5V3.5h2v2.53c1.1.28 2.05.9 2.76 1.71l-1.41 1.41C17.05 10.4 16.08 10 15 10c-1.66 0-3 1.34-3 3s1.34 3 3 3c.75 0 1.42-.28 1.94-.73l1.41 1.41c-.7.7-1.63 1.25-2.68 1.44v2.44h-2v-2.42z" />
  </svg>
);

export const GoogleCloudIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.79 14.21c-1.54 1.54-3.79 2-5.79 1.21-1.99-.79-3.56-2.5-4.14-4.63H5v-2h2.86c.15-.65.41-1.26.75-1.82L5 9.01V7h3.61c.95-1.61 2.45-2.73 4.24-3.1V2.5h2v1.43c1.43.43 2.65 1.29 3.54 2.4l-1.41 1.41c-1.12-1.12-2.68-1.75-4.32-1.75-2.21 0-4 1.79-4 4s1.79 4 4 4c.95 0 1.82-.34 2.51-.91l1.41 1.41c-.88.89-2.05 1.51-3.42 1.69v2.81h-2v-2.79z" />
  </svg>
);

export const KubernetesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.12-5.29L12 12.59l2.12 2.12 1.41-1.41L13.41 11.17l2.12-2.12-1.41-1.41L12 9.76l-2.12-2.12-1.41 1.41L10.59 11.17l-2.12 2.12 1.41 1.41z" />
  </svg>
);

export const IBMIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <rect x="2" y="10" width="20" height="4" />
        <rect x="2" y="15" width="8" height="2" />
        <rect x="14" y="15" width="8" height="2" />
        <rect x="2" y="5" width="20" height="4" />
    </svg>
);
