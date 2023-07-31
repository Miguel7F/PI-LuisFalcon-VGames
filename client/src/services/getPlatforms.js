function getPlatforms(games) {
    const platformNameSet = new Set();
    const onlyPlatforms = [];

    games.forEach(({ platformsName }) => onlyPlatforms.push(...platformsName))

    onlyPlatforms.forEach(platform=> platformNameSet.add(platform));

    //dándole formato para la renderización 
    return [...platformNameSet]
        .sort((a, b) => a.localeCompare(b))
        .map((element, i) => {
            return { id: i, name: element }
        })
}

export default getPlatforms