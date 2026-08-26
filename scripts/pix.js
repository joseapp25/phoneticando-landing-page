document.addEventListener('DOMContentLoaded', () => {
    const liveRegion = document.querySelector('.pix-live-region');

    function copyToClipboard(text) {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text);
        }
        // Fallback for older browsers or non-secure contexts
        return new Promise((resolve, reject) => {
            const temp = document.createElement('textarea');
            temp.value = text;
            temp.style.position = 'fixed';
            temp.style.opacity = '0';
            document.body.appendChild(temp);
            temp.focus();
            temp.select();
            try {
                document.execCommand('copy');
                resolve();
            } catch (err) {
                reject(err);
            } finally {
                document.body.removeChild(temp);
            }
        });
    }

    document.querySelectorAll('.pix-copy-btn').forEach((button) => {
        button.addEventListener('click', () => {
            const row = button.closest('.pix-key-row');
            const key = row ? row.dataset.key : '';
            if (!key) return;

            copyToClipboard(key)
                .then(() => {
                    const label = button.querySelector('.pix-copy-text');
                    const originalLabel = label.dataset.original || label.textContent;
                    label.dataset.original = originalLabel;

                    button.classList.add('is-copied');
                    label.textContent = 'Copiado!';
                    if (liveRegion) {
                        liveRegion.textContent = 'Chave PIX copiada para a área de transferência.';
                    }

                    clearTimeout(button._resetTimer);
                    button._resetTimer = setTimeout(() => {
                        button.classList.remove('is-copied');
                        label.textContent = originalLabel;
                    }, 1800);
                })
                .catch(() => {
                    if (liveRegion) {
                        liveRegion.textContent = 'Não foi possível copiar a chave. Selecione o texto manualmente.';
                    }
                });
        });
    });
});
