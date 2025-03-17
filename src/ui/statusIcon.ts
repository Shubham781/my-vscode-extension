import * as vscode from 'vscode';

export function createStatusBarItem(): vscode.StatusBarItem {
  const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  statusBarItem.text = '$(beaker) Analyze Project';
  statusBarItem.command = 'extension.analyzeProject';
  statusBarItem.show();
  return statusBarItem;
}