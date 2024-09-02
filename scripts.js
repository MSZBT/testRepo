function updateFile() {
    console.log('gur')
    const token = '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';
    const owner = 'MSZBT';
    const repo = 'testRepo';
    const path = '/state.txt'; // Путь до файла в репозитории
    const message = 'Update state.txt via API'; // Коммит-сообщение
    const content = btoa('New content'); // Новое содержимое файла, закодированное в base64

    fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
        method: 'PUT',
        headers: {
            'Authorization': `token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: message,
            content: content,
            sha: '' // SHA текущей версии файла, нужен для обновления (можно получить предварительно через API)
        })
    })
    .then(response => response.json())
    .then(data => console.log('File updated successfully:', data))
    .catch(error => console.error('Error updating file:', error));
}
