// Configurator for AI Pro Visual Effects
(function() {
  'use strict';

  // Configuration state
  const config = {
    // Purple gradient (::before)
    purpleTop: 350,
    purpleOpacity: 0.15,
    purpleBlur: 150,
    purpleWidth: 1341,
    purpleHeight: 1405,
    purpleColor: '#A600FF',

    // Red gradient (::after)
    redBottom: -300,
    redOpacity: 0.18,
    redBlur: 120,
    redWidth: 1553,
    redHeight: 600,
    redColor: '#E92A2B',

    // Animation
    animationSpeed1: 8,
    animationSpeed2: 10,
    animationDistance: 30
  };

  // Create configurator HTML
  function createConfigurator() {
    const html = `
      <div id="configurator">
        <div id="configurator-header">
          <h3 id="configurator-title">Configurator</h3>
          <span id="configurator-toggle">▼</span>
        </div>
        <div id="configurator-content">
          <div class="config-section-title">Hero Background</div>
          <div class="config-subsection-title">Purple Gradient (::before)</div>

          <div class="config-group">
            <label class="config-label">
              Top Position
              <span class="config-value" id="purpleTop-value">${config.purpleTop}px</span>
            </label>
            <input type="range" class="config-input" id="purpleTop"
                   min="0" max="800" step="10" value="${config.purpleTop}">
          </div>

          <div class="config-group">
            <label class="config-label">
              Opacity
              <span class="config-value" id="purpleOpacity-value">${config.purpleOpacity}</span>
            </label>
            <input type="range" class="config-input" id="purpleOpacity"
                   min="0" max="0.5" step="0.01" value="${config.purpleOpacity}">
          </div>

          <div class="config-group">
            <label class="config-label">
              Blur
              <span class="config-value" id="purpleBlur-value">${config.purpleBlur}px</span>
            </label>
            <input type="range" class="config-input" id="purpleBlur"
                   min="50" max="300" step="10" value="${config.purpleBlur}">
          </div>

          <div class="config-group">
            <label class="config-label">
              Color
            </label>
            <input type="color" class="config-color-input" id="purpleColor" value="${config.purpleColor}">
          </div>

          <div class="config-subsection-title">Red Gradient (::after)</div>

          <div class="config-group">
            <label class="config-label">
              Bottom Position
              <span class="config-value" id="redBottom-value">${config.redBottom}px</span>
            </label>
            <input type="range" class="config-input" id="redBottom"
                   min="-500" max="0" step="10" value="${config.redBottom}">
          </div>

          <div class="config-group">
            <label class="config-label">
              Opacity
              <span class="config-value" id="redOpacity-value">${config.redOpacity}</span>
            </label>
            <input type="range" class="config-input" id="redOpacity"
                   min="0" max="0.5" step="0.01" value="${config.redOpacity}">
          </div>

          <div class="config-group">
            <label class="config-label">
              Blur
              <span class="config-value" id="redBlur-value">${config.redBlur}px</span>
            </label>
            <input type="range" class="config-input" id="redBlur"
                   min="50" max="300" step="10" value="${config.redBlur}">
          </div>

          <div class="config-group">
            <label class="config-label">
              Height
              <span class="config-value" id="redHeight-value">${config.redHeight}px</span>
            </label>
            <input type="range" class="config-input" id="redHeight"
                   min="200" max="1200" step="50" value="${config.redHeight}">
          </div>

          <div class="config-group">
            <label class="config-label">
              Color
            </label>
            <input type="color" class="config-color-input" id="redColor" value="${config.redColor}">
          </div>

          <div class="config-section-title">Animation</div>

          <div class="config-group">
            <label class="config-label">
              Speed 1
              <span class="config-value" id="animationSpeed1-value">${config.animationSpeed1}s</span>
            </label>
            <input type="range" class="config-input" id="animationSpeed1"
                   min="2" max="20" step="1" value="${config.animationSpeed1}">
          </div>

          <div class="config-group">
            <label class="config-label">
              Speed 2
              <span class="config-value" id="animationSpeed2-value">${config.animationSpeed2}s</span>
            </label>
            <input type="range" class="config-input" id="animationSpeed2"
                   min="2" max="20" step="1" value="${config.animationSpeed2}">
          </div>

          <button id="copy-for-claude" class="config-copy-btn">Copy for Claude</button>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', html);
  }

  // Update CSS custom properties
  function updateStyles() {
    const style = document.getElementById('configurator-dynamic-styles') || createStyleElement();

    style.textContent = `
      .hero-ai-pro::before {
        top: ${config.purpleTop}px !important;
        opacity: ${config.purpleOpacity} !important;
        filter: blur(${config.purpleBlur}px) !important;
        background: ${config.purpleColor} !important;
        animation: gradientFloat1 ${config.animationSpeed1}s ease-in-out infinite !important;
      }

      .hero-ai-pro::after {
        bottom: ${config.redBottom}px !important;
        opacity: ${config.redOpacity} !important;
        filter: blur(${config.redBlur}px) !important;
        height: ${config.redHeight}px !important;
        background: ${config.redColor} !important;
        animation: gradientFloat2 ${config.animationSpeed2}s ease-in-out infinite !important;
      }
    `;
  }

  function createStyleElement() {
    const style = document.createElement('style');
    style.id = 'configurator-dynamic-styles';
    document.head.appendChild(style);
    return style;
  }

  // Copy values for Claude
  function copyForClaude() {
    const text = `Purple Gradient (::before)
Top Position: ${config.purpleTop}px
Opacity: ${config.purpleOpacity}
Blur: ${config.purpleBlur}px
Color: ${config.purpleColor}

Red Gradient (::after)
Bottom Position: ${config.redBottom}px
Opacity: ${config.redOpacity}
Blur: ${config.redBlur}px
Height: ${config.redHeight}px
Color: ${config.redColor}

Animation
Speed 1: ${config.animationSpeed1}s
Speed 2: ${config.animationSpeed2}s`;

    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById('copy-for-claude');
      const originalText = btn.textContent;
      btn.textContent = 'Copied!';
      btn.style.background = '#00C853';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 2000);
    });
  }

  // Bind event listeners
  function bindEvents() {
    const configurator = document.getElementById('configurator');
    const header = document.getElementById('configurator-header');

    // Toggle collapse
    header.addEventListener('click', () => {
      configurator.classList.toggle('collapsed');
    });

    // Copy for Claude button
    const copyBtn = document.getElementById('copy-for-claude');
    copyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      copyForClaude();
    });

    // Bind all inputs
    Object.keys(config).forEach(key => {
      const input = document.getElementById(key);
      if (!input) return;

      input.addEventListener('input', (e) => {
        const value = input.type === 'color' ? e.target.value : parseFloat(e.target.value);
        config[key] = value;

        // Update value display
        const valueDisplay = document.getElementById(`${key}-value`);
        if (valueDisplay) {
          if (input.type === 'color') {
            valueDisplay.textContent = value;
          } else if (key.includes('Opacity')) {
            valueDisplay.textContent = value.toFixed(2);
          } else if (key.includes('Speed')) {
            valueDisplay.textContent = value + 's';
          } else {
            valueDisplay.textContent = value + 'px';
          }
        }

        updateStyles();
      });
    });
  }

  // Log CSS for copying
  function logCSS() {
    console.log(`
/* Purple Gradient (::before) */
top: ${config.purpleTop}px;
opacity: ${config.purpleOpacity};
filter: blur(${config.purpleBlur}px);
background: ${config.purpleColor};
animation: gradientFloat1 ${config.animationSpeed1}s ease-in-out infinite;

/* Red Gradient (::after) */
bottom: ${config.redBottom}px;
opacity: ${config.redOpacity};
filter: blur(${config.redBlur}px);
height: ${config.redHeight}px;
background: ${config.redColor};
animation: gradientFloat2 ${config.animationSpeed2}s ease-in-out infinite;
    `);
  }

  // Show configurator function
  function showConfigurator() {
    const configurator = document.getElementById('configurator');
    if (configurator) {
      configurator.classList.add('visible');
      console.log('Configurator enabled. Use hideConfigurator() to hide it.');
    }
  }

  // Hide configurator function
  function hideConfigurator() {
    const configurator = document.getElementById('configurator');
    if (configurator) {
      configurator.classList.remove('visible');
      console.log('Configurator hidden. Use showConfigurator() to show it.');
    }
  }

  // Initialize
  function init() {
    createConfigurator();
    bindEvents();
    updateStyles();

    // Add keyboard shortcut to log CSS (Cmd/Ctrl + Shift + C)
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        logCSS();
      }
    });

    // Expose global functions for console access
    window.showConfigurator = showConfigurator;
    window.hideConfigurator = hideConfigurator;

    console.log('Use showConfigurator() in console to enable the configurator.');
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
