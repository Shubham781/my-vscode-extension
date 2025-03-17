import * as vscode from 'vscode';
import { getFilteredFiles } from './fileFilter';
import { analyzeWithAI } from './aiService';
import { showOverlay } from './ui/overlay';
import { showSidePanel } from './ui/sidePanel';

export async function analyzeProject() {
  try {
    const files = await getFilteredFiles();
    const analysisResults: any[] = [];

    for (const file of files) {
      const document = await vscode.workspace.openTextDocument(file);
      const code = document.getText();
      const service = vscode.workspace.getConfiguration('myExtension').get<string>('aiService') || 'Grok';

      try {
        const analysis = await analyzeWithAI(service, code);
        analysisResults.push({
          filePath: file.fsPath,
          results: analysis
        });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        vscode.window.showErrorMessage(`Failed to analyze ${file.fsPath}: ${errorMessage}`);
      }
    }

    if (analysisResults.length > 0) {
      const displayMode = vscode.workspace.getConfiguration('myExtension').get<string>('displayMode') || 'overlay';
      if (displayMode === 'overlay') {
        showOverlay(vscode.extensions.getExtension('your.extension.id')!.exports, analysisResults);
      } else {
        showSidePanel(vscode.extensions.getExtension('your.extension.id')!.exports, analysisResults);
      }
    } else {
      vscode.window.showInformationMessage('No issues found in the analyzed files.');
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    vscode.window.showErrorMessage(`Error during project analysis: ${errorMessage}`);
  }
}