/**
 * Author : ToMinhY
 * Function : Tính Chu vi diện tích HCN
 * Releasve : 28/06/2022
 */

/**
 * ?Khối 1: Input => Giả sử cho nhập vào 2 cạnh chiều dài và chiều rộng của HCN
 * 
 * *Khối 2: Các bước thực hiện
 * *B1: Khai báo biến các cạnh chiều dài và chiều rộng HCN và gán giá trị 
 * *B2: Lập công thức tính chu vi , diện tích 
 * *B3: Chu vi HCN = (dai + rong ) * 2
 * *B4: Diện tích HCN = dai * rong
 * 
 * !Khối 3: Thông báo kết quả ra màn hình
 */


var cDai = 8;
var cRong = 6;
var Cvi = 0;
var dTich = 0;
Cvi = (cDai + cRong) * 2;
dTich = cDai * cRong ;
console.log('Chu vi HCN =',Cvi ,'cm');
console.log('Diện tích HCN =',dTich ,'cm')