export const Modal = {
    show: (content) => {
        const modal = document.getElementById('programModal');
        modal.innerHTML = `
            <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
                <div class="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full p-6">
                    ${content}
                </div>
            </div>
        `;
        modal.classList.remove('hidden');
    },

    hide: () => {
        const modal = document.getElementById('programModal');
        modal.classList.add('hidden');
    }
}; 