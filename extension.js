const vscode = require('vscode');
const colors = [
	// 红色
	'red',
	// 绿色
	'green',
	// 橘色
	'orange',
	// 蓝色
	'blue',
	// 紫色
	'purple',
	// 咖啡色
	'brown',
	// 红褐色, 赭石色
	'chocolate',
	// 驼色
	'camel',
	// 琥珀色
	'amber',
	// 杨李色
	'plum',
	// 宝蓝色
	'royalblue',
	// 黄绿色
	'yellowgreen',
	// 番茄色
	'tomato',
	// 海绿色
	'seagreen'
	
]
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('extension.randomColor', function () {
		let color = colors[[Math.floor(Math.random() * colors.length)]];
		setColor(vscode.window.activeTextEditor, color);
	});
	context.subscriptions.push(disposable);

	context.subscriptions.push(vscode.commands.registerCommand('extension.md-color-red', function () {
		setColor(vscode.window.activeTextEditor, 'red');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('extension.md-color-green', function () {
		setColor(vscode.window.activeTextEditor, 'green');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('extension.md-color-orange', function () {
		setColor(vscode.window.activeTextEditor, 'orange');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('extension.md-color-blue', function () {
		setColor(vscode.window.activeTextEditor, 'blue');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('extension.md-color-purple', function () {
		setColor(vscode.window.activeTextEditor, 'purple');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('extension.md-color-brown', function () {
		setColor(vscode.window.activeTextEditor, 'brown');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('extension.md-color-chocolate', function () {
		setColor(vscode.window.activeTextEditor, 'chocolate');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('extension.md-color-camel', function () {
		setColor(vscode.window.activeTextEditor, 'camel');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('extension.md-color-amber', function () {
		setColor(vscode.window.activeTextEditor, 'amber');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('extension.md-color-plum', function () {
		setColor(vscode.window.activeTextEditor, 'plum');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('extension.md-color-royalblue', function () {
		setColor(vscode.window.activeTextEditor, 'royalblue');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('extension.md-color-yellowgreen', function () {
		setColor(vscode.window.activeTextEditor, 'yellowgreen');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('extension.md-color-tomato', function () {
		setColor(vscode.window.activeTextEditor, 'tomato');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('extension.md-color-seagreen', function () {
		setColor(vscode.window.activeTextEditor, 'seagreen');
	}));

	context.subscriptions.push(vscode.commands.registerCommand('extension.vuepress-tip', function () {
		setTip(vscode.window.activeTextEditor, 'tip');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('extension.vuepress-warning', function () {
		setTip(vscode.window.activeTextEditor, 'warning');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('extension.vuepress-danger', function () {
		setTip(vscode.window.activeTextEditor, 'danger');
	}));
}

function setColor(editor, color) {
	let document = editor.document;
	let selection = editor.selection;
	let text = document.getText(selection);
	let result = '<font color=' + color + '>' + text + '</font>';
	editor.edit(editBuilder => {
		editBuilder.replace(selection, result);
	})
}

function setTip(editor, tip) {
	let document = editor.document;
	let selection = editor.selection;
	let text = document.getText(selection);
	let result = ':::' + tip + '\n' + text + '\n:::';
	editor.edit(editBuilder => {
		editBuilder.replace(selection, result);
	})
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
