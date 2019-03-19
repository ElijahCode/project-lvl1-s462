import readlineSync from 'readline-sync';

export const askName = () => {
	const askUserName = readlineSync.question("May I have your name?");
	console.log('Hi, ' + askUserName +'!');
};
