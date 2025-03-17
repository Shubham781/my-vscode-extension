```markdown
# My VS Code Extension

An AI-powered VS Code extension that analyzes your project files for errors and improvements. Ideal for full-stack projects including MERN stack.

## Features

- Switch between AI services (Grok, Deepseek)
- Analyze only user-modified files
- Display results in an overlay or side panel
- Runs in the background (non-blocking)
- Convenient status bar trigger

## Setup

1. Clone the repository:
   git clone https://github.com/yourusername/my-vscode-extension.git  
   cd my-vscode-extension

2. Install dependencies:
   npm install

3. Compile the extension:
   npm run compile

4. Open the project in VS Code:
   code .

5. Run the extension by pressing F5.

## Configuration

Set your preferred options in VS Code settings (settings.json):

```json
{
  "myExtension.aiService": "Grok",
  "myExtension.exclude": ["node_modules", "build", "dist"],
  "myExtension.displayMode": "overlay"
}
```

## Contributing

Fork the repository, create a branch for your feature or bug fix, commit your changes, and open a pull request.

## License

This project is licensed under the MIT License.
```
