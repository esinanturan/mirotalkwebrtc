'use strict';

function popupMessage(type, message, timer = 3000) {
    switch (type) {
        case 'info':
        case 'success':
        case 'warning':
        case 'error':
            Swal.fire({
                allowOutsideClick: false,
                allowEscapeKey: false,
                position: 'center',
                icon: type,
                title: type,
                html: message,
                showClass: { popup: 'animate__animated animate__fadeInDown' },
                hideClass: { popup: 'animate__animated animate__fadeOutUp' },
            });
            break;
        case 'copyRoom':
            Swal.fire({
                allowOutsideClick: false,
                allowEscapeKey: false,
                position: 'center',
                title: 'Copy Room',
                html: message,
                confirmButtonText: `Copy Room URL`,
                showClass: { popup: 'animate__animated animate__fadeInDown' },
                hideClass: { popup: 'animate__animated animate__fadeOutUp' },
            });
            break;
        case 'toast':
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                icon: 'info',
                showConfirmButton: false,
                timer: timer,
                timerProgressBar: true,
            });
            Toast.fire({
                icon: 'info',
                title: message,
                showClass: { popup: 'animate__animated animate__fadeInDown' },
                hideClass: { popup: 'animate__animated animate__fadeOutUp' },
            });
            break;
        default:
            alert(message);
    }
}
