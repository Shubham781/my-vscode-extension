import * as vscode from 'vscode';
import { analyzeProject } from './analysisManager';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.analyzeProject', () => {
    analyzeProject();
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}