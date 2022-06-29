/**
 * Author : ToMinhY
 * Function : Tính tổng 2 ký số
 * Releasve : 29/06/2022
 */

/**
 * ?Khối 1: Input => VD 12 và 44 
 * 
 * *Khối 2: Các bước thực hiện
 * *B1: Khai báo biến các số có 2 chữ số và gán lại giá trị
 * *B2: Lập công thức tách lấy soHangDonVi và soHangChuc
 * *B3: công thức tách soHangDonvi = n/10;
 * *B4: công thức tách soHangChuc = n%10;
 * *B5: Cộng 2 kết quả lại 
 * 
 * !Khối 3: Thông báo kết quả ra màn hình
 */

var num = 12;
var soHangChuc = 0;
var soHangDonVi = 0;
var tinhTong = 0;
tinhTong = (num % 10) + (Math.floor(num / 10));
console.log('Tổng =' ,tinhTong)