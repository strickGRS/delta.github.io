document.getElementById('saveBtn').addEventListener('click', saveToJson);

function saveToJson() {
    const fullName = document.getElementById('fullName').value.trim();
    const birthDate = document.getElementById('birthDate').value.trim();
    const description = document.getElementById('description').value.trim();

    if (!fullName  !birthDate  !description) {
        alert("Заполните все поля!");
        return;
    }

    const clientData = {
        fullName,
        birthDate,
        description,
        dateAdded: new Date().toLocaleString()
    };

    // Сохраняем в JSON-файл
    const dataStr = JSON.stringify(clientData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = client_${fullName.split(' ')[0]}.json;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Очищаем форму
    document.getElementById('clientForm').reset();
}