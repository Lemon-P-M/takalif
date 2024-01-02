document.addEventListener('DOMContentLoaded', function () {
    var tasksContainer = document.getElementById('tasks-container');

    // Sample data for subjects
    var subjects = ["دینی", "شیمی", "فیزیک", "ریاضی", "اجتماعی", "حساب", "زیست و زمین", "عربی", "تاریخ", "تفکر", "انس با قرآن", "کاروفناوری", "رایانه", "نگارش", "ادبیات"];

    // Create tasks for each subject
    subjects.forEach(function (subject) {
        createTask(subject);
    });

    function createTask(subject) {
        var task = document.createElement('div');
        task.classList.add('task');
        task.innerHTML = `
            <div>${subject}</div>
            <div>
                <label for="${subject}-deadline">مهلت: </label>
                <input type="date" id="${subject}-deadline">
                <button onclick="submitTask('${subject}')">ثبت وظیفه</button>
            </div>
        `;
        tasksContainer.appendChild(task);
    }
});

function submitTask(subject) {
    var deadline = document.getElementById(`${subject}-deadline`).value;
    alert(`وظیفه برای درس ${subject} با مهلت ${deadline} ثبت شد!`);
}
