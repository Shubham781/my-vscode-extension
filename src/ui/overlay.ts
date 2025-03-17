import * as vscode from 'vscode';

export function showOverlay(context: vscode.ExtensionContext, analysisResults: any) {
  const panel = vscode.window.createWebviewPanel(
    'analysisOverlay',
    'Analysis Results',
    vscode.ViewColumn.One,
    {
      enableScripts: true,
      retainContextWhenHidden: true
    }
  );

  panel.webview.html = getOverlayContent(analysisResults);
}

function getOverlayContent(analysisResults: any): string {
  const resultsHtml = analysisResults.map((result: any) => `
    <div class="result">
      <h3>${result.title}</h3>
      <p>${result.description}</p>
    </div>
  `).join('');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .result { margin-bottom: 20px; }
        h3 { color: #007acc; }
      </style>
    </head>
    <body>
      <h1>Analysis Results</h1>
      ${resultsHtml}
    </body>
    </html>
  `;
}