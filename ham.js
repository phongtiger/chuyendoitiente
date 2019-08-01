function chuyendoi() {
    let soTien = document.getElementById( "soTien").value;
    let tien = parseInt(soTien);
    let tu = parseFloat(document.getElementById("tu").value);
    let sang = parseFloat(document.getElementById("sang").value);
    let kq = (tien*tu)/sang;
    document.getElementById("ketqua").innerHTML="kết quả :" + kq ;
}