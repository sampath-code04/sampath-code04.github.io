// Blog Page Search Filter
document.getElementById('search-input').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let ctfFolders = document.querySelectorAll('.ctf-folder');

    ctfFolders.forEach(function(folder) {
        let folderName = folder.querySelector('h3').textContent.toLowerCase();
        let challengeItems = folder.querySelectorAll('.challenge-list li');

        let folderVisible = false;

        challengeItems.forEach(function(item) {
            let title = item.textContent.toLowerCase();
            if (title.includes(filter) || folderName.includes(filter)) {
                item.style.display = '';
                folderVisible = true;
            } else {
                item.style.display = 'none';
            }
        });

        folder.style.display = folderVisible ? '' : 'none';
    });
});
