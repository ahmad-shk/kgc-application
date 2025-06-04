import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

const TradingViewChart = ({
  symbol = 'BINANCE:BTCUSDT',
  interval = '15',
  theme = 'dark',
}) => {
  const iframeSrc = `https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=${symbol}&interval=${interval}&theme=${theme}&style=1&timezone=Etc/UTC&toolbar_bg=%231E1E1E&hide_side_toolbar=false&allow_symbol_change=true&details=true`;

  const tradingViewHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            background-color: #181A20;
          }
          iframe {
            width: 100%;
            height: 100%;
            border: none;
          }
        </style>
      </head>
      <body>
        <iframe src="${iframeSrc}"></iframe>
      </body>
    </html>
  `;

  if (Platform.OS === 'web') {
    return (
      <div style={{ width: '100%', height: '500px' }}>
        <iframe
          src={iframeSrc}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="TradingView Chart"
        />
      </div>
    );
  }

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html: tradingViewHTML }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        style={{ flex: 1, minHeight: 400 ,  backgroundColor: 'red'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TradingViewChart;
