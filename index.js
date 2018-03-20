#!/usr/bin/env node
//spawn("ls *");

const spawnCommand = require('spawn-command');
const inquirer= require('inquirer')
const Table = require('cli-table');
const program = require('commander');
const utils = require('./utils.js');
const figlet = require('figlet');


console.log(figlet.textSync('AnnoyingFile Hunter !', {
    horizontalLayout: 'default',
    verticalLayout: 'default',
}));

let dirPath = './';
let list = [];

program.version('1.0.1')
.option('-s, --AnnoyingFile', 'start scan')
.option('-r, --recursive', 'recursive')

program.parse(process.argv)

if(program.AnnoyingFile) {
	inquirer.prompt([{
		type: 'list',
		name: 'choices',
		message: 'What do you want to do today ?',
		choices: [
		'Scan the complete system (using tree)',
		'Scan current folder',
		'Scan specific folder',
		]
	}])
	.then((answers)=>{
		console.log(answers)
		if(answers.choices == 'Scan the complete system (using tree)') {
			dirPath = ''
		}
		else if(answers.choices == 'Scan specific folder') {
			inquirer.prompt([{
				type: 'input',
				name: 'dirPath',
				message: 'Chemin du dossier ?\n'}]).then((anwser) => {
					dirPath = anwser.dirPath;
					console.log(dirPath);
			});
		}
		const list = utils.filesInDir(dirPath);
		/*console.log(list);*/
	})
	/*inquirer.prompt([{
		type: 'checkbox',
		name: 'choices',
		message: 'Which one(s) do you want to delete ?',
		choices: [
			Afficher les fichiers les plus lourds à supprimer
		]
	}]).then(answers) => {
		Suppression des fichiers sélectionnés
	}*/
}

else {
	program.help();
}

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