const ratings = ["Nie podoba mi się..", "Mogło być lepiej", "Jest przeciętnie", "Podoba mi się!", "Jest super!"]
let rateFormOpened = false
for (let i=0;i<ratings.length;i++){
    $(`.rateForm #rate-${i+1}`).change(function(){
        $(".rateForm form").css("display", "block");
        $(".rateForm header").text(ratings[i]);
    });
}

$("#rateSubmit").click(function(){
    $(".rateForm").css("display", "none")
})

function SwitchRateForm(){
    rateFormOpened = !rateFormOpened;
    if (rateFormOpened){
        $('.rateForm').css('display', 'flex');
        $(".rateForm form").css("display", "none");
        for (let i=0;i<ratings.length;i++){
            $(`.rateForm #rate-${i+1}`).prop("checked", false)
        }
    }else{
        $('.rateForm').css('display', 'none');
    }
}