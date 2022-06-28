/**
 * Author : ToMinhY
 * Function : Quy đổi tiền
 * Releasve : 28/06/2022
 */


/**
 * ? Khối 1: Input => Giá 1USD = 23.500VND
 * 
 * * Khối 2: Các bước thực hiện
 * * B1: Tạo biến USD và cho người dùng nhập vào sau đó gán giá trị
 * * B2: Tạo hằng số để quy đổi CASH = 23.500vnd
 * * B3: Lập công thức quy đổi tiền tệ từ USD sang VND = (vd : 2usd = 2 * CASH = 47.000VND)
 * 
 * ! Khối 3: Thông báo kết quả ra màn hình : VD 2USD = 47.000VND
 * 
 */

let vnd = 23.500;
let usd = 2;
let quyDoi = 2 * 23.500;
let money = quyDoi.toFixed(3);

console.log('Tiền quy đổi = ',money +'VND')
