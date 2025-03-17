import * as vscode from 'vscode';

export function showSidePanel(context: vscode.ExtensionContext, analysisResults: any) {
  const panel = vscode.window.createWebviewPanel(
    'analysisSidePanel',
    'Analysis Results',
    vscode.ViewColumn.Two,
    {
      enableScripts: true,
      retainContextWhenHidden: true
    }
  );

  panel.webview.html = getSidePanelContent(analysisResults);
}

function getSidePanelContent(analysisResults: any): string {
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
        body { font-family: Arial, sans-serif; padding: 10px; }
        .result { margin-bottom: 15px; }
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