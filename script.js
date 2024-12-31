const snow = document.querySelector('.snow');
for (let i = 0; i < 100; i++) {
    const snowflake = document.createElement('div');
    snowflake.style.position = 'absolute';
    snowflake.style.background = 'white';
    snowflake.style.borderRadius = '50%';
    snowflake.style.width = Math.random() * 10 + 5 + 'px'; // Увеличенный размер
    snowflake.style.height = snowflake.style.width;
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.top = Math.random() * window.innerHeight + 'px';
    snowflake.style.opacity = 1; // Полная непрозрачность
    snowflake.style.animation = fall ${Math.random() * 5 + 5}s linear infinite;
    snowflake.style.zIndex = '9999';
    snowflake.style.pointerEvents = 'none';

    snow.appendChild(snowflake);
}

const style = document.createElement('style');
style.textContent = 
    @keyframes fall {
        0% { transform: translateY(0); }
        100% { transform: translateY(${window.innerHeight}px); }
    }
;
document.head.appendChild(style);
