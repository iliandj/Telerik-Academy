/*global window, document*/
window.onload = function () {
    var input = document.getElementById('task-input');
    var container = document.getElementById('task-list');

    input.addEventListener('keypress', function (ev) {
        if (ev.keyCode == 13 && this.value.length > 0) {
            var deleteButton = document.createElement('a');
            deleteButton.textContent = 'X';
            deleteButton.className = 'delete-button';
            deleteButton.addEventListener('click', function () {
                var parent = this.parentNode;
                parent.parentNode.removeChild(parent);
                return false;
            });

            var liElement = document.createElement('li');
            var span = document.createElement('span');
            span.innerHTML = this.value;
            liElement.appendChild(span);
            liElement.appendChild(deleteButton);
            liElement.addEventListener('click', function (ev) {
                ev.stopPropagation();
                this.className = 'done';
            });
            container.appendChild(liElement);
            this.value = '';
        }
    });
};