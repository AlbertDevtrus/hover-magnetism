const ball = document.querySelector('.ball');
const text = document.querySelector('span');

const animateBall = (e, interacting) => {
    const ballX = e.clientX - ball.offsetHeight / 2;
    const ballY = e.clientY - ball.offsetWidth / 2;

    const textX = e.clientX - text.offsetWidth / 2;
    const textY = e.clientY - text.offsetHeight / 2;

    const keyFrameBall = {
        transform: `translate(${ballX}px, ${ballY}px) ${interacting ? `scale(3)` : ''}`
    }

    const keyFrameText = {
        transform: `translate(${textX}px, ${textY}px) ${interacting ? `scale(3)` : ''}`,
        opacity: `${interacting ? '1' : '0'}`
    }

    document.body.style.cursor = interacting ? 'none' : 'auto'

    ball.animate(keyFrameBall, {
        duration: 800,
        fill: 'forwards'
    })

    text.animate(keyFrameText, {
        duration: 400,
        fill: 'forwards'
    })
}

window.onmousemove = e => {
    const interactable = e.target.closest('.card');

    const interacting = interactable !== null;

    animateBall(e, interacting);
}