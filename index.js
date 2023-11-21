import chalk from 'chalk';

const names = ['Kim', 'Soumia', 'Youssef', 'Hugo'];
const colors = [chalk.red, chalk.green, chalk.blue, chalk.yellow];

for (let i = 0; i < names.length; i++) {
    const coloredName = colors[i](names[i]);
    console.log(coloredName);
}