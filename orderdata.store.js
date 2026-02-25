// ===== PACIFIC SELLER'S - EXCEL BACKED STORE =====
(function () {
  'use strict';

  const DB_PREFIX = 'ps_';
  const WORKBOOK_CACHE_KEY = DB_PREFIX + 'orderdata_workbook_b64';
  const SHEET_MAP = {
    products: 'Products',
    orders: 'Orders',
    manufacturers: 'Manufacturers'
  };

  function readJson(key) {
    try { return JSON.parse(localStorage.getItem(DB_PREFIX + key) || '[]'); } catch { return []; }
  }

  function writeJson(key, value) {
    localStorage.setItem(DB_PREFIX + key, JSON.stringify(value));
  }

  function getDB(key) {
    return readJson(key);
  }

  function setDB(key, value) {
    writeJson(key, value);
    syncWorkbookCache();
  }

  function buildWorkbookData() {
    return {
      products: readJson('products'),
      orders: readJson('orders'),
      manufacturers: readJson('manufacturers')
    };
  }

  function canUseXlsx() {
    return typeof window.XLSX !== 'undefined';
  }

  function syncWorkbookCache() {
    if (!canUseXlsx()) return;
    const wb = window.XLSX.utils.book_new();
    const data = buildWorkbookData();

    Object.keys(SHEET_MAP).forEach((dbKey) => {
      const rows = Array.isArray(data[dbKey]) ? data[dbKey] : [];
      const ws = window.XLSX.utils.json_to_sheet(rows);
      window.XLSX.utils.book_append_sheet(wb, ws, SHEET_MAP[dbKey]);
    });

    const b64 = window.XLSX.write(wb, { bookType: 'xlsx', type: 'base64' });
    localStorage.setItem(WORKBOOK_CACHE_KEY, b64);
  }

  function restoreFromWorkbookCache() {
    if (!canUseXlsx()) return;
    const b64 = localStorage.getItem(WORKBOOK_CACHE_KEY);
    if (!b64) return;

    try {
      const wb = window.XLSX.read(b64, { type: 'base64' });
      Object.keys(SHEET_MAP).forEach((dbKey) => {
        const sheetName = SHEET_MAP[dbKey];
        const ws = wb.Sheets[sheetName];
        if (!ws) return;
        const rows = window.XLSX.utils.sheet_to_json(ws, { defval: '' });
        if (!readJson(dbKey).length && rows.length) {
          writeJson(dbKey, rows);
        }
      });
    } catch (_) {
      // Ignore malformed workbook cache and continue with localStorage JSON.
    }
  }

  function exportWorkbook(filename) {
    if (!canUseXlsx()) return false;
    syncWorkbookCache();
    const b64 = localStorage.getItem(WORKBOOK_CACHE_KEY);
    if (!b64) return false;
    const wb = window.XLSX.read(b64, { type: 'base64' });
    window.XLSX.writeFile(wb, filename || 'orderdata.xlsx');
    return true;
  }

  function init() {
    restoreFromWorkbookCache();
    syncWorkbookCache();
  }

  window.PSDataStore = {
    init,
    getDB,
    setDB,
    exportWorkbook
  };

  window.exportOrderDataExcel = function () {
    return exportWorkbook('orderdata.xlsx');
  };
})();
