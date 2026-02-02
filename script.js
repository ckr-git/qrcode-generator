const textInput = document.getElementById('text-input');
const generateBtn = document.getElementById('generate-btn');
const qrcodeDiv = document.getElementById('qrcode');
const downloadBtn = document.getElementById('download-btn');

let qrcode = null;

generateBtn.addEventListener('click', function() {
    const text = textInput.value.trim();

    if (!text) {
        alert('请输入内容');
        return;
    }

    // 清除旧的二维码
    qrcodeDiv.innerHTML = '';

    // 生成新的二维码
    qrcode = new QRCode(qrcodeDiv, {
        text: text,
        width: 200,
        height: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });

    downloadBtn.style.display = 'inline-block';
});

// 下载功能
downloadBtn.addEventListener('click', function() {
    const canvas = qrcodeDiv.querySelector('canvas');
    if (canvas) {
        canvas.toBlob(function(blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = 'qrcode.png';
            link.href = url;
            link.click();
            URL.revokeObjectURL(url);
        }, 'image/png');
    }
});
