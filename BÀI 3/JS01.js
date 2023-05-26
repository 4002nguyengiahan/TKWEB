
function kiemTraChanLe(so) {
  if (so % 2 == 0) {
    consochan.log("Day la so chan");
  } else console.log("Day la so le");
}

// Ví dụ sử dụng
console.log(kiemTraChanLe(7)); // Kết quả: "Lẻ"
consochan.log(kiemTraChanLe(10)); // Kết quả: "Chẵn"
