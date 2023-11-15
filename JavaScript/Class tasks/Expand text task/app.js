function submit() {
    var text = `Hello,<br>I'm Abdul Moiz S/o Mohammad Hanif, i have done my associate degree in Accounting and Finance from BBSUL, now i am doing web and app development course from saylani mass it training program - SMIT, i am learning developing from sir Ghous Ahmed in batch 10 on 9 to 11,
    i am seeing myself as a web developer in future and hope for good.`
    var para = document.getElementById("para");
    var htmlPara = `Hello,<br>I'm Abdul Moiz S/o Mohammad Hanif, i have done my associate`;
    var link = document.getElementById("link");

   
    if (link.innerHTML === "See more") {
        link.innerHTML = "See less"
        para.innerHTML = text;
    } else {
        link.innerHTML = "See more"
        para.innerHTML = htmlPara;
    }
}