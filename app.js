const pageNames = {
  about: "About",
  "getting-started": "Getting Started",
  features: "Features",
  "how-to-use": "How to Use",
  "commands-overview": "Command List Overview",
  "commands-slash": "Slash Commands",
  "commands-slash-moderation": "Moderation",
  "commands-slash-utility": "Utility",
  "commands-slash-fun": "Fun",
  "commands-slash-gifs": "GIFs",
  "commands-slash-image": "Image",
  "commands-slash-server-management": "Server Management",
  "commands-slash-support": "Support",
  "commands-slash-text-tools": "Text Tools",
  "commands-slash-security": "Security",
  "commands-slash-tools": "Tools",
  "commands-slash-other": "Other Commands",
  "commands-slash-hire": "Hire Neko",
  "commands-slash-uncategorized": "Uncategorized",
  "commands-prefix": "Prefix Commands",
  "commands-prefix-economy": "Economy",
  "commands-prefix-fun-games": "Fun & Games",
  "commands-prefix-moderation": "Moderation",
  "commands-prefix-utility": "Utility",
  "commands-prefix-lookup": "Look-up",
  "commands-prefix-math-conversion": "Math & Conversion",
  "commands-prefix-meta": "Meta",
  "other-features": "Other Features",
  "other-features-detectors": "Detectors",
  "other-features-quotes-link": "Quotes Message Link",
  support: "Support & Community",
  faqs: "FAQs",
  "troubleshooting-guide": "Troubleshooting Guide",
  changelog: "Changelog"
};

const parentPageIds = {
  "commands-slash-moderation": "commands-slash",
  "commands-slash-utility": "commands-slash",
  "commands-slash-fun": "commands-slash",
  "commands-slash-gifs": "commands-slash",
  "commands-slash-image": "commands-slash",
  "commands-slash-server-management": "commands-slash",
  "commands-slash-support": "commands-slash",
  "commands-slash-text-tools": "commands-slash",
  "commands-slash-security": "commands-slash",
  "commands-slash-tools": "commands-slash",
  "commands-slash-other": "commands-slash",
  "commands-slash-hire": "commands-slash",
  "commands-slash-uncategorized": "commands-slash",
  "commands-prefix-economy": "commands-prefix",
  "commands-prefix-fun-games": "commands-prefix",
  "commands-prefix-moderation": "commands-prefix",
  "commands-prefix-utility": "commands-prefix",
  "commands-prefix-lookup": "commands-prefix",
  "commands-prefix-math-conversion": "commands-prefix",
  "commands-prefix-meta": "commands-prefix",
  "other-features-detectors": "other-features",
  "other-features-quotes-link": "other-features"
};

/* ============================================
   GLOBAL FUNCTIONS
   ============================================ */

function toggleFaqAnswer(event) {
  try {
    const clickedQuestion = event.currentTarget;
    const contentDisplay = document.getElementById("content-display");

    if (!contentDisplay) return;

    contentDisplay.querySelectorAll(".faq-item").forEach((item) => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");

      if (!question || !answer) return;

      if (question === clickedQuestion) {
        question.classList.toggle("open");
        answer.classList.toggle("open");

        if (answer.classList.contains("open")) {
          answer.style.maxHeight = answer.scrollHeight + "px";
          question.setAttribute("aria-expanded", "true");
        } else {
          answer.style.maxHeight = "0";
          question.setAttribute("aria-expanded", "false");
        }
      } else {
        if (question.classList.contains("open")) {
          question.classList.remove("open");
          answer.classList.remove("open");
          answer.style.maxHeight = "0";
          question.setAttribute("aria-expanded", "false");
        }
      }
    });
  } catch (error) {
    console.error("Failed to toggle FAQ answer:", error);
  }
}

function initializeFaqAccordion() {
  try {
    const contentDisplay = document.getElementById("content-display");

    if (!contentDisplay) return;

    contentDisplay.querySelectorAll(".faq-question").forEach((question) => {
      question.removeEventListener("click", toggleFaqAnswer);
      question.addEventListener("click", toggleFaqAnswer);
    });
  } catch (error) {
    console.error("Failed to initialize FAQ accordion:", error);
  }
}

function updateReadingProgressBar() {
  try {
    const bar = document.getElementById("reading-progress-bar");

    if (!bar) return;

    const docH = document.documentElement.scrollHeight;
    const vpH = document.documentElement.clientHeight;
    const scrolled = document.documentElement.scrollTop;

    bar.style.width =
      docH > vpH
        ? (scrolled / (docH - vpH)) * 100 + "%"
        : "0%";
  } catch (error) {
    console.error("Failed to update reading progress:", error);
  }
}

function updateBreadcrumb(pageId) {
  try {
    const bcParent = document.getElementById("breadcrumb-parent");
    const bcParentSep = document.getElementById("breadcrumb-parent-sep");
    const bcCurrent = document.getElementById("breadcrumb-current");

    if (!bcCurrent) return;

    const parentId = parentPageIds[pageId];

    const currentName =
      pageNames[pageId] ||
      pageId
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());

    if (parentId && bcParent && bcParentSep) {
      bcParent.textContent = pageNames[parentId] || parentId;
      bcParent.setAttribute("data-page-id", parentId);
      bcParent.style.display = "flex";
      bcParentSep.style.display = "flex";

      bcParent.onclick = (e) => {
        e.preventDefault();
        loadContent(parentId);
      };
    } else if (bcParent && bcParentSep) {
      bcParent.style.display = "none";
      bcParentSep.style.display = "none";
    }

    bcCurrent.textContent = currentName;
  } catch (error) {
    console.error("Failed to update breadcrumb:", error);
  }
}

function loadContent(pageId, updateHistory = true) {
  try {
    const contentDisplay = document.getElementById("content-display");
    const sidebarLinks = document.querySelectorAll(
      "#sidebar-nav .sidebar-link"
    );
    const sidebar = document.getElementById("sidebar");
    const sidebarOverlay = document.getElementById("sidebar-overlay");

    if (!contentDisplay || !sidebarLinks.length) return;

    if (documentationContent[pageId]) {
      contentDisplay.innerHTML = documentationContent[pageId];

      sidebarLinks.forEach((link) => {
        link.classList.remove("active", "sidebar-parent-active");
      });

      const activeLink = document.querySelector(
        `#sidebar-nav [data-page-id="${pageId}"]`
      );

      if (activeLink) {
        activeLink.classList.add("active");

        const parentId = parentPageIds[pageId];

        if (parentId) {
          const parentLink = document.querySelector(
            `#sidebar-nav [data-page-id="${parentId}"]`
          );

          if (parentLink) {
            parentLink.classList.add("sidebar-parent-active");
          }
        }

        const parentSection = activeLink.closest(".sidebar-children");

        if (parentSection) {
          parentSection.classList.add("expanded");

          const toggleBtn = document.querySelector(
            `[data-target="${parentSection.id}"]`
          );

          if (toggleBtn) {
            toggleBtn.classList.add("expanded");
          }
        }
      }

      if (pageId === "faqs") {
        initializeFaqAccordion();
      }

      contentDisplay
        .querySelectorAll(".sidebar-link-in-content")
        .forEach((link) => {
          link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetPageId = e.target.dataset.pageId;

            if (targetPageId) {
              loadContent(targetPageId);
            }
          });
        });

      if (updateHistory) {
        history.pushState(null, "", `#${pageId}`);
      }

      updateBreadcrumb(pageId);

      window.scrollTo({
        top: 0,
        behavior: "auto"
      });

      setTimeout(updateReadingProgressBar, 0);
    } else {
      contentDisplay.innerHTML =
        '<p style="color:#f87171;padding:2rem;">Content for "' +
        pageId +
        '" not found.</p>';
    }

    if (
      window.innerWidth < 1024 &&
      sidebar &&
      sidebarOverlay
    ) {
      sidebar.classList.remove("open");
      sidebarOverlay.classList.remove("show");
    }
  } catch (error) {
    console.error("Failed to load documentation content:", error);

    const contentDisplay = document.getElementById("content-display");

    if (contentDisplay) {
      contentDisplay.innerHTML =
        '<p style="color:#f87171;padding:2rem;">Failed to load this documentation page.</p>';
    }
  }
}

function toggleTheme() {
  try {
    const html = document.documentElement;

    const newTheme =
      html.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";

    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  } catch (error) {
    console.error("Failed to toggle theme:", error);
  }
}

/* ============================================
   DOM CONTENT LOADED
   ============================================ */

document.addEventListener("DOMContentLoaded", function () {
  try {
    const sidebarNav = document.getElementById("sidebar-nav");
    const searchInputMain =
      document.getElementById("search-input-main");
    const searchOverlay =
      document.getElementById("search-overlay");
    const searchInputModal =
      document.getElementById("search-input-modal");
    const searchResultsContainer =
      document.getElementById("search-results");
    const scrollToTopBtn =
      document.getElementById("scrollToTopBtn");
    const themeToggleBtn =
      document.getElementById("theme-toggle-btn");
    const hamburgerBtn =
      document.getElementById("hamburger-btn");
    const closeSidebarBtn =
      document.getElementById("close-sidebar-btn");
    const sidebar =
      document.getElementById("sidebar");
    const sidebarOverlay =
      document.getElementById("sidebar-overlay");
    const breadcrumbHome =
      document.querySelector(".breadcrumb-home");

    if (breadcrumbHome) {
      breadcrumbHome.addEventListener("click", function (e) {
        e.preventDefault();
        loadContent("getting-started");
      });
    }

    /* --- Sidebar collapsible toggles --- */

    document
      .querySelectorAll(".sidebar-toggle")
      .forEach(function (btn) {
        const targetId = btn.getAttribute("data-target");
        const targetEl = document.getElementById(targetId);

        if (targetEl) {
          targetEl.classList.add("expanded");
          btn.classList.add("expanded");
        }

        btn.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();

          if (targetEl) {
            targetEl.classList.toggle("expanded");
            btn.classList.toggle("expanded");
          }
        });
      });

    /* --- Search overlay --- */

    function showSearchOverlay() {
      try {
        if (!searchOverlay || !searchInputModal) return;

        searchOverlay.classList.remove("hidden");

        if (searchInputMain) {
          searchInputModal.value = searchInputMain.value;
        }

        searchInputModal.focus();

        filterSearchResultsModal(searchInputModal.value);
      } catch (error) {
        console.error("Failed to show search overlay:", error);
      }
    }

    function hideSearchOverlay() {
      try {
        if (!searchOverlay || !searchInputModal) return;

        searchOverlay.classList.add("hidden");
        searchInputModal.value = "";

        if (searchResultsContainer) {
          searchResultsContainer.innerHTML = "";
        }
      } catch (error) {
        console.error("Failed to hide search overlay:", error);
      }
    }

    function filterSearchResultsModal(searchTerm) {
      try {
        if (!searchResultsContainer) return;

        searchResultsContainer.innerHTML = "";

        const lower = searchTerm.toLowerCase();
        const results = [];

        for (const pageId in documentationContent) {
          const content = documentationContent[pageId];

          const tmp = document.createElement("div");
          tmp.innerHTML = content;

          const h2 = tmp.querySelector("h2");

          const title = h2
            ? h2.textContent
            : pageId
                .replace(/-/g, " ")
                .replace(/\b\w/g, function (l) {
                  return l.toUpperCase();
                });

          const text = tmp.textContent
            .replace(/\s+/g, " ")
            .trim();

          if (
            !title.toLowerCase().includes(lower) &&
            !text.toLowerCase().includes(lower)
          ) {
            continue;
          }

          let snippet = "";

          const idx = text.toLowerCase().indexOf(lower);

          if (idx !== -1 && lower.length > 0) {
            const start = Math.max(0, idx - 75);
            const end = Math.min(
              text.length,
              idx + lower.length + 75
            );

            snippet =
              (start > 0 ? "..." : "") +
              text.substring(start, end) +
              (end < text.length ? "..." : "");
          } else {
            snippet =
              text.substring(0, 150) +
              (text.length > 150 ? "..." : "");
          }

          results.push({
            id: pageId,
            title,
            snippet
          });
        }

        if (results.length > 0) {
          results.forEach(function (result) {
            const div = document.createElement("div");

            div.classList.add("search-result-item");

            div.innerHTML =
              '<div class="title">' +
              result.title +
              '</div><div class="snippet">' +
              result.snippet +
              "</div>";

            div.addEventListener("click", function () {
              loadContent(result.id);
              hideSearchOverlay();
            });

            searchResultsContainer.appendChild(div);
          });
        } else {
          const none = document.createElement("div");

          none.style.cssText =
            "padding:1rem;color:var(--text-secondary);text-align:center;";

          none.textContent = "No results found.";

          searchResultsContainer.appendChild(none);
        }
      } catch (error) {
        console.error("Failed to filter search results:", error);

        if (searchResultsContainer) {
          searchResultsContainer.innerHTML =
            '<div style="padding:1rem;color:#f87171;text-align:center;">Unable to search documentation.</div>';
        }
      }
    }

    /* --- Scroll & resize --- */

    window.addEventListener(
      "scroll",
      updateReadingProgressBar
    );

    window.addEventListener(
      "resize",
      updateReadingProgressBar
    );

    /* --- Sidebar nav clicks --- */

    if (sidebarNav) {
      sidebarNav.addEventListener("click", function (e) {
        e.preventDefault();

        const link = e.target.closest(".sidebar-link");

        if (link && link.dataset.pageId) {
          loadContent(link.dataset.pageId);
        }
      });
    }

    /* --- Browser back/forward --- */

    window.addEventListener("popstate", function () {
      try {
        const id = window.location.hash.substring(1);

        loadContent(
          id || "getting-started",
          false
        );
      } catch (error) {
        console.error(
          "Failed to handle browser navigation:",
          error
        );
      }
    });

    /* --- Keyboard shortcuts --- */

    document.addEventListener("keydown", function (e) {
      try {
        if (
          (e.ctrlKey || e.metaKey) &&
          e.key.toLowerCase() === "k"
        ) {
          e.preventDefault();
          showSearchOverlay();
        } else if (e.key === "Escape") {
          if (
            searchOverlay &&
            !searchOverlay.classList.contains("hidden")
          ) {
            hideSearchOverlay();
          } else if (
            sidebar &&
            sidebar.classList.contains("open")
          ) {
            sidebar.classList.remove("open");

            if (sidebarOverlay) {
              sidebarOverlay.classList.remove("show");
            }
          }
        }
      } catch (error) {
        console.error(
          "Failed to process keyboard shortcut:",
          error
        );
      }
    });

    if (searchInputMain) {
      searchInputMain.addEventListener(
        "click",
        showSearchOverlay
      );
    }

    if (searchOverlay) {
      searchOverlay.addEventListener("click", function (e) {
        if (e.target === searchOverlay) {
          hideSearchOverlay();
        }
      });
    }

    if (searchInputModal) {
      searchInputModal.addEventListener(
        "input",
        function (e) {
          filterSearchResultsModal(e.target.value);
        }
      );
    }

    /* --- Scroll to top --- */

    window.addEventListener("scroll", function () {
      try {
        if (
          document.body.scrollTop > 200 ||
          document.documentElement.scrollTop > 200
        ) {
          if (scrollToTopBtn) {
            scrollToTopBtn.classList.add("show");
          }
        } else {
          if (scrollToTopBtn) {
            scrollToTopBtn.classList.remove("show");
          }
        }
      } catch (error) {
        console.error(
          "Failed to update scroll-to-top button:",
          error
        );
      }
    });

    if (scrollToTopBtn) {
      scrollToTopBtn.addEventListener(
        "click",
        function () {
          try {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          } catch (error) {
            console.error(
              "Failed to scroll to top:",
              error
            );
          }
        }
      );
    }

    /* --- Dark/Light theme toggle --- */

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener(
        "click",
        function () {
          toggleTheme();
        }
      );
    }

    /* --- Mobile sidebar --- */

    if (hamburgerBtn) {
      hamburgerBtn.addEventListener(
        "click",
        function () {
          try {
            if (!sidebar || !sidebarOverlay) return;

            sidebar.classList.add("open");
            sidebar.classList.remove("hidden");
            sidebarOverlay.classList.add("show");
          } catch (error) {
            console.error(
              "Failed to open mobile sidebar:",
              error
            );
          }
        }
      );
    }

    function closeMobileSidebar() {
      try {
        if (!sidebar || !sidebarOverlay) return;

        sidebar.classList.remove("open");
        sidebarOverlay.classList.remove("show");

        if (window.innerWidth < 1024) {
          setTimeout(function () {
            if (!sidebar.classList.contains("open")) {
              sidebar.classList.add("hidden");
            }
          }, 300);
        }
      } catch (error) {
        console.error(
          "Failed to close mobile sidebar:",
          error
        );
      }
    }

    if (closeSidebarBtn) {
      closeSidebarBtn.addEventListener(
        "click",
        closeMobileSidebar
      );
    }

    if (sidebarOverlay) {
      sidebarOverlay.addEventListener(
        "click",
        closeMobileSidebar
      );
    }

    window.addEventListener("resize", function () {
      try {
        if (!sidebar || !sidebarOverlay) return;

        if (window.innerWidth >= 1024) {
          sidebar.classList.remove("hidden", "open");
          sidebarOverlay.classList.remove("show");
        } else {
          if (!sidebar.classList.contains("open")) {
            sidebar.classList.add("hidden");
          }
        }
      } catch (error) {
        console.error(
          "Failed to handle sidebar resize:",
          error
        );
      }
    });

    /* --- Restore saved theme preference --- */

    try {
      const savedTheme =
        localStorage.getItem("theme") || "dark";

      document.documentElement.setAttribute(
        "data-theme",
        savedTheme
      );
    } catch (error) {
      console.warn(
        "Could not restore saved theme preference:",
        error
      );

      document.documentElement.setAttribute(
        "data-theme",
        "dark"
      );
    }

    /* --- Initial sidebar state --- */

    if (window.innerWidth >= 1024) {
      if (sidebar) {
        sidebar.classList.remove("hidden");
      }
    } else {
      if (sidebar) {
        sidebar.classList.add("hidden");
      }
    }
  } catch (error) {
    console.error(
      "Failed to initialize documentation application:",
      error
    );
  }
});

/* ============================================
   WINDOW LOAD — Initial content
   ============================================ */

window.addEventListener("load", function () {
  try {
    const initialPageId =
      window.location.hash.substring(1) ||
      "getting-started";

    loadContent(initialPageId, false);
  } catch (error) {
    console.error(
      "Failed to initialize initial documentation content:",
      error
    );
  }
});