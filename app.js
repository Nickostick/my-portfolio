// SVG Icons (Windows 98 style)
const svgIcons = {
  folder: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12V40H44V16H24L20 12H4Z" fill="#FFC400"/>
    <path d="M4 12H20L24 16H44V40H4V12Z" stroke="#996600" stroke-width="1"/>
    <path d="M4 12V40H44V16H24L20 12H4Z" fill="url(#folderGrad)"/>
    <defs><linearGradient id="folderGrad" x1="24" y1="12" x2="24" y2="40">
      <stop offset="0%" stop-color="#FFE57F"/><stop offset="100%" stop-color="#FFC400"/>
    </linearGradient></defs>
  </svg>`,

  github: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="40" height="40" rx="8" fill="#24292e"/>
    <path d="M24 12C17.4 12 12 17.4 12 24C12 29.3 15.4 33.8 20.2 35.4C20.8 35.5 21 35.1 21 34.8V32.3C17.4 33 16.7 30.5 16.7 30.5C16.2 29.2 15.4 28.8 15.4 28.8C14.3 28 15.5 28 15.5 28C16.7 28.1 17.3 29.3 17.3 29.3C18.4 31.1 20.2 30.6 21 30.3C21.1 29.5 21.4 28.9 21.8 28.6C19 28.3 16 27.1 16 22.5C16 21.3 16.4 20.3 17.3 19.5C17.2 19.2 16.7 18 17.4 16.5C17.4 16.5 18.4 16.2 21 17.7C21.9 17.4 22.9 17.3 24 17.3C25 17.3 26.1 17.4 27 17.7C29.6 16.2 30.6 16.5 30.6 16.5C31.3 18 30.8 19.2 30.7 19.5C31.5 20.3 32 21.3 32 22.5C32 27.1 29 28.3 26.2 28.6C26.7 29 27.1 29.8 27.1 31V34.8C27.1 35.1 27.3 35.5 27.9 35.4C32.6 33.8 36 29.3 36 24C36 17.4 30.6 12 24 12Z" fill="white"/>
  </svg>`,

  linkedin: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="40" height="40" rx="4" fill="#0077B5"/>
    <path d="M14 20H18V34H14V20Z" fill="white"/>
    <path d="M16 18C17.7 18 19 16.7 19 15C19 13.3 17.7 12 16 12C14.3 12 13 13.3 13 15C13 16.7 14.3 18 16 18Z" fill="white"/>
    <path d="M21 20H25V22C25.7 20.8 27.3 19.5 29.8 19.5C34.3 19.5 35 22.3 35 26V34H31V27C31 25 31 23 28.5 23C26 23 25.5 24.8 25.5 26.5V34H21V20Z" fill="white"/>
  </svg>`,

  twitter: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="40" height="40" rx="4" fill="#000000"/>
    <path d="M27.3 14H31.2L23.8 22.5L32.5 34H25.8L20.3 26.6L14 34H10.1L18 24.9L9.7 14H16.6L21.6 20.8L27.3 14ZM26 31.5H28L16.3 16.5H14.1L26 31.5Z" fill="white"/>
  </svg>`,

  myspace: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="40" height="40" rx="4" fill="#003399"/>
    <circle cx="24" cy="18" r="8" fill="white"/>
    <path d="M12 42C12 34 17 28 24 28C31 28 36 34 36 42" fill="white"/>
    <rect x="6" y="6" width="36" height="36" rx="2" stroke="#FF6600" stroke-width="2" fill="none"/>
  </svg>`,

  thoughts: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8H40V40H8V8Z" fill="#FFFDE7"/>
    <path d="M8 8H40V40H8V8Z" stroke="#FBC02D" stroke-width="2"/>
    <rect x="10" y="8" width="2" height="32" fill="#FBC02D"/>
    <line x1="14" y1="14" x2="36" y2="14" stroke="#808080" stroke-width="1"/>
    <line x1="14" y1="20" x2="36" y2="20" stroke="#808080" stroke-width="1"/>
    <line x1="14" y1="26" x2="36" y2="26" stroke="#808080" stroke-width="1"/>
    <line x1="14" y1="32" x2="30" y2="32" stroke="#808080" stroke-width="1"/>
  </svg>`,

  workouts: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="20" width="8" height="8" fill="#808080"/>
    <rect x="36" y="20" width="8" height="8" fill="#808080"/>
    <rect x="12" y="16" width="4" height="16" fill="#404040"/>
    <rect x="32" y="16" width="4" height="16" fill="#404040"/>
    <rect x="16" y="22" width="16" height="4" fill="#606060"/>
    <rect x="6" y="22" width="4" height="4" fill="#606060"/>
    <rect x="38" y="22" width="4" height="4" fill="#606060"/>
  </svg>`,

  // RollerCoaster Tycoon inspired icon (roller coaster track)
  rct: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="40" height="40" rx="4" fill="#2E7D32"/>
    <path d="M8 36 Q14 10 24 28 Q34 46 40 20" stroke="#F44336" stroke-width="3" fill="none"/>
    <path d="M8 36 Q14 10 24 28 Q34 46 40 20" stroke="#FFEB3B" stroke-width="1" fill="none" stroke-dasharray="4 2"/>
    <circle cx="12" cy="24" r="3" fill="#2196F3"/>
    <circle cx="24" cy="28" r="3" fill="#2196F3"/>
    <circle cx="36" cy="24" r="3" fill="#2196F3"/>
    <rect x="10" y="32" width="4" height="8" fill="#795548"/>
    <rect x="22" y="28" width="4" height="12" fill="#795548"/>
    <rect x="34" y="24" width="4" height="16" fill="#795548"/>
  </svg>`,

  // Windows 98 4-color flag logo for Start button
  windowsLogo: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="6" height="6" fill="#FF0000"/>
    <rect x="9" y="1" width="6" height="6" fill="#00FF00"/>
    <rect x="1" y="9" width="6" height="6" fill="#0000FF"/>
    <rect x="9" y="9" width="6" height="6" fill="#FFFF00"/>
  </svg>`,

  // Quick Launch: Show Desktop icon
  showDesktop: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="14" height="10" fill="#008080" stroke="#000" stroke-width="1"/>
    <rect x="3" y="3" width="4" height="3" fill="#C0C0C0" stroke="#000080" stroke-width="0.5"/>
    <rect x="5" y="11" width="6" height="4" fill="#C0C0C0" stroke="#808080" stroke-width="0.5"/>
  </svg>`,

  // Quick Launch: Internet Explorer icon
  internetExplorer: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7" fill="#0078D7"/>
    <ellipse cx="8" cy="8" rx="6" ry="3" fill="none" stroke="white" stroke-width="1.5"/>
    <path d="M3 5 Q8 2 13 5" fill="none" stroke="#FFD700" stroke-width="1.5"/>
    <text x="8" y="11" text-anchor="middle" font-size="7" fill="white" font-weight="bold" font-family="Arial">e</text>
  </svg>`,

  // Quick Launch: Outlook Express icon (envelope)
  outlookExpress: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="3" width="14" height="10" fill="#FFFFCC" stroke="#808080" stroke-width="1"/>
    <polygon points="1,3 8,9 15,3" fill="#000080"/>
    <line x1="1" y1="13" x2="6" y2="8" stroke="#808080" stroke-width="0.5"/>
    <line x1="15" y1="13" x2="10" y2="8" stroke="#808080" stroke-width="0.5"/>
  </svg>`,

  // System Tray: Volume icon
  volumeIcon: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="2,6 5,6 9,3 9,13 5,10 2,10" fill="#000"/>
    <path d="M11,5 Q14,8 11,11" stroke="#000" fill="none" stroke-width="1.5"/>
    <path d="M12,3 Q16,8 12,13" stroke="#000" fill="none" stroke-width="1"/>
  </svg>`,

  // System Tray: Network icon (two computers)
  networkIcon: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="7" width="5" height="4" fill="#C0C0C0" stroke="#000" stroke-width="0.5"/>
    <rect x="10" y="7" width="5" height="4" fill="#C0C0C0" stroke="#000" stroke-width="0.5"/>
    <rect x="2" y="8" width="3" height="2" fill="#000080"/>
    <rect x="11" y="8" width="3" height="2" fill="#000080"/>
    <line x1="3.5" y1="7" x2="3.5" y2="4" stroke="#000" stroke-width="1"/>
    <line x1="12.5" y1="7" x2="12.5" y2="4" stroke="#000" stroke-width="1"/>
    <line x1="3.5" y1="4" x2="12.5" y2="4" stroke="#000" stroke-width="1"/>
    <rect x="1" y="11" width="5" height="2" fill="#C0C0C0" stroke="#808080" stroke-width="0.5"/>
    <rect x="10" y="11" width="5" height="2" fill="#C0C0C0" stroke="#808080" stroke-width="0.5"/>
  </svg>`
};

// PNG icon mapping for authentic Windows 98 icons
const pngIcons = {
  thoughts: 'assets/icons/windows98-icons/png/notepad-0.png',
  workouts: 'assets/icons/windows98-icons/png/calendar-0.png',
  myspace: 'assets/icons/windows98-icons/png/user_card.png',
  rct: 'assets/icons/RCT.ico',
  limewire: 'assets/icons/LimeWire.jpeg',
  github: 'assets/icons/windows98-icons/png/html-0.png',
  linkedin: 'assets/icons/windows98-icons/png/html-0.png',
  twitter: 'assets/icons/windows98-icons/png/html-0.png',
};

// Icon configuration
const icons = [
  { id: 'thoughts', type: 'folder', label: 'Thoughts', icon: 'thoughts' },
  { id: 'workouts', type: 'folder', label: 'Workouts', icon: 'workouts' },
  { id: 'myspace', type: 'folder', label: 'MySpace', icon: 'myspace' },
  { id: 'rct', type: 'video-game', label: 'RollerCoaster Tycoon', icon: 'rct' },
  { id: 'limewire', type: 'easter-egg', label: 'LimeWire', icon: 'limewire' },
];

// State
const openWindows = new Map();
let currentMobileView = null;

// Mobile detection
function isMobile() {
  return window.innerWidth <= 768;
}

// Object dispatch pattern for icon handlers
const iconHandlers = {
  folder: (icon) => openFolderWindow(icon),
  social: (icon) => window.open(icon.url, '_blank', 'noopener'),
  game: (icon) => showGameLoadingScreen(icon),
  'video-game': (icon) => openRCTVideoWindow(icon),
  'easter-egg': () => launchLimeWireEasterEgg(),
};

// Game loading screen
function showGameLoadingScreen(icon) {
  // Create loading overlay
  const overlay = document.createElement('div');
  overlay.className = 'loading-overlay';
  // Use PNG icon if available, fallback to SVG
  const iconHtml = pngIcons[icon.icon]
    ? `<img src="${pngIcons[icon.icon]}" alt="${icon.label}" style="width: 48px; height: 48px;">`
    : svgIcons[icon.icon];
  overlay.innerHTML = `
    <div class="loading-dialog window">
      <div class="title-bar">
        <div class="title-bar-text">Loading ${icon.label}...</div>
      </div>
      <div class="window-body loading-body">
        <div class="loading-icon">${iconHtml}</div>
        <p class="loading-text">Loading ${icon.label}</p>
        <p class="loading-subtext">Please wait while the game initializes...</p>
        <div class="loading-progress">
          <div class="loading-progress-bar"></div>
        </div>
        <p class="loading-tip">Tip: This is a decorative loading screen!</p>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Animate progress bar
  const progressBar = overlay.querySelector('.loading-progress-bar');
  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 15 + 5;
    if (progress >= 100) {
      progress = 100;
      progressBar.style.width = '100%';
      clearInterval(interval);

      // Show completion message briefly, then close
      const loadingText = overlay.querySelector('.loading-text');
      const subtext = overlay.querySelector('.loading-subtext');
      loadingText.textContent = 'Game loaded!';
      subtext.textContent = 'Just kidding - this is just a portfolio :)';

      setTimeout(() => {
        overlay.classList.add('fade-out');
        setTimeout(() => overlay.remove(), 300);
      }, 1500);
    } else {
      progressBar.style.width = progress + '%';
    }
  }, 200);

  // Allow clicking overlay to close
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      clearInterval(interval);
      overlay.classList.add('fade-out');
      setTimeout(() => overlay.remove(), 300);
    }
  });
}

// RCT video loading screen
function openRCTVideoWindow(icon) {
  if (isMobile()) {
    openRCTMobileView(icon);
    return;
  }

  // If window already open, focus it
  if (openWindows.has(icon.id)) {
    openWindows.get(icon.id).focus();
    return;
  }

  const offset = (openWindows.size % 5) * 30;
  const iconSvg = svgIcons[icon.icon];
  const iconDataUri = iconSvg ? svgToDataUri(iconSvg) : null;

  const container = document.createElement('div');
  container.className = 'rct-video-container';
  container.innerHTML = `
    <video
      class="rct-video"
      preload="none"
      loop
      playsinline
      src="assets/video/rct-loading.mp4"
    ></video>
  `;

  const video = container.querySelector('video');

  const win = new WinBox({
    title: icon.label,
    icon: iconDataUri,
    width: Math.min(640, window.innerWidth - 40),
    height: Math.min(480, window.innerHeight - 80),
    x: 100 + offset,
    y: 50 + offset,
    class: ['window-98'],
    mount: container,
    onclose: function() {
      video.pause();
      video.removeAttribute('src');
      video.load();
      openWindows.delete(icon.id);
      updateTaskbar();
      return false;
    },
    onfocus: function() {
      updateTaskbar();
    }
  });

  openWindows.set(icon.id, win);
  updateTaskbar();

  // Play — user click satisfies autoplay policy
  video.volume = 0.08;
  video.play().catch(err => {
    console.warn('RCT video playback failed:', err);
  });
}

function openRCTMobileView(icon) {
  const mobileView = document.getElementById('mobile-view');
  const mobileTitle = document.getElementById('mobile-title');
  const mobileContent = document.getElementById('mobile-content');

  mobileTitle.textContent = icon.label;
  currentMobileView = icon.id;

  mobileContent.innerHTML = `
    <div class="window-content rct-video-container">
      <video
        class="rct-video"
        preload="none"
        loop
        playsinline
        src="assets/video/rct-loading.mp4"
      ></video>
    </div>
  `;

  mobileView.classList.add('active');

  const video = mobileContent.querySelector('video');
  video.volume = 0.08;
  video.play().catch(err => {
    console.warn('RCT video playback failed:', err);
  });
}

// LimeWire easter egg - fake virus sequence
function launchLimeWireEasterEgg() {
  // Reduced motion: skip chaos
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    alert('Nice try! LimeWire is not available on this computer.');
    return;
  }

  // Mobile: phone takeover sequence
  if (isMobile()) {
    launchMobileVirusSequence();
    return;
  }

  const virusMessages = [
    { title: 'Error', text: 'A fatal exception 0E has occurred at 0028:C0034B03' },
    { title: 'Warning', text: 'Trojan.Win32.FakeAV detected in C:\\WINDOWS\\system32' },
    { title: 'Critical Error', text: 'System32 has been deleted' },
    { title: 'Norton AntiVirus', text: 'WARNING: 47 threats detected. Unable to quarantine.' },
    { title: 'Error', text: 'Formatting C:\\ drive... 23% complete' },
    { title: 'DANGER', text: 'Your personal files are being uploaded to the internet' },
    { title: 'Windows Protection Error', text: 'Registry has been corrupted. Restart required.' },
    { title: 'Error', text: 'explorer.exe has performed an illegal operation' },
    { title: 'Warning', text: 'Your IP address has been logged: 127.0.0.1' },
    { title: 'Critical Error', text: 'All passwords have been compromised' },
    { title: 'System Error', text: 'Not enough memory to display this error' },
    { title: 'Fatal Error', text: 'Keyboard not found. Press F1 to continue.' },
    { title: 'Error', text: 'Task failed successfully' },
    { title: 'Warning', text: 'Would you like to install 17 toolbars?' },
    { title: 'System Alert', text: 'Windows has detected that your computer is a computer' },
    { title: 'Error', text: 'Cannot delete file: It is being used by another error' },
    { title: 'Critical Error', text: 'CPU overheating. Please blow on screen.' },
    { title: 'Warning', text: 'Your wallpaper has been reported as suspicious' },
    { title: 'Fatal Error', text: 'An error occurred while displaying the previous error' },
    { title: 'VIRUS ALERT', text: 'bonzi_buddy.exe is requesting administrator access' },
  ];

  // Phase 1: Download dialog
  const overlay = document.createElement('div');
  overlay.className = 'loading-overlay';
  overlay.innerHTML = `
    <div class="loading-dialog window">
      <div class="title-bar">
        <div class="title-bar-text">LimeWire - Downloading...</div>
      </div>
      <div class="window-body loading-body">
        <div class="loading-icon"><img src="assets/icons/LimeWire.jpeg" alt="LimeWire" style="width: 48px; height: 48px;"></div>
        <p class="loading-text">Downloading faulty.exe from LimeWire...</p>
        <p class="loading-subtext">totally_safe_file.exe (2.4 MB)</p>
        <div class="loading-progress">
          <div class="loading-progress-bar"></div>
        </div>
        <p class="loading-tip">Tip: Always trust files from strangers on the internet!</p>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  // Animate download progress
  const progressBar = overlay.querySelector('.loading-progress-bar');
  let progress = 0;
  const downloadInterval = setInterval(() => {
    progress += Math.random() * 20 + 10;
    if (progress >= 100) {
      progress = 100;
      progressBar.style.width = '100%';
      clearInterval(downloadInterval);

      // Show "running" message
      overlay.querySelector('.loading-text').textContent = 'Running faulty.exe...';
      overlay.querySelector('.loading-subtext').textContent = 'This was a terrible idea.';

      // Phase 2: Start spawning error windows after brief pause
      setTimeout(() => {
        overlay.classList.add('fade-out');
        setTimeout(() => overlay.remove(), 300);
        spawnVirusWindows(virusMessages);
      }, 1000);
    } else {
      progressBar.style.width = progress + '%';
    }
  }, 150);
}

function spawnVirusWindows(messages) {
  const errorWindows = [];
  const shuffled = [...messages].sort(() => Math.random() - 0.5);
  const count = 15 + Math.floor(Math.random() * 11); // 15-25

  let spawned = 0;
  const spawnInterval = setInterval(() => {
    if (spawned >= count) {
      clearInterval(spawnInterval);
      // Phase 3: BSOD after 1 second
      setTimeout(() => showBSOD(errorWindows), 1000);
      return;
    }

    const msg = shuffled[spawned % shuffled.length];
    const win = document.createElement('div');
    win.className = 'virus-error-window window';
    win.style.left = Math.random() * (window.innerWidth - 300) + 'px';
    win.style.top = Math.random() * (window.innerHeight - 150) + 'px';

    win.innerHTML = `
      <div class="title-bar">
        <div class="title-bar-text">${msg.title}</div>
        <div class="title-bar-controls">
          <button aria-label="Close" disabled></button>
        </div>
      </div>
      <div class="window-body">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="font-size: 32px;">⚠️</span>
          <p style="margin: 0; font-size: 12px;">${msg.text}</p>
        </div>
        <div style="text-align: center; margin-top: 12px;">
          <button disabled style="min-width: 75px;">OK</button>
        </div>
      </div>
    `;

    document.body.appendChild(win);
    errorWindows.push(win);
    spawned++;
  }, 200);
}

function showBSOD(errorWindows) {
  // Remove all error windows
  errorWindows.forEach(win => win.remove());

  // Create BSOD
  const bsod = document.createElement('div');
  bsod.className = 'bsod-overlay';
  bsod.innerHTML = `<div class="bsod-text">Windows

A fatal exception 0E has occurred at 0028:C0034B03 in VXD VMM(01) +
00010E36. The current application will be terminated.

*  Press any key to terminate the current application.
*  Press CTRL+ALT+DEL again to restart your computer. You will
   lose any unsaved information in all applications.

                        Press any key to continue _</div>`;

  document.body.appendChild(bsod);

  // Dismiss on keypress, click, or timeout
  const dismiss = () => {
    bsod.classList.add('bsod-fade-out');
    setTimeout(() => bsod.remove(), 500);
    document.removeEventListener('keydown', dismiss);
  };

  document.addEventListener('keydown', dismiss);
  bsod.addEventListener('click', dismiss);
  setTimeout(dismiss, 4000);
}

// Mobile LimeWire easter egg - fake phone takeover
function launchMobileVirusSequence() {
  const mobileWarnings = [
    { icon: '📸', text: 'faulty.exe has accessed your camera...' },
    { icon: '📍', text: 'Uploading GPS location to remote server...' },
    { icon: '📇', text: 'Reading contacts... 847 entries found.' },
    { icon: '🔋', text: 'Battery drain detected: 43% per minute' },
    { icon: '🔑', text: 'Extracting saved passwords... 12 found.' },
    { icon: '📤', text: 'Sending browser history to print queue...' },
    { icon: '🎤', text: 'Microphone activated. Listening...' },
    { icon: '💀', text: 'Installing BonziBuddy Mobile Edition...' },
  ];

  // Phase 1: Download dialog (reuse overlay pattern)
  const overlay = document.createElement('div');
  overlay.className = 'loading-overlay';
  overlay.innerHTML = `
    <div class="loading-dialog window">
      <div class="title-bar">
        <div class="title-bar-text">LimeWire - Downloading...</div>
      </div>
      <div class="window-body loading-body">
        <div class="loading-icon"><img src="assets/icons/LimeWire.jpeg" alt="LimeWire" style="width: 48px; height: 48px;"></div>
        <p class="loading-text">Downloading faulty.exe from LimeWire...</p>
        <p class="loading-subtext">totally_safe_file.exe (2.4 MB)</p>
        <div class="loading-progress">
          <div class="loading-progress-bar"></div>
        </div>
        <p class="loading-tip">Tip: Always trust files from strangers on the internet!</p>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const progressBar = overlay.querySelector('.loading-progress-bar');
  let progress = 0;
  const downloadInterval = setInterval(() => {
    progress += Math.random() * 25 + 15;
    if (progress >= 100) {
      progress = 100;
      progressBar.style.width = '100%';
      clearInterval(downloadInterval);
      overlay.querySelector('.loading-text').textContent = 'Running faulty.exe...';
      overlay.querySelector('.loading-subtext').textContent = 'This was a terrible idea.';
      setTimeout(() => {
        overlay.classList.add('fade-out');
        setTimeout(() => overlay.remove(), 300);
        showMobileWarnings(mobileWarnings);
      }, 800);
    } else {
      progressBar.style.width = progress + '%';
    }
  }, 150);
}

function showMobileWarnings(warnings) {
  const container = document.createElement('div');
  container.className = 'mobile-virus-overlay';
  document.body.appendChild(container);

  // Show warnings one at a time, stacking them
  let idx = 0;
  const warningInterval = setInterval(() => {
    if (idx >= warnings.length) {
      clearInterval(warningInterval);
      // Trigger mobile crash screen after last warning
      setTimeout(() => showMobileCrash(container), 800);
      return;
    }

    const w = warnings[idx];
    const el = document.createElement('div');
    el.className = 'mobile-virus-warning';
    el.innerHTML = `<span class="mobile-virus-icon">${w.icon}</span> ${w.text}`;
    container.appendChild(el);
    // Trigger animation
    requestAnimationFrame(() => el.classList.add('visible'));

    // Vibrate if available (short buzz for each warning)
    if (navigator.vibrate) navigator.vibrate(50);

    idx++;
  }, 600);
}

function showMobileCrash(warningContainer) {
  // Flash screen white briefly
  warningContainer.classList.add('mobile-virus-flash');

  setTimeout(() => {
    // Replace with black crash screen
    warningContainer.innerHTML = '';
    warningContainer.classList.remove('mobile-virus-flash');
    warningContainer.classList.add('mobile-virus-crash');

    // Show fake reboot text line by line
    const lines = [
      'KERNEL PANIC - not synced: faulty.exe',
      '',
      'Process faulty.exe (pid: 31337)',
      'Stack: 0x0000DEAD 0xBAADF00D 0xCAFEBABE',
      '',
      'Rebooting in 3 seconds...',
    ];

    let lineIdx = 0;
    const lineInterval = setInterval(() => {
      if (lineIdx >= lines.length) {
        clearInterval(lineInterval);
        // "Reboot" - fade to black then remove
        setTimeout(() => {
          warningContainer.classList.add('mobile-virus-reboot');
          setTimeout(() => warningContainer.remove(), 600);
        }, 2000);
        return;
      }
      const span = document.createElement('div');
      span.className = 'mobile-crash-line';
      span.textContent = lines[lineIdx];
      warningContainer.appendChild(span);
      lineIdx++;
    }, 300);
  }, 200);
}

function handleIconClick(icon) {
  const handler = iconHandlers[icon.type];
  handler ? handler(icon) : console.warn(`Unknown icon type: ${icon.type}`);
}

// Window management - routes to mobile or desktop
function openFolderWindow(icon) {
  if (isMobile()) {
    openMobileView(icon);
  } else {
    openDesktopWindow(icon);
  }
}

// Mobile full-screen view
function openMobileView(icon) {
  const mobileView = document.getElementById('mobile-view');
  const mobileTitle = document.getElementById('mobile-title');
  const mobileContent = document.getElementById('mobile-content');

  mobileTitle.textContent = icon.label;
  currentMobileView = icon.id;

  // Create content container
  const contentEl = document.createElement('div');
  contentEl.className = 'window-content';
  mobileContent.innerHTML = '';
  mobileContent.appendChild(contentEl);

  // Load content
  loadMobileContent(contentEl, icon.id);

  // Show mobile view
  mobileView.classList.add('active');
}

function closeMobileView() {
  const mobileView = document.getElementById('mobile-view');
  // Pause and release any playing video
  const video = mobileView.querySelector('video');
  if (video) {
    video.pause();
    video.removeAttribute('src');
    video.load();
  }
  mobileView.classList.remove('active');
  currentMobileView = null;
  window.location.hash = '';
}

async function loadMobileContent(container, id) {
  switch (id) {
    case 'thoughts':
      await loadThoughtsContent(container, true);
      break;
    case 'workouts':
      loadWorkoutsContent(container);
      break;
    case 'myspace':
      await loadMyspaceContent(container);
      break;
    default:
      container.innerHTML = '<p>Content not found.</p>';
  }
}

// Convert SVG string to data URI for WinBox icon
function svgToDataUri(svgString) {
  const encoded = encodeURIComponent(svgString)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22');
  return `data:image/svg+xml,${encoded}`;
}

// Desktop window (WinBox)
function openDesktopWindow(icon) {
  // If window already open, focus it
  if (openWindows.has(icon.id)) {
    openWindows.get(icon.id).focus();
    return;
  }

  // Calculate cascade position
  const offset = (openWindows.size % 5) * 30;

  // Calculate window dimensions based on content type
  const isMyspace = icon.id === 'myspace';
  const isThoughts = icon.id === 'thoughts';

  let defaultWidth, defaultHeight;
  if (isThoughts) {
    // Thoughts: 85% width, 80% height (min 500x400)
    defaultWidth = Math.max(500, Math.floor(window.innerWidth * 0.85));
    defaultHeight = Math.max(400, Math.floor(window.innerHeight * 0.8));
  } else if (isMyspace) {
    defaultWidth = 750;
    defaultHeight = 500;
  } else {
    defaultWidth = 500;
    defaultHeight = 400;
  }

  // Get icon SVG for title bar
  const iconSvg = svgIcons[icon.icon];
  const iconDataUri = iconSvg ? svgToDataUri(iconSvg) : null;

  const win = new WinBox({
    title: icon.label,
    icon: iconDataUri,
    width: Math.min(defaultWidth, window.innerWidth - 40),
    height: Math.min(defaultHeight, window.innerHeight - 80),
    x: 100 + offset,
    y: 50 + offset,
    class: ['window-98'],
    onclose: function() {
      openWindows.delete(icon.id);
      updateTaskbar();
      return false;
    },
    onfocus: function() {
      updateTaskbar();
    }
  });

  openWindows.set(icon.id, win);
  updateTaskbar();
  loadWindowContent(win, icon.id);
}

// Taskbar management
function updateTaskbar() {
  const taskbarEl = document.getElementById('open-windows');
  taskbarEl.innerHTML = '';

  openWindows.forEach((win, id) => {
    const icon = icons.find(i => i.id === id);
    const btn = document.createElement('button');
    btn.className = 'taskbar-button';
    btn.textContent = icon ? icon.label : id;
    btn.onclick = () => win.focus();
    taskbarEl.appendChild(btn);
  });
}

// Content loading
async function loadWindowContent(win, id) {
  const contentEl = document.createElement('div');
  contentEl.className = 'window-content';

  // Add thoughts-specific class for typography
  if (id === 'thoughts') {
    contentEl.classList.add('thoughts-content');
  }

  switch (id) {
    case 'thoughts':
      await loadThoughtsContent(contentEl);
      break;
    case 'workouts':
      loadWorkoutsContent(contentEl);
      break;
    case 'myspace':
      await loadMyspaceContent(contentEl);
      break;
    default:
      contentEl.innerHTML = '<p>Content not found.</p>';
  }

  win.body.innerHTML = '';
  win.body.appendChild(contentEl);
}

// Sanity.io configuration
const sanityConfig = {
  projectId: 'yj5sya5j',
  dataset: 'production',
  apiVersion: '2024-01-01',
};

// Fetch from Sanity API
async function sanityFetch(query) {
  const url = `https://${sanityConfig.projectId}.api.sanity.io/v${sanityConfig.apiVersion}/data/query/${sanityConfig.dataset}?query=${encodeURIComponent(query)}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.result;
}

// Convert Sanity Portable Text to HTML
function portableTextToHtml(blocks) {
  if (!blocks || !Array.isArray(blocks)) return '';

  return blocks.map(block => {
    if (block._type === 'block') {
      const children = block.children?.map(child => {
        let text = child.text || '';
        // Apply marks (bold, italic, etc.)
        if (child.marks?.includes('strong')) text = `<strong>${text}</strong>`;
        if (child.marks?.includes('em')) text = `<em>${text}</em>`;
        if (child.marks?.includes('code')) text = `<code>${text}</code>`;
        return text;
      }).join('') || '';

      // Handle different block styles
      switch (block.style) {
        case 'h1': return `<h1>${children}</h1>`;
        case 'h2': return `<h2>${children}</h2>`;
        case 'h3': return `<h3>${children}</h3>`;
        case 'h4': return `<h4>${children}</h4>`;
        case 'blockquote': return `<blockquote>${children}</blockquote>`;
        default: return `<p>${children}</p>`;
      }
    }
    if (block._type === 'image' && block.asset) {
      const ref = block.asset._ref;
      const [, id, dimensions, format] = ref.split('-');
      const imageUrl = `https://cdn.sanity.io/images/${sanityConfig.projectId}/${sanityConfig.dataset}/${id}-${dimensions}.${format}`;
      return `<img src="${imageUrl}" alt="${block.alt || ''}" loading="lazy">`;
    }
    return '';
  }).join('');
}

// Format date for display
function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

// Thoughts (Blog) content
let currentPostSlug = null;
let cachedPosts = null;

async function loadThoughtsContent(container, forMobile = false) {
  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      "author": author->name,
      "mainImage": mainImage.asset._ref
    }`;
    const posts = await sanityFetch(query);
    cachedPosts = posts;
    renderPostList(container, posts, forMobile);
  } catch (error) {
    container.innerHTML = `
      <h1>Thoughts</h1>
      <p>A collection of writings and ideas.</p>
      <p><em>Unable to load posts. Please try again later.</em></p>
    `;
  }
}

function renderPostList(container, posts, forMobile = false) {
  if (!posts || posts.length === 0) {
    container.innerHTML = `
      <h1>Thoughts</h1>
      <p>A collection of writings and ideas.</p>
      <p><em>No posts yet. Check back soon!</em></p>
    `;
    return;
  }

  container.innerHTML = `
    <h1>Thoughts</h1>
    <ul class="post-list">
      ${posts.map(post => `
        <li class="post-item" data-slug="${post.slug}">
          <div class="post-title">${post.title}</div>
          <div class="post-date">${formatDate(post.publishedAt)}</div>
        </li>
      `).join('')}
    </ul>
  `;

  container.querySelectorAll('.post-item').forEach(item => {
    item.onclick = () => loadPost(container, item.dataset.slug, posts, forMobile);
  });
}

async function loadPost(container, slug, posts, forMobile = false) {
  try {
    const query = `*[_type == "post" && slug.current == "${slug}"][0] {
      title,
      body,
      publishedAt,
      "author": author->name,
      "mainImage": mainImage.asset._ref
    }`;
    const post = await sanityFetch(query);

    if (!post) throw new Error('Post not found');

    const bodyHtml = portableTextToHtml(post.body);
    let mainImageHtml = '';

    if (post.mainImage) {
      const [, id, dimensions, format] = post.mainImage.split('-');
      const imageUrl = `https://cdn.sanity.io/images/${sanityConfig.projectId}/${sanityConfig.dataset}/${id}-${dimensions}.${format}`;
      mainImageHtml = `<img src="${imageUrl}" alt="${post.title}" class="post-main-image" loading="lazy">`;
    }

    const articleContent = `
      <h1>${post.title}</h1>
      <div class="post-meta">
        ${post.author ? `<span class="post-author">By ${post.author}</span>` : ''}
        ${post.publishedAt ? `<span class="post-date">${formatDate(post.publishedAt)}</span>` : ''}
      </div>
      ${mainImageHtml}
      ${bodyHtml}
    `;

    if (forMobile) {
      container.innerHTML = `<article>${articleContent}</article>`;
    } else {
      container.innerHTML = `
        <button class="back-button" onclick="goBackToList(this)">← Back to list</button>
        <article>${articleContent}</article>
      `;
    }

    currentPostSlug = slug;
    window.location.hash = `/thoughts/${slug}`;
  } catch (error) {
    const errorContent = forMobile
      ? '<p>Error loading post.</p>'
      : `<button class="back-button" onclick="goBackToList(this)">← Back to list</button><p>Error loading post.</p>`;
    container.innerHTML = errorContent;
  }
}

function goBackToList(btn) {
  const container = btn.closest('.window-content');
  loadThoughtsContent(container, isMobile());
  window.location.hash = '';
}

// Workouts content (placeholder)
function loadWorkoutsContent(container) {
  container.innerHTML = `
    <h1>Workouts</h1>
    <p>Tracking my fitness journey.</p>
    <div class="resume-section">
      <h2>Recent Activity</h2>
      <p><em>Workout logs coming soon...</em></p>
    </div>
  `;
}

// MySpace profile content
async function loadMyspaceContent(container) {
  try {
    const response = await fetch('content/myspace/profile.html');
    const html = await response.text();
    container.innerHTML = html;

    // Calculate age dynamically
    const ageEl = container.querySelector('#myspace-age');
    if (ageEl) {
      const birthday = new Date(1994, 7, 14); // August 14, 1994
      const today = new Date();
      let age = today.getFullYear() - birthday.getFullYear();
      const monthDiff = today.getMonth() - birthday.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
        age--;
      }
      ageEl.textContent = `${age} years old`;
    }

    // Populate blog section with Sanity posts
    const blogContainer = container.querySelector('#myspace-blog-entries');
    if (blogContainer) {
      const query = `*[_type == "post"] | order(publishedAt desc) [0...5] {
        title,
        "slug": slug.current
      }`;
      const posts = await sanityFetch(query);
      if (posts && posts.length > 0) {
        blogContainer.innerHTML = posts.map(post =>
          `<div class="blog-entry">${post.title} <span class="view-more">(<a href="#/thoughts/${post.slug}">view more</a>)</span></div>`
        ).join('');
      } else {
        blogContainer.innerHTML = '<div class="blog-entry"><em>No blog entries yet.</em></div>';
      }
    }
  } catch (error) {
    container.innerHTML = `
      <div class="myspace-profile">
        <header class="myspace-header">
          <div class="myspace-photo-container photo-fallback">
            <div class="photo-fallback-text">N</div>
          </div>
          <div class="myspace-info">
            <h1 class="myspace-name">Nicholas</h1>
            <p class="myspace-tagline">"Building things for the web"</p>
          </div>
        </header>
        <section class="myspace-section">
          <h2 class="myspace-section-title">About Me</h2>
          <div class="myspace-section-content">
            <p>Welcome to my profile!</p>
          </div>
        </section>
      </div>
    `;
  }
}

// Hash routing for direct links to blog posts
function handleHashChange() {
  const hash = window.location.hash;
  if (hash.startsWith('#/thoughts/')) {
    const slug = hash.replace('#/thoughts/', '');
    const thoughtsIcon = icons.find(i => i.id === 'thoughts');

    if (isMobile()) {
      // Mobile: open mobile view and load post
      if (currentMobileView !== 'thoughts') {
        openMobileView(thoughtsIcon);
      }
      setTimeout(() => {
        const container = document.querySelector('#mobile-content .window-content');
        if (container && cachedPosts) {
          loadPost(container, slug, cachedPosts, true);
        } else {
          fetch('content/thoughts/index.json')
            .then(r => r.json())
            .then(data => {
              cachedPosts = data.posts;
              if (container) {
                loadPost(container, slug, data.posts, true);
              }
            });
        }
      }, 100);
    } else {
      // Desktop: open window and load post
      if (!openWindows.has('thoughts')) {
        openDesktopWindow(thoughtsIcon);
      }
      setTimeout(() => {
        const win = openWindows.get('thoughts');
        if (win) {
          fetch('content/thoughts/index.json')
            .then(r => r.json())
            .then(data => {
              const container = win.body.querySelector('.window-content');
              if (container) {
                loadPost(container, slug, data.posts, false);
              }
            });
        }
      }, 100);
    }
  }
}

// Initialize desktop icons
function initIcons() {
  const grid = document.getElementById('icon-grid');
  grid.setAttribute('role', 'list');
  grid.setAttribute('aria-label', 'Desktop icons');

  icons.forEach(icon => {
    const el = document.createElement('button');
    el.className = 'desktop-icon';
    el.setAttribute('role', 'listitem');
    el.setAttribute('aria-label', getIconAriaLabel(icon));
    // Use PNG icons if available, fallback to SVG
    const iconHtml = pngIcons[icon.icon]
      ? `<img src="${pngIcons[icon.icon]}" alt="${icon.label}" style="width: 32px; height: 32px;">`
      : svgIcons[icon.icon];
    el.innerHTML = `${iconHtml}<span>${icon.label}</span>`;
    el.onclick = () => handleIconClick(icon);
    el.title = icon.label;
    grid.appendChild(el);
  });
}

// Generate accessible labels for icons
function getIconAriaLabel(icon) {
  switch (icon.type) {
    case 'folder':
      return `Open ${icon.label} folder`;
    case 'social':
      return `Open ${icon.label} profile in new tab`;
    case 'game':
      return `Launch ${icon.label} (decorative)`;
    case 'easter-egg':
      return `Open ${icon.label}`;
    default:
      return icon.label;
  }
}

// Keyboard support
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    // Escape - close windows/overlays
    if (e.key === 'Escape') {
      // Close loading overlay if present
      const overlay = document.querySelector('.loading-overlay');
      if (overlay) {
        overlay.classList.add('fade-out');
        setTimeout(() => overlay.remove(), 300);
        return;
      }
      // Close mobile view if open
      if (currentMobileView) {
        closeMobileView();
        return;
      }
      // Close topmost window
      const windows = Array.from(openWindows.values());
      if (windows.length > 0) {
        windows[windows.length - 1].close();
      }
    }

    // Enter - activate focused icon
    if (e.key === 'Enter') {
      const focused = document.activeElement;
      if (focused && focused.classList.contains('desktop-icon')) {
        focused.click();
      }
    }
  });
}

// Initialize mobile back button
function initMobileBackButton() {
  const backBtn = document.getElementById('mobile-back-btn');
  backBtn.addEventListener('click', () => {
    // Check if viewing a blog post - go back to list first
    if (currentMobileView === 'thoughts' && currentPostSlug) {
      const container = document.querySelector('#mobile-content .window-content');
      if (container) {
        loadThoughtsContent(container, true);
        currentPostSlug = null;
        window.location.hash = '';
        return;
      }
    }
    // Otherwise close the mobile view
    closeMobileView();
  });
}

// Handle window resize (switch between mobile/desktop)
function initResizeHandler() {
  let wasMobile = isMobile();

  window.addEventListener('resize', () => {
    const nowMobile = isMobile();

    // If switching from mobile to desktop, close mobile view
    if (wasMobile && !nowMobile && currentMobileView) {
      closeMobileView();
    }

    // If switching from desktop to mobile, close all windows
    if (!wasMobile && nowMobile) {
      openWindows.forEach((win) => win.close());
      openWindows.clear();
      updateTaskbar();
    }

    wasMobile = nowMobile;
  });
}

// Fun facts data
const funFacts = [
  "☕ Coffee order: Oat milk latte",
  "🎮 First game: RollerCoaster Tycoon",
  "💻 First OS: Windows 95",
  "🎵 Coding music: Lo-fi beats",
  "🌮 Favorite food: Tacos",
  "⌨️ Favorite editor: VS Code",
  "🐈 Pet status: Cat person",
  "📚 Currently reading: Too many tabs",
];

// Clock
function updateClock() {
  const clockEl = document.getElementById('clock-time');
  if (!clockEl) return;
  const now = new Date();
  clockEl.textContent = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

function initClock() {
  updateClock();
  setInterval(updateClock, 60000); // Update every minute
}

// Close all popups
function closeAllPopups() {
  const startMenu = document.getElementById('start-menu');
  const funFactsPopup = document.getElementById('fun-facts-popup');
  const startButton = document.getElementById('start-button');

  if (startMenu) startMenu.hidden = true;
  if (funFactsPopup) funFactsPopup.hidden = true;
  if (startButton) {
    startButton.classList.remove('active');
    startButton.setAttribute('aria-expanded', 'false');
  }
}

// Start Menu
function toggleStartMenu() {
  const menu = document.getElementById('start-menu');
  const button = document.getElementById('start-button');
  const isHidden = menu.hidden;

  closeAllPopups();

  if (isHidden) {
    menu.hidden = false;
    button.classList.add('active');
    button.setAttribute('aria-expanded', 'true');
  }
}

function handleStartMenuAction(action) {
  closeAllPopups();

  switch (action) {
    case 'about':
      // Open About/Thoughts window
      const aboutIcon = icons.find(i => i.id === 'thoughts');
      if (aboutIcon) handleIconClick(aboutIcon);
      break;
    case 'contact':
      window.location.href = 'mailto:hello@example.com';
      break;
    case 'source':
      window.open('https://github.com/Nickostick/windows97-portfolio', '_blank', 'noopener');
      break;
    case 'shutdown':
      alert('Thanks for visiting! 👋');
      break;
  }
}

// Fun Facts
function showRandomFact() {
  const popup = document.getElementById('fun-facts-popup');
  const textEl = document.getElementById('fun-fact-text');

  closeAllPopups();

  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
  textEl.textContent = randomFact;
  popup.hidden = false;
}

// Show Desktop state
let windowsMinimizedByShowDesktop = [];

// Toggle Show Desktop - minimize/restore all windows
function toggleShowDesktop() {
  if (windowsMinimizedByShowDesktop.length > 0) {
    // Restore all previously minimized windows
    windowsMinimizedByShowDesktop.forEach(winbox => {
      if (winbox && winbox.restore) {
        winbox.restore();
      }
    });
    windowsMinimizedByShowDesktop = [];
  } else {
    // Minimize all open windows
    openWindows.forEach((winbox) => {
      if (winbox && !winbox.min) {
        windowsMinimizedByShowDesktop.push(winbox);
        winbox.minimize();
      }
    });
  }
}

// Initialize Quick Launch bar
function initQuickLaunch() {
  // Start button Windows logo - using authentic Windows 98 icon
  const startLogoContainer = document.getElementById('start-logo-container');
  if (startLogoContainer) {
    startLogoContainer.innerHTML = '<img src="assets/icons/windows98-icons/png/windows_slanted-0.png" alt="Windows" style="width: 16px; height: 16px;">';
  }

  // Quick Launch icons - social links
  const githubBtn = document.getElementById('github-btn');
  const twitterBtn = document.getElementById('twitter-btn');
  const linkedinBtn = document.getElementById('linkedin-btn');

  if (githubBtn) {
    githubBtn.innerHTML = svgIcons.github;
    githubBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      window.open('https://github.com/Nickostick', '_blank', 'noopener');
    });
  }

  if (twitterBtn) {
    twitterBtn.innerHTML = svgIcons.twitter;
    twitterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      window.open('https://x.com/NickPrijic', '_blank', 'noopener');
    });
  }

  if (linkedinBtn) {
    linkedinBtn.innerHTML = svgIcons.linkedin;
    linkedinBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      window.open('https://www.linkedin.com/in/nicholasprijic/', '_blank', 'noopener');
    });
  }

  // System Tray icons - using authentic Windows 98 PNG icons
  const volumeIcon = document.getElementById('volume-icon');
  const networkIcon = document.getElementById('network-icon');

  if (volumeIcon) {
    volumeIcon.innerHTML = '<img src="assets/icons/windows98-icons/png/loudspeaker_rays_green-0.png" alt="Volume" style="width: 16px; height: 16px;">';
  }

  if (networkIcon) {
    networkIcon.innerHTML = '<img src="assets/icons/windows98-icons/png/entire_network_globe-0.png" alt="Network" style="width: 16px; height: 16px;">';
  }
}

// Initialize taskbar (Start menu, clock, fun facts)
function initTaskbar() {
  const startButton = document.getElementById('start-button');
  const startMenu = document.getElementById('start-menu');
  const clock = document.getElementById('taskbar-clock');

  // Start button click
  if (startButton) {
    startButton.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleStartMenu();
    });
  }

  // Start menu item clicks
  if (startMenu) {
    startMenu.addEventListener('click', (e) => {
      const item = e.target.closest('.menu-item');
      if (item) {
        handleStartMenuAction(item.dataset.action);
      }
    });
  }

  // Clock click
  if (clock) {
    clock.addEventListener('click', (e) => {
      e.stopPropagation();
      showRandomFact();
    });

    // Keyboard support for clock
    clock.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        showRandomFact();
      }
    });
  }

  // Click outside to close popups
  document.addEventListener('click', closeAllPopups);

  // Initialize clock
  initClock();
}

// Boot screen management
function shouldShowBootScreen() {
  // Skip for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return false;
  }

  // Skip if already seen this session
  try {
    return !sessionStorage.getItem('bootScreenSeen');
  } catch (e) {
    return true; // Show if storage unavailable
  }
}

function markBootScreenSeen() {
  try {
    sessionStorage.setItem('bootScreenSeen', 'true');
  } catch (e) {
    // Ignore storage errors
  }
}

function hideBootScreen() {
  const bootScreen = document.getElementById('boot-screen');
  if (!bootScreen || bootScreen.classList.contains('hidden')) return;

  markBootScreenSeen();
  bootScreen.setAttribute('aria-label', 'Portfolio ready');
  bootScreen.classList.add('hidden');

  // Remove from DOM after animation, focus desktop, and open MySpace
  setTimeout(() => {
    bootScreen.remove();
    document.getElementById('desktop').focus();
    openMySpaceOnLoad();
  }, 300);
}

// Open MySpace window automatically on first load
function openMySpaceOnLoad() {
  if (isMobile()) return;
  const myspaceIcon = icons.find(i => i.id === 'myspace');
  if (myspaceIcon) handleIconClick(myspaceIcon);
}

function initBootScreen() {
  const bootScreen = document.getElementById('boot-screen');

  if (!shouldShowBootScreen()) {
    // Instantly hide without animation
    if (bootScreen) {
      bootScreen.classList.add('instant-hide');
      bootScreen.remove();
    }
    // Still open MySpace when boot screen is skipped
    openMySpaceOnLoad();
    return;
  }

  // Skip on click anywhere
  bootScreen.addEventListener('click', hideBootScreen);

  // Skip on any keypress
  const keyHandler = (e) => {
    hideBootScreen();
    document.removeEventListener('keydown', keyHandler);
  };
  document.addEventListener('keydown', keyHandler);

  // Skip on touch (mobile)
  bootScreen.addEventListener('touchstart', hideBootScreen, { passive: true });

  // Auto-hide after animation completes (4s progress + buffer)
  setTimeout(hideBootScreen, 4200);
}

// Initialize app
function init() {
  initBootScreen();
  initIcons();
  initQuickLaunch();
  initTaskbar();
  initKeyboard();
  initMobileBackButton();
  initResizeHandler();
  // Clear any leftover hash on fresh load so windows don't auto-open
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname);
  }
  window.addEventListener('hashchange', handleHashChange);
}

init();
