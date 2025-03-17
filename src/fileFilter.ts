import * as vscode from 'vscode';

export async function getFilteredFiles(): Promise<vscode.Uri[]> {
  const excludePatterns = vscode.workspace.getConfiguration('myExtension').get<string[]>('exclude') || [];
  const files = await vscode.workspace.findFiles('**/*', `{${excludePatterns.join(',')}}`);
  return files;
}