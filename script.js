document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('signature-canvas');
    const ctx = canvas.getContext('2d');
    const clearBtn = document.getElementById('clear-btn');
    const saveBtn = document.getElementById('save-btn');

    // Set canvas dimensions
    canvas.width = 600;
    canvas.height = 300;

    let isDrawing = false;
    let x = 0;
    let y = 0;

    // Add event listeners for mouse events
    canvas.addEventListener('mousedown', (event) => {
        x = event.offsetX;
        y = event.offsetY;
        isDrawing = true;
    });

    canvas.addEventListener('mousemove', (event) => {
        if (isDrawing) {
            drawLine(ctx, x, y, event.offsetX, event.offsetY);
            x = event.offsetX;
            y = event.offsetY;
        }
    });

    canvas.addEventListener('mouseup', () => {
        if (isDrawing) {
            isDrawing = false;
        }
    });

    canvas.addEventListener('mouseout', () => {
        if (isDrawing) {
            isDrawing = false;
        }
    });

    // Clear the canvas
    clearBtn.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Save the canvas as an image
    saveBtn.addEventListener('click', () => {
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'signature.png';
        link.click();
    });

    // Function to draw a line
    function drawLine(ctx, x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
    }
});
