// components/TradingViewChart.tsx
import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const TradingViewChart = () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>TradingView Chart</title>
        <style>
          html, body, #container {
            margin: 0;
            padding: 0;
            height: 100%;
            background-color: #181A20;
          }
        </style>
      </head>
      <body>
        <div id="container"></div>
        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js">
        {
          "autosize": true,
          "symbol": "BINANCE:BTCUSDT",
          "interval": "15",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "backgroundColor": "#181A20",
          "hide_side_toolbar": false,
          "allow_symbol_change": false,
          "support_host": "https://www.tradingview.com"
        }
        </script>
      </body>
    </html>
  `;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default TradingViewChart;
