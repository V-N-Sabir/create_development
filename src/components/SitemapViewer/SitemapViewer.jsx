// src/SitemapViewer.js
import React, { useState, useEffect } from 'react';

function SitemapViewer() {
  const [sitemapData, setSitemapData] = useState('');

  useEffect(() => {
    async function fetchSitemapData() {
      try {
        const response = await fetch('./sitemap.xml');
        const sitemapText = await response.text();
        setSitemapData(sitemapText);
      } catch (error) {
        console.error('Error fetching sitemap:', error);
      }
    }

    fetchSitemapData();
  }, []);

  return (
    <div>
      <h1>Содержимое sitemap.xml</h1>
      <pre>{sitemapData}</pre>
    </div>
  );
}

export default SitemapViewer
