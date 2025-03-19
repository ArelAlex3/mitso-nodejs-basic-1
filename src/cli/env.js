const parseEnv = () => {
    let MITSO_Name1 = "dzmitry";
    let MITSO_Name2 = "KOlya";
    let mahonch = "maks"
    const envVariables = process.env;
        .filter(key => key.startsWith('MITSO_'))
        .reduce((acc, key) => {
            acc[key] = envVariables[key];
            return acc;
        }, {});

    // Формируем строку в требуемом формате
    const result = Object.entries(mitsoVariables)
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');

    // Выводим результат на консоль
    console.log(result);
};

parseEnv();