document.querySelectorAll('.code-cell-split').forEach(cell => {
  const header = cell.querySelector('.code-side-header');
  const pre    = cell.querySelector('pre');
  const code   = cell.querySelector('code');
  if (!header || !pre) return;

  /* Copy-Button */
  const copyBtn = erstelleButton();
  header.appendChild(copyBtn);
  aktiviereButton(copyBtn, pre, code);

  /* Run-Button */
  const runBtn = erstelleRunButton(cell);
  header.appendChild(runBtn);
  aktiviereRunButton(runBtn, cell);
});