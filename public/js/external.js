// External JavaScript File - Utility Functions and Interactive Features

// Utility functions
const Utils = {
  // Debounce function to limit function calls
  debounce: function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function to limit function calls
  throttle: function(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Format date
  formatDate: function(date) {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  },

  // Generate random ID
  generateId: function() {
    return Math.random().toString(36).substr(2, 9);
  },

  // Check if element is in viewport
  isInViewport: function(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
};

// Animation utilities
const Animations = {
  // Fade in element
  fadeIn: function(element, duration = 500) {
    element.style.opacity = '0';
    element.style.display = 'block';
    
    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const opacity = Math.min(progress / duration, 1);
      
      element.style.opacity = opacity;
      
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  },

  // Slide down element
  slideDown: function(element, duration = 300) {
    element.style.height = '0px';
    element.style.overflow = 'hidden';
    element.style.display = 'block';
    
    const targetHeight = element.scrollHeight;
    let start = null;
    
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const height = Math.min((progress / duration) * targetHeight, targetHeight);
      
      element.style.height = height + 'px';
      
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        element.style.height = 'auto';
        element.style.overflow = 'visible';
      }
    };
    
    requestAnimationFrame(animate);
  }
};

// UI Components
const UI = {
  // Show notification
  showNotification: function(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type} fade-in`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem;
      border-radius: 5px;
      color: white;
      z-index: 1000;
      max-width: 300px;
      word-wrap: break-word;
    `;
    
    // Set background color based on type
    const colors = {
      info: '#0070f3',
      success: '#28a745',
      warning: '#ffc107',
      error: '#dc3545'
    };
    
    notification.style.background = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Remove after duration
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, duration);
  },

  // Create modal
  createModal: function(content, title = 'Modal') {
    const modal = document.createElement('div');
    modal.className = 'modal fade-in';
    modal.innerHTML = `
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h3>${title}</h3>
          <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          ${content}
        </div>
      </div>
    `;
    
    // Add styles
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    
    const overlay = modal.querySelector('.modal-overlay');
    overlay.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
    `;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
      background: white;
      border-radius: 8px;
      max-width: 500px;
      width: 90%;
      max-height: 80vh;
      overflow-y: auto;
      position: relative;
      z-index: 1;
    `;
    
    const modalHeader = modal.querySelector('.modal-header');
    modalHeader.style.cssText = `
      padding: 1rem;
      border-bottom: 1px solid #e9ecef;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;
    
    const modalBody = modal.querySelector('.modal-body');
    modalBody.style.cssText = `
      padding: 1rem;
    `;
    
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.style.cssText = `
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    
    // Close functionality
    const closeModal = () => {
      modal.style.opacity = '0';
      setTimeout(() => {
        if (modal.parentNode) {
          modal.parentNode.removeChild(modal);
        }
      }, 300);
    };
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    document.body.appendChild(modal);
    
    return {
      close: closeModal,
      element: modal
    };
  }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('External JavaScript loaded successfully!');
  
  // Add smooth scrolling to all links
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
  
  // Add loading animation to buttons
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
      if (!this.classList.contains('loading')) {
        this.classList.add('loading');
        this.style.position = 'relative';
        
        const spinner = document.createElement('span');
        spinner.style.cssText = `
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        `;
        
        this.appendChild(spinner);
        
        // Remove loading state after 2 seconds (for demo)
        setTimeout(() => {
          this.classList.remove('loading');
          if (spinner.parentNode) {
            spinner.parentNode.removeChild(spinner);
          }
        }, 2000);
      }
    });
  });
});

// Add CSS for loading animation
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }
  
  button.loading {
    pointer-events: none;
  }
`;
document.head.appendChild(style);

// Export for use in other scripts
window.Utils = Utils;
window.Animations = Animations;
window.UI = UI; 