function xuly() {
    var thang = document.getElementById('month').value;

    switch (thang) {
        case "1":
            text = "Tháng một có 31 day";
            document.getElementById("ketqua").innerHTML = text;
            break; 
        case "2":
            text = "Tháng hai có 28 hoặc 29 day";
            document.getElementById("ketqua").innerHTML = text;
            break; 
        default: 
            text = "Tháng này có 30 day";
            document.getElementById("ketqua").innerHTML = text;
            break;
    }


    

    
}