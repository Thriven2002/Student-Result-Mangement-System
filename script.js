document.addEventListener('DOMContentLoaded', function() {
    const resultForm = document.getElementById('resultForm');
    const resultList = document.getElementById('resultList');

    resultForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const studentName = document.getElementById('studentName').value;
        const maths = parseInt(document.getElementById('maths').value);
        const science = parseInt(document.getElementById('science').value);
        const english = parseInt(document.getElementById('english').value);
        const total = maths + science + english;
        const average = total / 3;

        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `
            <p><span>Name:</span> ${studentName}</p>
            <p><span>Maths:</span> ${maths}</p>
            <p><span>Science:</span> ${science}</p>
            <p><span>English:</span> ${english}</p>
            <p><span>Total:</span> ${total}</p>
            <p><span>Average:</span> ${average.toFixed(2)}</p>
        `;
        
        resultList.appendChild(resultItem);
        
        resultForm.reset();
    });
});
