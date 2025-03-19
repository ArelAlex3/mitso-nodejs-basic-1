import { promises as fs } from 'fs';
import path from 'path';

const create = async () => {
    try {
        const filePath = path.join(process.cwd(), './files/newFile.txt'); // Указывает путь к файлу
        const content = 'This is a new file created by the create function!';
        await fs.writeFile(filePath, content, { flag: 'wx' }); // Создание файла
        console.log('File created successfully');
    } catch (err) {
        if (err.code === 'EEXIST') {
            console.error('File already exists');
        } else {
            console.error('An error occurred:', err.message);
        }
    }
};

await create();
