document.addEventListener('DOMContentLoaded', () => {

  // ---- DOM References ----
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const themeToggle = document.getElementById('themeToggle');
  const themeToggleMobile = document.getElementById('themeToggleMobile');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const progressBar = document.getElementById('progressBar');
  const backToTop = document.getElementById('backToTop');
  const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
  const mainContent = document.getElementById('mainContent');

  // ---- Searchable Content Index ----
  const sections = [];
  document.querySelectorAll('.doc-section').forEach(section => {
    const id = section.id;
    const h2 = section.querySelector('h2');
    const subtitle = section.querySelector('.section-subtitle');
    const tag = section.querySelector('.section-tag');
    if (h2) {
      sections.push({
        id,
        title: h2.textContent.trim(),
        subtitle: subtitle ? subtitle.textContent.trim() : '',
        tag: tag ? tag.textContent.trim() : '',
        element: section
      });
    }
  });

  // ---- Theme Management ----
  function getStoredTheme() {
    try { return localStorage.getItem('neko-docs-theme'); } catch { return null; }
  }
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('neko-docs-theme', theme); } catch {}
  }
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  // Initialize theme
  const stored = getStoredTheme();
  if (stored) setTheme(stored);

  themeToggle.addEventListener('click', toggleTheme);
  themeToggleMobile.addEventListener('click', toggleTheme);

  // ---- Mobile Sidebar ----
  function openSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('active');
    hamburgerBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
    hamburgerBtn.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', () => {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });
  sidebarOverlay.addEventListener('click', closeSidebar);

  // Close sidebar when clicking a nav link on mobile
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) closeSidebar();
    });
  });

  // ---- Nav Group Toggles ----
  document.querySelectorAll('.nav-group-toggle').forEach(btn => {
    const group = btn.getAttribute('data-group');
    const sublist = document.getElementById(`group-${group}`);

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      if (expanded) {
        sublist.classList.add('collapsed');
      } else {
        sublist.classList.remove('collapsed');
      }
    });
  });

  // ---- Search ----
  let searchFocusIndex = -1;

  function performSearch(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
      searchResults.classList.remove('active');
      searchResults.innerHTML = '';
      searchFocusIndex = -1;
      return;
    }

    const matches = sections.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.subtitle.toLowerCase().includes(q) ||
      s.tag.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
      searchResults.classList.add('active');
      searchFocusIndex = -1;
      return;
    }

    searchResults.innerHTML = matches.map(m =>
      `<a class="search-result-item" href="#${m.id}" data-section="${m.id}">
        ${m.tag ? `<span class="result-tag">${m.tag}</span>` : ''}
        ${m.title}
      </a>`
    ).join('');

    searchResults.classList.add('active');
    searchFocusIndex = -1;

    // Click handlers for results
    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('data-section');
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        searchInput.value = '';
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
        if (window.innerWidth <= 768) closeSidebar();
      });
    });
  }

  searchInput.addEventListener('input', (e) => performSearch(e.target.value));

  // Keyboard navigation for search
  searchInput.addEventListener('keydown', (e) => {
    const items = searchResults.querySelectorAll('.search-result-item');
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      searchFocusIndex = Math.min(searchFocusIndex + 1, items.length - 1);
      updateSearchFocus(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      searchFocusIndex = Math.max(searchFocusIndex - 1, 0);
      updateSearchFocus(items);
    } else if (e.key === 'Enter' && searchFocusIndex >= 0) {
      e.preventDefault();
      items[searchFocusIndex].click();
    } else if (e.key === 'Escape') {
      searchInput.value = '';
      searchResults.classList.remove('active');
      searchInput.blur();
    }
  });

  function updateSearchFocus(items) {
    items.forEach((item, i) => {
      item.classList.toggle('focused', i === searchFocusIndex);
    });
  }

  // Close search on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.sidebar-search')) {
      searchResults.classList.remove('active');
    }
  });

  // ---- Keyboard Shortcuts ----
  document.addEventListener('keydown', (e) => {
    // "/" to focus search
    if (e.key === '/' && !e.ctrlKey && !e.metaKey && document.activeElement !== searchInput) {
      const tag = document.activeElement.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      e.preventDefault();
      searchInput.focus();
      if (window.innerWidth <= 768) openSidebar();
    }
    // Escape to close things
    if (e.key === 'Escape') {
      if (searchResults.classList.contains('active')) {
        searchResults.classList.remove('active');
        searchInput.value = '';
        searchInput.blur();
      } else if (sidebar.classList.contains('open')) {
        closeSidebar();
      }
    }
  });

  // ---- Reading Progress Bar ----
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  }

  // ---- Back to Top Button ----
  function updateBackToTop() {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---- Active Section Highlighting ----
  function updateActiveSection() {
    const scrollPos = window.scrollY + 120;
    let currentSection = null;

    sections.forEach(s => {
      if (s.element.offsetTop <= scrollPos) {
        currentSection = s;
      }
    });

    if (currentSection) {
      // Update sidebar links
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === currentSection.id) {
          link.classList.add('active');

          // Auto-scroll sidebar to active link
          const nav = document.querySelector('.sidebar-nav');
          const linkRect = link.getBoundingClientRect();
          const navRect = nav.getBoundingClientRect();
          if (linkRect.top < navRect.top || linkRect.bottom > navRect.bottom) {
            link.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          }
        }
      });

      // Update breadcrumb
      breadcrumbCurrent.textContent = currentSection.title;
    }
  }

  // ---- Scroll Event (throttled) ----
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateProgress();
        updateBackToTop();
        updateActiveSection();
        ticking = false;
      });
      ticking = true;
    }
  });

  // ---- Copy Code Buttons ----
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const codeBlock = btn.closest('.code-block');
      const code = codeBlock.querySelector('code');
      if (!code) return;

      navigator.clipboard.writeText(code.textContent).then(() => {
        btn.classList.add('copied');
        const original = btn.innerHTML;
        btn.innerHTML = `
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Copied!
        `;
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = original;
        }, 2000);
      });
    });
  });

  // ---- Smooth Scroll for Sidebar Links ----
  document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Init ----
  updateProgress();
  updateBackToTop();
  updateActiveSection();
});