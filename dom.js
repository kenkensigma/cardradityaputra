function toggleView(view, button) {
    const tableData = document.getElementById('data');
    const portfolioContent = document.getElementById('portofolioRadit');
    const mantapContainer = document.querySelector('.mantap');
    const existingButton = document.querySelector('#tableButton, #portfolioButton');

    // Sembunyikan tombol pertama saat ditekan
    if (button) {
        button.style.display = 'none';
    }

    // Hapus tombol yang ada sebelumnya agar tidak muncul di posisi yang salah
    if (existingButton) {
        existingButton.remove();
    }

    if (view === 'table') {
        tableData.classList.remove('hidden');  // Tampilkan tabel
        portfolioContent.classList.add('hidden');  // Sembunyikan portofolio

        // Tambahkan tombol "Portofolio" di posisi yang sama
        const portfolioButton = document.createElement('button');
        portfolioButton.id = 'portfolioButton';
        portfolioButton.textContent = 'Portofolio';
        portfolioButton.onclick = () => toggleView('portfolio');
        mantapContainer.appendChild(portfolioButton);

    } else {
        portfolioContent.classList.remove('hidden');  // Tampilkan portofolio
        tableData.classList.add('hidden');  // Sembunyikan tabel

        // Tambahkan tombol "Tabel" di posisi yang sama
        const tableButton = document.createElement('button');
        tableButton.id = 'tableButton';
        tableButton.textContent = 'Tabel';
        tableButton.onclick = () => toggleView('table');
        mantapContainer.appendChild(tableButton);
    }
}
