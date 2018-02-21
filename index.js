//spawn("ls *");

const path = require('path');
const fs = require('fs');
const spawnCommand = require('spawn-command');
const inquirer= require('inquirer')
const Table = require('cli-table');
const program = require('commander')

program.version('1.0.0')
.option('-s, --AnnoyingFile', 'Start scan')

program.parse(process.argv)

if(program.AnnoyingFile)
{
	inquirer.prompt([
	{
		type: 'list',
		name: 'choices',
		message: 'What do you want to do today ?',
		choices: [
		'1 : Scan the complete system (using tree)',
		'2 : Scan one folder',
		]
	}])
	.then((answers)=>{
		console.log(answers)
	});
}
/*function getFileInfoFromFolder(route) {
	const files = fs.readdirSync(route,'utf8');
	const response = [];
	for (let file of files) {
		const extension = path.extname(file);
		const fileSizeInBytes = fs.statSync(file).size;
		response.push({name: file, extension, fileSizeInBytes});
	}
	return response;
}*/