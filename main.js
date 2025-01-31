// Get the GIF element
const uiiaiGif = document.getElementById('uiiaiGif');
const videoContainer = document.getElementById('videoContainer');
const resultVideo = document.getElementById('resultVideo');
const rollButton = document.getElementById('rollButton');

// Create background elements
function createBackgroundElements() {
  const container = document.querySelector('.background-elements');
  const numParticles = 50;
  const numSparkles = 50;

  // Create floating particles
  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.setProperty('--moveX', `${(Math.random() - 0.5) * 300}px`);
    particle.style.setProperty('--moveY', `${(Math.random() - 0.5) * 300}px`);
    particle.style.setProperty('--rotation', `${Math.random() * 720 - 360}deg`);
    particle.style.animationDelay = `${Math.random() * 20}s`;
    container.appendChild(particle);
  }

  // Create sparkles
  for (let i = 0; i < numSparkles; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 2}s`;
    container.appendChild(sparkle);
  }
}

// Initialize background elements
createBackgroundElements();

// Create audio element
const rollSound = new Audio('./oia.mp3');

// Setup contract address copy functionality
const contractAddress = document.getElementById('contractAddress');
const copiedMessage = contractAddress.querySelector('.copied-message');

contractAddress.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('Updating...');
    copiedMessage.classList.add('show');
    setTimeout(() => {
      copiedMessage.classList.remove('show');
    }, 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
});

// Create a static version of the GIF (first frame)
let staticGif = null;
const createStaticGif = () => {
  // Create a canvas to capture the first frame
  const canvas = document.createElement('canvas');
  canvas.width = uiiaiGif.width;
  canvas.height = uiiaiGif.height;
  canvas.getContext('2d').drawImage(uiiaiGif, 0, 0);
  
  // Create a new image with the first frame
  staticGif = new Image();
  staticGif.src = canvas.toDataURL();
  
  // Show static GIF after creation
  showStaticGif();
};

// Load the static version once the GIF is loaded
uiiaiGif.addEventListener('load', createStaticGif, { once: true });

// Function to show static GIF
function showStaticGif() {
  if (staticGif) {
    uiiaiGif.src = staticGif.src;
  }
}

// Function to create happy cat GIFs
function createHappyCats() {
  const numberOfCats = 30;
  
  for (let i = 0; i < numberOfCats; i++) {
    const cat = document.createElement('img');
    cat.src = './happy-cat.gif';
    cat.className = 'happy-cat';
    
    // Random position
    cat.style.left = Math.random() * 100 + 'vw';
    cat.style.top = Math.random() * 100 + 'vh';
    
    document.body.appendChild(cat);
    
    // Remove the cat after animation ends
    setTimeout(() => {
      cat.remove();
    }, 4000);
  }
}

// Function to create floating uiiai GIFs
function createFloatingUiiai() {
  const numberOfGifs = 30;
  
  for (let i = 0; i < numberOfGifs; i++) {
    const floatingGif = document.createElement('img');
    floatingGif.src = './oia-uia.gif';
    floatingGif.className = 'floating-uiiai';
    
    // Random position
    floatingGif.style.left = Math.random() * 100 + 'vw';
    floatingGif.style.top = Math.random() * 100 + 'vh';
    
    document.body.appendChild(floatingGif);
    
    // Remove the GIF after animation ends
    setTimeout(() => {
      floatingGif.remove();
    }, 4000);
  }
}

// Function to play result video
function playResultVideo(result) {
  // Set the video source
  resultVideo.src = `./video/${result}.mp4`;
  
  // Play the video when it's loaded
  resultVideo.onloadeddata = () => {
    resultVideo.play().catch(error => {
      console.error('Error playing video:', error);
    });
  };
}

// Event listener for video end
resultVideo.addEventListener('ended', () => {
  resultVideo.src = '';
  showStaticGif();
  rollButton.style.display = 'block';
  // Remove rolling class when video ends
  document.querySelector('.content-wrapper').classList.remove('rolling');
});

// Roll function
function roll() {
  // Hide the button
  rollButton.style.display = 'none';
  
  // Add rolling class for transitions
  document.querySelector('.content-wrapper').classList.add('rolling');

  // Play the roll sound
  rollSound.currentTime = 0;
  rollSound.play().catch(error => {
    console.error('Error playing audio:', error);
  });

  // Clear previous result
  const resultElement = document.getElementById('result');
  resultElement.style.transform = 'scale(0)';
  resultElement.style.animation = 'none';
  resultElement.textContent = '';
  
  // Force GIF reload to restart animation
  const timestamp = new Date().getTime();
  uiiaiGif.src = `./oia-uia.gif?t=${timestamp}`;
  
  // Create happy cats and floating uiiai
  createHappyCats();
  createFloatingUiiai();
  
  // After exactly 4 seconds, display result and play video
  setTimeout(() => {
    const result = Math.floor(Math.random() * 6) + 1;
    resultElement.textContent = `You rolled a ${result}!`;
    resultElement.style.animation = 'resultBounce 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
    playResultVideo(result);
  }, 4000);
}

// Event listener for roll button
document.getElementById('rollButton').addEventListener('click', roll);

// Initial load of the GIF
uiiaiGif.src = 'oia-uia.gif';