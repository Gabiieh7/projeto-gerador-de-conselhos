async function conselhoAleatorio() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const contentJson = await response.json();
    document
        .querySelector('.advice-id')
        .innerHTML = `Conselho #${contentJson.slip.id}`;
    document
        .querySelector('.advice-description')
        .innerHTML = `" ${contentJson.slip.advice} "`;
}
conselhoAleatorio()
