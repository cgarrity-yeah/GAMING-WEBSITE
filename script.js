// Sample game data
const games = [
    {
        id: 1,
        title: 'Pixel Adventure',
        genre: 'Action',
        emoji: '🎮',
        description: 'Jump through challenging levels in this classic platformer game.'
    },
    {
        id: 2,
        title: 'Puzzle Master',
        genre: 'Puzzle',
        emoji: '🧩',
        description: 'Test your brain with mind-bending puzzles and logical challenges.'
    },
    {
        id: 3,
        title: 'Space Shooter',
        genre: 'Shooter',
        emoji: '🚀',
        description: 'Defend your galaxy from alien invaders in this intense shooter.'
    },
    {
        id: 4,
        title: 'Fantasy Quest',
        genre: 'Adventure',
        emoji: '⚔️',
        description: 'Embark on an epic adventure in a magical world full of mysteries.'
    },
    {
        id: 5,
        title: 'Racing Thunder',
        genre: 'Racing',
        emoji: '🏎️',
        description: 'Race against opponents on tracks around the world.'
    },
    {
        id: 6,
        title: 'Zombie Defense',
        genre: 'Strategy',
        emoji: '🧟',
        description: 'Survive the zombie apocalypse by building defenses and surviving.'
    }
];

// Load games on page load
document.addEventListener('DOMContentLoaded', function() {
    loadGames();
    setupEventListeners();
});

// Function to load and display games
function loadGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = '';
    
    games.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

// Function to create a game card
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
        <div class="game-image">${game.emoji}</div>
        <div class="game-info">
            <h3 class="game-title">${game.title}</h3>
            <p class="game-genre">${game.genre}</p>
            <p class="game-description">${game.description}</p>
            <button class="play-btn" onclick="openGameModal(${game.id})">Learn More</button>
        </div>
    `;
    return card;
}

// Function to open game details in modal
function openGameModal(gameId) {
    const game = games.find(g => g.id === gameId);
    const modal = document.getElementById('gameModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">${game.emoji}</div>
            <h2 style="color: #00d4ff; margin-bottom: 0.5rem;">${game.title}</h2>
            <p style="color: #b0b0b0; margin-bottom: 1.5rem;">${game.genre}</p>
            <p style="color: #d0d0d0; margin-bottom: 2rem; line-height: 1.6;">${game.description}</p>
            <button class="cta-button" onclick="playGame('${game.title}')">Play Now</button>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Function to play game
function playGame(gameName) {
    alert(`Loading ${gameName}...\n\nThis is a demo. Add your actual game functionality here!`);
}

// Function to close modal
function setupEventListeners() {
    const modal = document.getElementById('gameModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
}

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
