function openDetailsModal(projectId) {
    var modal = document.getElementById(projectId + 'Modal');
    modal.style.display = 'block';

    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden'; 

    // Center the modal
    centerModal(modal);

    // Add event listener for the "Esc" key
    document.addEventListener('keydown', closeModalOnEsc);
}

function closeDetailsModal(projectId) {
    var modal = document.getElementById(projectId + 'Modal');
    modal.style.display = 'none';
    
     // Allow scrolling when modal is closed
    document.body.style.overflow = '';

    // Remove the event listener for the "Esc" key
    document.removeEventListener('keydown', closeModalOnEsc);
}

// Function to close the modal when the "Esc" key is pressed
function closeModalOnEsc(event) {
    if (event.key === 'Escape') {
        var modals = document.querySelectorAll('.modal');
        modals.forEach(function(modal) {
            if (modal.style.display === 'block') {
                closeDetailsModal(modal.id.replace('Modal', ''));
            }
        });
    }
}

// Function to center the modal
function centerModal(modal) {
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
}

// Call centerModal when the window is resized (optional)
window.addEventListener('resize', function() {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (modal.style.display === 'block') {
            centerModal(modal);
        }
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        modal.style.display = 'none';
    });
}); 
