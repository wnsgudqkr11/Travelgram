  const fileInput = document.getElementById("file-upload");
  fileInput.addEventListener("change", function () {
    if (this.files.length > 0) {
    }
  });


//   const fileInput = document.getElementById('fileInput'); 
  const previewImage = document.getElementById('previewImage');

  fileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        previewImage.src = e.target.result;
        document.getElementById('upload').style.display = 'none';
        document.getElementById('preview').style.display = 'flex';
      };
      reader.readAsDataURL(file);
    }
  });


//   const fileInput = document.getElementById('fileInput'); // 실제 input id 확인!
//   const previewImage = document.getElementById('previewImage');

//   fileInput.addEventListener('change', function () {
//     const file = this.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         previewImage.src = e.target.result;
//         document.getElementById('upload').style.display = 'none';
//         document.getElementById('preview').style.display = 'flex';
//       };
//       reader.readAsDataURL(file);
//     }
//   });




