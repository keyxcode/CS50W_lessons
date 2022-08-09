document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('#submit');
    const taskBox = document.querySelector('#task');

    // By default, disable the submit button
    submitButton.disabled = true;

    // Once the user starts typing in the task, enable the submit button
    taskBox.onkeyup = () => {
        // Make sure the task length is > 0
        if (taskBox.value.length > 0) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    // After the user submits a task
    document.querySelector('form').onsubmit = () => {
        // Create and append the task to the ul
        const task = document.createElement('li');
        task.innerHTML = taskBox.value;
        document.querySelector('#tasks').appendChild(task);

        // Clear the input box
        taskBox.value = "";

        // Disable the submit button again
        submitButton.disabled = true;

        // Stop form from submitting. Do everything client side
        return false;
    }
})