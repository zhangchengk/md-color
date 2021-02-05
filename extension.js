const vscode = require('vscode');
const colors = [
	// 红色
	'<font color=red>',
	// 绿色
	'<font color=green>',
	// 蓝色
	'<font color=blue>',
	// 紫色
	'<font color=purple>',
	// 褐色, 茶色
	'<font color=brown>',
	// 红褐色, 赭石色
	'<font color=chocolate>',
	// 驼色
	'<font color=camel>',
	// 琥珀色
	'<font color=amber>',
	// 杨李色
	'<font color=plum>',
	// 宝蓝色
	'<font color=yellowgreen>',
	// 黄绿色
	'<font color=yellowgreen>',
	// 青绿色
	'<font color=turquoise>',
	// 咖啡色
	'<font color=brown>',
	// 海绿色
	'<font color=seagreen>',
	// 春绿色
	'<font color=springgreen>',
	// 番茄色
	'<font color=tomato>',
	// 土黄色
	'<font color=yellowgreen>'
]
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('extension.randomColor', function () {
		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}
		let document = editor.document;
		let selection = editor.selection;
		let text = document.getText(selection);
		let color = colors[[Math.floor(Math.random() * colors.length)]];
		let result = color + text + '</font>';
		editor.edit(editBuilder => {
			editBuilder.replace(selection, result);
		})
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
