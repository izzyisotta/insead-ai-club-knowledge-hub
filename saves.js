(function () {
  const KEY = 'inseadAIClub_saved';

  const get = () => {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); }
    catch { return []; }
  };
  const set = arr => localStorage.setItem(KEY, JSON.stringify(arr));
  const isSaved = slug => get().includes(slug);
  const toggle = slug => {
    const arr = get();
    const i = arr.indexOf(slug);
    if (i === -1) arr.push(slug);
    else arr.splice(i, 1);
    set(arr);
    return i === -1;
  };

  const updateBtn = btn => {
    const slug = btn.dataset.slug;
    const saved = isSaved(slug);
    btn.classList.toggle('is-saved', saved);
    btn.setAttribute('aria-pressed', saved ? 'true' : 'false');
    btn.setAttribute('aria-label', saved ? 'Saved (click to unsave)' : 'Save post');
    const label = btn.querySelector('.save-label');
    if (label) label.textContent = saved ? 'Saved' : 'Save';
  };

  const init = () => {
    document.querySelectorAll('.save-btn[data-slug]').forEach(btn => {
      updateBtn(btn);
      btn.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        toggle(btn.dataset.slug);
        // Update all instances of the same slug across the page
        document.querySelectorAll(`.save-btn[data-slug="${btn.dataset.slug}"]`).forEach(updateBtn);
        // If we're on the saved page, hide just-unsaved items
        if (document.body.dataset.page === 'saved') filterSavedPage();
      });
    });

    if (document.body.dataset.page === 'saved') filterSavedPage();
  };

  const filterSavedPage = () => {
    const saved = get();
    const items = document.querySelectorAll('.post-list li.post-row');
    let visible = 0;
    items.forEach(li => {
      const link = li.querySelector('.row-link[data-slug]');
      const slug = link ? link.dataset.slug : null;
      if (slug && saved.includes(slug)) {
        li.style.display = '';
        visible++;
      } else {
        li.style.display = 'none';
      }
    });
    const emptyEl = document.querySelector('.saved-empty');
    const countEl = document.querySelector('.saved-count');
    if (emptyEl) emptyEl.style.display = visible === 0 ? '' : 'none';
    if (countEl) countEl.textContent = visible === 1 ? '1 saved post' : visible + ' saved posts';
    // hide the categories section + filter row on saved page when nothing saved
    const filterRow = document.querySelector('.filter-row');
    if (filterRow) filterRow.style.display = visible === 0 ? 'none' : '';
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
