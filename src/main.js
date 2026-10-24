/**
 * The Beauty Factory by Dr. Bhanu Kalaivani
 * Core Client-side Interactive Engine
 */

import { BRAND_INFO, SERVICES, PORTFOLIO, BRIDAL_EXPERIENCE_STEPS, TESTIMONIALS, FAQS } from './data.js';

// Application State
const state = {
  activeCategory: 'all',
  moodboard: JSON.parse(localStorage.getItem('tbf_bridal_moodboard') || '[]'),
  lastEnquiry: JSON.parse(localStorage.getItem('tbf_last_enquiry') || 'null')
};

// Toast Notifications
const showToast = (message) => {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ECC94B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 300ms ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
};

// Navbar Scroll Effect
const initNavbarScroll = () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
};

// Mobile Drawer
const initMobileDrawer = () => {
  const openBtn = document.getElementById('mobile-menu-open');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-drawer');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!drawer) return;

  const toggle = (isOpen) => {
    drawer.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  openBtn?.addEventListener('click', () => toggle(true));
  closeBtn?.addEventListener('click', () => toggle(false));
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) toggle(false);
  });
  links.forEach(l => l.addEventListener('click', () => toggle(false)));
};

// Moodboard Manager & Drawer
const initMoodboard = () => {
  updateMoodboardCount();

  const trigger = document.getElementById('moodboard-trigger');
  const drawer = document.getElementById('moodboard-drawer');
  const closeBtn = document.getElementById('moodboard-drawer-close');
  const browseMoreBtn = document.getElementById('drawer-browse-more-btn');

  const toggleDrawer = (isOpen) => {
    if (!drawer) return;
    drawer.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (isOpen) renderDrawerContents();
  };

  trigger?.addEventListener('click', () => toggleDrawer(true));
  closeBtn?.addEventListener('click', () => toggleDrawer(false));
  drawer?.addEventListener('click', (e) => {
    if (e.target === drawer) toggleDrawer(false);
  });
  browseMoreBtn?.addEventListener('click', () => {
    toggleDrawer(false);
    document.getElementById('portfolio-section')?.scrollIntoView({ behavior: 'smooth' });
  });
};

const updateMoodboardCount = () => {
  const badge = document.getElementById('moodboard-count-badge');
  if (badge) {
    badge.textContent = state.moodboard.length;
  }
};

const toggleMoodboard = (lookId) => {
  const item = PORTFOLIO.find(p => p.id === lookId);
  if (!item) return;

  const index = state.moodboard.indexOf(lookId);
  if (index === -1) {
    state.moodboard.push(lookId);
    showToast(`Saved "${item.title}" to your Bridal Moodboard`);
  } else {
    state.moodboard.splice(index, 1);
    showToast(`Removed "${item.title}" from your Bridal Moodboard`);
  }

  localStorage.setItem('tbf_bridal_moodboard', JSON.stringify(state.moodboard));
  updateMoodboardCount();

  document.querySelectorAll(`.portfolio-bookmark-btn[data-id="${lookId}"]`).forEach(btn => {
    btn.classList.toggle('active', state.moodboard.includes(lookId));
  });

  renderDrawerContents();
};

const renderDrawerContents = () => {
  const statusContainer = document.getElementById('drawer-enquiry-status');
  const itemsContainer = document.getElementById('drawer-moodboard-items');
  const countEl = document.getElementById('drawer-looks-count');
  const shareBtn = document.getElementById('drawer-whatsapp-share-btn');

  // 1. Render Enquiry Status if available
  if (statusContainer) {
    if (state.lastEnquiry) {
      statusContainer.innerHTML = `
        <div style="background: rgba(37, 211, 102, 0.08); border: 1px solid rgba(37, 211, 102, 0.3); border-radius: 10px; padding: 12px;">
          <div style="display: flex; align-items: center; gap: 6px; font-size: 0.75rem; font-weight: 700; color: #128C7E; margin-bottom: 4px;">
            <span class="status-pulse-dot"></span>
            <span>Active Enquiry Logged</span>
          </div>
          <div style="font-size: 0.84rem; font-weight: 600; color: var(--color-primary-dark);">${state.lastEnquiry.name}</div>
          <div style="font-size: 0.78rem; color: var(--color-text-muted);">
            Date: <strong>${state.lastEnquiry.date || 'TBD'}</strong> &bull; Venue: <strong>${state.lastEnquiry.venue}</strong>
          </div>
        </div>
      `;
    } else {
      statusContainer.innerHTML = `
        <div style="background: rgba(131, 24, 67, 0.04); border: 1px solid rgba(212, 175, 55, 0.25); border-radius: 10px; padding: 12px; font-size: 0.8rem; color: var(--color-text-muted);">
          No active booking inquiry yet. Submit the form below to check Dr. Bhanu Kalaivani's wedding date availability!
        </div>
      `;
    }
  }

  // 2. Render Saved Moodboard Looks
  const savedLooks = PORTFOLIO.filter(p => state.moodboard.includes(p.id));
  if (countEl) countEl.textContent = `${savedLooks.length} Saved`;

  if (itemsContainer) {
    if (savedLooks.length === 0) {
      itemsContainer.innerHTML = `
        <div style="text-align: center; padding: 20px 10px; color: var(--color-text-muted); font-size: 0.82rem;">
          Your moodboard is empty.<br>Click the bookmark icon on any portfolio look to save it for your consultation!
        </div>
      `;
    } else {
      itemsContainer.innerHTML = savedLooks.map(item => `
        <div class="drawer-moodboard-card">
          <img src="${item.image}" alt="${item.title}" class="drawer-moodboard-img">
          <div class="drawer-moodboard-info">
            <span class="drawer-moodboard-category">${item.categoryLabel}</span>
            <div class="drawer-moodboard-title">${item.title}</div>
          </div>
          <button class="drawer-moodboard-remove" data-id="${item.id}" aria-label="Remove look" title="Remove look">
            &times;
          </button>
        </div>
      `).join('');

      itemsContainer.querySelectorAll('.drawer-moodboard-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleMoodboard(btn.dataset.id);
        });
      });
    }
  }

  // 3. Format WhatsApp Share link
  if (shareBtn) {
    const brideName = state.lastEnquiry ? state.lastEnquiry.name : 'Prospective Bride';
    const weddingDate = state.lastEnquiry ? state.lastEnquiry.date : 'Upcoming Wedding';
    const looksList = savedLooks.map(l => `• ${l.title} (${l.categoryLabel})`).join('\n');

    const shareText = encodeURIComponent(
      `Hello Dr. Bhanu Kalaivani / The Beauty Factory,\n\n` +
      `Here is my Bridal Trial Moodboard:\n` +
      `• Bride: ${brideName}\n` +
      `• Date: ${weddingDate}\n\n` +
      `Saved Looks from Portfolio:\n${looksList || '• Interested in bespoke bridal consultation'}\n\n` +
      `I would love to discuss these looks for my wedding!`
    );

    shareBtn.href = `https://wa.me/916238760270?text=${shareText}`;
  }
};

// Portfolio Gallery Engine
const renderPortfolio = (category = 'all') => {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  const filtered = category === 'all'
    ? PORTFOLIO
    : PORTFOLIO.filter(p => p.category === category);

  grid.innerHTML = filtered.map(item => {
    const isSaved = state.moodboard.includes(item.id);
    return `
      <article class="portfolio-card" data-id="${item.id}" tabindex="0" role="button" aria-label="View details for ${item.title}">
        <div class="portfolio-image-wrapper">
          <img src="${item.image}" alt="${item.title}" loading="lazy" width="400" height="533">
          <span class="portfolio-badge">${item.categoryLabel}</span>
          <button class="portfolio-bookmark-btn ${isSaved ? 'active' : ''}" data-id="${item.id}" aria-label="Save to Moodboard" title="Save to Moodboard">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        </div>
        <div class="portfolio-content">
          <h3 class="portfolio-title">${item.title}</h3>
          <p class="portfolio-desc">${item.description}</p>
          <div class="portfolio-tags">
            ${item.tags.map(t => `<span class="portfolio-tag-pill">${t}</span>`).join('')}
          </div>
          <div class="portfolio-footer">
            <span class="portfolio-action-link">View Artistry Details &rarr;</span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.portfolio-bookmark-btn')) {
        const id = e.target.closest('.portfolio-bookmark-btn').dataset.id;
        toggleMoodboard(id);
        return;
      }
      openLightbox(card.dataset.id);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(card.dataset.id);
      }
    });
  });
};

const initPortfolioFilters = () => {
  const tabs = document.querySelectorAll('.portfolio-filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.category;
      state.activeCategory = cat;
      renderPortfolio(cat);
    });
  });

  renderPortfolio('all');
};

// Lightbox / Quick View Modal
const initLightboxModal = () => {
  const modal = document.getElementById('portfolio-modal');
  const closeBtn = document.getElementById('portfolio-modal-close');

  if (!modal) return;

  const close = () => modal.classList.remove('open');
  closeBtn?.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) close();
  });
};

const openLightbox = (lookId) => {
  const item = PORTFOLIO.find(p => p.id === lookId);
  const modal = document.getElementById('portfolio-modal');
  if (!item || !modal) return;

  document.getElementById('pm-img').src = item.image;
  document.getElementById('pm-img').alt = item.title;
  document.getElementById('pm-badge').textContent = item.categoryLabel;
  document.getElementById('pm-title').textContent = item.title;
  document.getElementById('pm-desc').textContent = item.description;
  document.getElementById('pm-notes').textContent = item.artistNotes;

  const tagsContainer = document.getElementById('pm-tags');
  if (tagsContainer) {
    tagsContainer.innerHTML = item.tags.map(t => `<span class="portfolio-tag-pill">${t}</span>`).join('');
  }

  const enquireBtn = document.getElementById('pm-enquire-btn');
  if (enquireBtn) {
    enquireBtn.onclick = () => {
      modal.classList.remove('open');
      const notesEl = document.getElementById('enquiry-notes');
      if (notesEl) {
        notesEl.value = `Enquiring for bridal look: "${item.title}" (${item.categoryLabel}).`;
      }
      document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
      showToast(`Selected "${item.title}" for your bridal consultation!`);
    };
  }

  modal.classList.add('open');
};

// Render Active Enquiry Status Card in Booking Section
const renderActiveEnquiryCard = (enquiry) => {
  const pane = document.querySelector('.booking-form-pane');
  if (!pane) return;

  const whatsappMsg = encodeURIComponent(
    `Hello Dr. Bhanu Kalaivani / The Beauty Factory,\n\n` +
    `I have enquired for my wedding:\n` +
    `• Bride: ${enquiry.name}\n` +
    `• Date: ${enquiry.date}\n` +
    `• City/Venue: ${enquiry.venue}\n` +
    `• Services: ${enquiry.services}\n` +
    `• Phone: ${enquiry.phone}\n\n` +
    `Could you please verify availability and share package details?`
  );
  const whatsappUrl = `https://wa.me/916238760270?text=${whatsappMsg}`;

  pane.innerHTML = `
    <div class="active-enquiry-card">
      <div class="enquiry-status-badge">
        <span class="status-pulse-dot"></span>
        <span>Enquiry Logged &bull; Under Calendar Review</span>
      </div>
      <h3 class="enquiry-card-title">Thank You, <span style="color: var(--color-forest); font-weight: 800;">${enquiry.name}</span>!</h3>
      <p class="enquiry-card-desc">
        Your wedding availability request has been logged. Dr. Bhanu Kalaivani's studio coordinator will connect with you on WhatsApp/Phone shortly to verify the date.
      </p>

      <div class="enquiry-card-summary">
        <div><strong>Wedding Date:</strong> ${enquiry.date || 'To be scheduled'}</div>
        <div><strong>City / Venue:</strong> ${enquiry.venue}</div>
        <div><strong>Selected Services:</strong> ${enquiry.services}</div>
        <div><strong>Contact Phone:</strong> ${enquiry.phone}</div>
      </div>

      <div class="enquiry-card-actions">
        <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-forest-primary" style="width: 100%;">
          Chat Directly on WhatsApp &rarr;
        </a>
        <button id="open-moodboard-suite-btn" class="btn btn-sm" style="width: 100%; border: 1px solid #DED8CF; background: #FFFFFF; color: #16281E;">
          View Saved Looks in Moodboard
        </button>
      </div>

      <div style="margin-top: 14px; text-align: center;">
        <button id="reset-enquiry-form-btn" style="font-size: 0.78rem; color: #8C6F47; text-decoration: underline; background: none; border: none; cursor: pointer;">
          Need to submit another function or change details? Click here.
        </button>
      </div>
    </div>
  `;

  document.getElementById('open-moodboard-suite-btn')?.addEventListener('click', () => {
    document.getElementById('moodboard-trigger')?.click();
  });

  document.getElementById('reset-enquiry-form-btn')?.addEventListener('click', () => {
    state.lastEnquiry = null;
    localStorage.removeItem('tbf_last_enquiry');
    window.location.reload();
  });
};

// Bridal Booking & Availability Enquiry Form
const initEnquiryForm = () => {
  const form = document.getElementById('bridal-enquiry-form');

  // If already enquired, show the active status card
  if (state.lastEnquiry) {
    renderActiveEnquiryCard(state.lastEnquiry);
    return;
  }

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('enquiry-name').value;
    const phone = document.getElementById('enquiry-phone').value;
    const email = document.getElementById('enquiry-email').value;
    const date = document.getElementById('enquiry-date').value;
    const venue = document.getElementById('enquiry-venue').value;
    const services = Array.from(document.querySelectorAll('input[name="services"]:checked')).map(cb => cb.value).join(', ');
    const notes = document.getElementById('enquiry-notes').value;

    const enquiryData = {
      id: Date.now(),
      name,
      phone,
      email,
      date,
      venue,
      services: services || 'Bridal Makeup',
      notes,
      submittedAt: new Date().toLocaleString()
    };

    // Save state
    state.lastEnquiry = enquiryData;
    localStorage.setItem('tbf_last_enquiry', JSON.stringify(enquiryData));

    try {
      const enquiries = JSON.parse(localStorage.getItem('tbf_bridal_enquiries') || '[]');
      enquiries.unshift(enquiryData);
      localStorage.setItem('tbf_bridal_enquiries', JSON.stringify(enquiries));
    } catch (err) {
      console.warn('Could not persist to localStorage:', err);
    }

    // Populate and open Confirmation Modal
    const modal = document.getElementById('confirmation-modal');
    if (modal) {
      document.getElementById('confirm-bride-name').textContent = name;
      document.getElementById('confirm-date').textContent = date || 'To be scheduled with coordinator';
      document.getElementById('confirm-venue').textContent = venue || 'Direct on-location / Studio';
      document.getElementById('confirm-services').textContent = services || 'Bridal Artistry Consultation';
      document.getElementById('confirm-phone').textContent = phone;

      const whatsappLink = document.getElementById('confirm-whatsapp-link');
      if (whatsappLink) {
        const text = encodeURIComponent(
          `Hello The Beauty Factory / Dr. Bhanu Kalaivani,\n\n` +
          `I would like to enquire about bridal makeup availability:\n` +
          `• Bride: ${name}\n` +
          `• Date: ${date || 'TBD'}\n` +
          `• City/Venue: ${venue}\n` +
          `• Services: ${services || 'Bridal Makeup'}\n` +
          `• Phone: ${phone}\n` +
          `• Notes: ${notes || 'None'}\n\n` +
          `Please let me know if Dr. Bhanu Kalaivani is available on this date!`
        );
        whatsappLink.href = `https://wa.me/916238760270?text=${text}`;
      }

      modal.classList.add('open');
    }

    // Render active card in place of form
    renderActiveEnquiryCard(enquiryData);
    showToast('Your Bridal Enquiry has been registered with Dr. Bhanu Kalaivani\'s team!');
  });
};

// Confirmation Modal Close
const initConfirmationModal = () => {
  const modal = document.getElementById('confirmation-modal');
  const closeBtn = document.getElementById('confirmation-close');
  const okBtn = document.getElementById('confirmation-ok-btn');

  const close = () => {
    modal?.classList.remove('open');
    // Scroll smoothly to portfolio so bride can continue exploring looks
    showToast('Explore our bridal portfolio and bookmark your favorite looks!');
  };

  closeBtn?.addEventListener('click', close);
  okBtn?.addEventListener('click', close);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });
};

// Ceremony Service Quick Booking Handler
const initServiceBookingButtons = () => {
  document.querySelectorAll('.service-book-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const serviceName = btn.dataset.service;
      const bookingSection = document.getElementById('booking-section');

      // If active inquiry card is rendered, reset so bride can submit another ceremony
      if (state.lastEnquiry) {
        state.lastEnquiry = null;
        localStorage.removeItem('tbf_last_enquiry');
        window.location.reload();
        return;
      }

      // Check corresponding checkbox
      const checkboxes = document.querySelectorAll('input[name="services"]');
      checkboxes.forEach(cb => {
        if (cb.value.toLowerCase().includes(serviceName.toLowerCase()) || serviceName.toLowerCase().includes(cb.value.toLowerCase())) {
          cb.checked = true;
        }
      });

      const notesEl = document.getElementById('enquiry-notes');
      if (notesEl && !notesEl.value) {
        notesEl.value = `Enquiring for ceremony artistry: ${serviceName}.`;
      }

      bookingSection?.scrollIntoView({ behavior: 'smooth' });
      showToast(`Selected "${serviceName}" for your date enquiry!`);
    });
  });
};

// FAQ Accordion
const initFaqs = () => {
  const items = document.querySelectorAll('.faq-card');
  items.forEach(card => {
    const header = card.querySelector('.faq-header');
    header.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');
      items.forEach(c => c.classList.remove('open'));
      if (!isOpen) {
        card.classList.add('open');
      }
    });
  });
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileDrawer();
  initMoodboard();
  initPortfolioFilters();
  initLightboxModal();
  initServiceBookingButtons();
  initEnquiryForm();
  initConfirmationModal();
  initFaqs();
});
