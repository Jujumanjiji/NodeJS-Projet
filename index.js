//spawn("ls *");

const path = require('path');
const fs = require('fs');
const spawnCommand = require('spawn-command');
const inquirer= require('inquirer')
const Table = require('cli-table');
const program = require('commander')

program.version('1.0.0')
.option('-s, --AnnoyingFile', 'Start the scan')

program.parse(process.argv)

if(program.AnnoyingFile)
{
	inquirer.prompt([
	{
		type: 'list',
		name: 'choices',
		message: 'What do you want to do today ?',
		choices: [
		'Scan the complete system (using tree)',
		'Scan one folder',
		]
	}])
	.then((answers)=>{
		console.log(answers)
	});
}


/*
  {
    type: 'rawlist',
    name: 'beverage',
    message: 'You also get a free 2L beverage',
    choices: ['Pepsi', '7up', 'Coke']
  },
  */

/*inquirer.prompt([
{
	type:'input',
	message:'Entrez votre nom d\'utilisateur',
	name:'username'
},
{
	type:'password',
	message:'Entrez votre mot de passe',
	name:'password'
},
{
	type:'checkbox',
	message:'Que voulez-vous sauvegarder ?',
	name:'foldersToSave',
	choices: [
	'Mes Documents',
	'Mon bureau',
	'Ma musique',
	]
}
]).then((answers)=>{
	console.log(answers)
	})
*/


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