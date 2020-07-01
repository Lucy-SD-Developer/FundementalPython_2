(function($) {

    $("#btn1").click(function() {
        var radioVal = $("input[name='1']:checked").val();
        if (radioVal==null) {
            alert("Please choose an option!");
        } else if (radioVal=="d") {
            alert("Correct!");
            $("#img1").attr("src", "images/pass.png");
        } else {
            alert("Incorrect...please try again.")
            $("input[name='1']").prop('checked', false);
        }
    })

    $("#btn2").click(function() {
        var radioVal = $("input[name='2']:checked").val();
        if (radioVal==null) {
            alert("Please choose an option!");
        } else if (radioVal=="a") {
            alert("Correct!");
            $("#img2").attr("src", "images/pass.png");
        } else {
            alert("Incorrect...please try again.")
            $("input[name='2']").prop('checked', false);
        }
    })

    $("#btn3").click(function() {
        var radioVal1 = $("input[name='3a1']:checked").val();
        var radioVal2 = $("input[name='3a2']:checked").val();
        var radioVal3 = $("input[name='3a3']:checked").val();
        if (radioVal1==null || radioVal2==null || radioVal3==null) {
            alert("Please choose an option!");
        } else if (radioVal1=="f" && radioVal2=="f" && radioVal3=="t") {
            alert("Correct!");
            $("#img3").attr("src", "images/pass.png");
        } else {
            alert("Incorrect...please try again.")
            $("input[name='3a1']").prop('checked', false);
            $("input[name='3a2']").prop('checked', false);
            $("input[name='3a3']").prop('checked', false);
        }
    })

    $("#btn4").click(function() {
        var myList = "";
        $("input[name='4']").each(function() {
            if (this.checked) {
                myList += $(this).val();
            }
        })
        if (myList=="") {
            alert("Please choose an option!");
        } else if (myList == "abcd") {
            alert("Correct!");
            $("#img4").attr("src", "images/pass.png");
        } else {
            alert("Incorrect...please try again.")
            $("input[name='4']").prop('checked', false);
        }
    })

    $("#btn5").click(function() {
        var myList = "";
        $("input[name='5']").each(function() {
            if (this.checked) {
                myList += $(this).val();
            }
        })
        if (myList=="") {
            alert("Please choose an option!");
        } else if (myList == "abc") {
            alert("Correct!");
            $("#img5").attr("src", "images/pass.png");
        } else {
            alert("Incorrect...please try again.")
            $("input[name='5']").prop('checked', false);
        }
    })

    $("#btn6").click(function() {
        var radioVal = $("input[name='6']:checked").val();
        if (radioVal==null) {
            alert("Please choose an option!");
        } else if (radioVal=="b") {
            alert("Correct!");
            $("#img6").attr("src", "images/pass.png");
        } else {
            alert("Incorrect...please try again.")
            $("input[name='6']").prop('checked', false);
        }
    })

    $("#btn7").click(function() {
        var radioVal = $("input[name='7']:checked").val();
        if (radioVal==null) {
            alert("Please choose an option!");
        } else if (radioVal=="b") {
            alert("Correct!");
            $("#img7").attr("src", "images/pass.png");
        } else {
            alert("Incorrect...please try again.")
            $("input[name='7']").prop('checked', false);
        }
    })

    $("#btn8").click(function() {
        var radioVal = $("input[name='8']:checked").val();
        if (radioVal==null) {
            alert("Please choose an option!");
        } else if (radioVal=="c") {
            alert("Correct!");
            $("#img8").attr("src", "images/pass.png");
        } else {
            alert("Incorrect...please try again.")
            $("input[name='8']").prop('checked', false);
        }
    })

    $("#btn9").click(function() {
        var myList = "";
        $("input[name='9']").each(function() {
            if (this.checked) {
                myList += $(this).val();
            }
        })
        if (myList=="") {
            alert("Please choose an option!");
        } else if (myList == "acd") {
            alert("Correct!");
            $("#img9").attr("src", "images/pass.png");
        } else {
            alert("Incorrect...please try again.")
            $("input[name='9']").prop('checked', false);
        }
    })

    $("#button1").click(function() {
        var txt = $('#input1').val();
        if (txt=="") {
            alert("Please fill some code...");
        } else if (txt == "    for y in num:") {
            alert("Correct!");
            $("#img11").attr("src", "images/pass.png");
        } else {
            alert("Incorrect...please try again.")
            $("#input1").val('');
        }
    })

    $("#button2").click(function() {
        var txt1 = $('#input21').val();
        var txt2 = $('#input22').val();
        var txt3 = $('#input23').val();
        if  (txt1=="" || txt2=="" || txt3=="") {
            alert("Please fill some code...");
        } else if (txt1=="print(myNum[-1])" && txt2=="print(myNum[2:6])" && txt3=="print(myNum[2:6:2])") {
            alert("Correct!");
            $("#img21").attr("src", "images/pass.png");
        } else {
            alert("Incorrect...please try again.")
            $("#input21").val('');
            $("#input22").val('');
            $("#input23").val('');
        }
    })

    $("#button3").click(function() {
        var txt = $('#input31').val();
        if (txt=="") {
            alert("Please fill some code...");
        } else if (txt == "    print(x, end=' @ ')") {
            alert("Correct!");
            $("#img31").attr("src", "images/pass.png");
        } else {
            alert("Incorrect...please try again.")
            $("#input31").val('');
        }
    })

    $("#button4").click(function() {
        var txt1 = $('#input41').val();
        var txt2 = $('#input42').val();
        if (txt1=="" || txt2=="") {
            alert("Please fill some code...");
        } else if (txt1 == "        break" && txt2 == "        print(x)") {
            alert("Correct!");
            $("#img41").attr("src", "images/pass.png");
        } else {
            alert("Incorrect...please try again.")
            $("#input41").val('');
            $("#input42").val('');
        }
    })

})(jQuery);